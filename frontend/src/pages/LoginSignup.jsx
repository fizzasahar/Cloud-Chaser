import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import './styles.css';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const LoginSignup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showActive = location.pathname.includes('/signup');

    // Password visibility toggles for both forms
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    // Loading states
    const [loginLoading, setLoginLoading] = useState(false);
    const [signupLoading, setSignupLoading] = useState(false);

    // Validation schemas
    const loginValidationSchema = Yup.object({
        email: Yup.string().email('Enter a valid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const signupValidationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[a-zA-Z0-9]+$/, 'Only letters and numbers (no spaces/special characters)')
            .min(3, 'At least 3 characters required')
            .max(20, 'Maximum 20 characters allowed')
            .required('Name is required'),
        email: Yup.string()
            .email('Enter a valid email')
            .matches(/^[^\s@]+@[^\s@]+\.(com|net)$/, 'Only .com and .net domains allowed')
            .required('Email is required'),
        password: Yup.string()
            .min(3, 'At least 3 characters required')
            .max(30, 'Maximum 30 characters allowed')
            .matches(/^[a-zA-Z0-9]*$/, 'Only letters and numbers allowed')
            .required('Password is required'),
    });

    // Login submit handler
    const handleLoginSubmit = async (values, { setSubmitting }) => {
        setLoginLoading(true);
        try {
            const response = await fetch(`${apiUrl}/api/auth/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            setLoginLoading(false);
            setSubmitting(false);

            if (response.ok) {
                dispatch(loginSuccess({
                    token: data.token,
                    userId: data._id,
                    user: data.user,  // backend se jo user object aa raha hai
                }));

                toast.success(data.message);
                navigate("/Home");
            } else {
                toast.error(data.message || 'Invalid credentials');
            }
        } catch (error) {
            setLoginLoading(false);
            setSubmitting(false);
            toast.error('Something went wrong.');
        }
    };

    // Signup submit handler
    const handleSignupSubmit = async (values, { setSubmitting }) => {
        setSignupLoading(true);
        try {
            const response = await fetch(`${apiUrl}/api/auth/user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            setSignupLoading(false);
            setSubmitting(false);

            if (response.ok) {
                dispatch(loginSuccess({
                    token: data.token,
                    userId: data._id,
                    user: data.user,
                }));

                toast.success(data.message);
                navigate("/Home");
            } else {
                toast.error(data.message || 'Error signing up');
            }
        } catch (error) {
            setSignupLoading(false);
            setSubmitting(false);
            toast.error('Something went wrong');
        }
    };

    return (
        <div className='lrdiv'>
        <div className={`wrapper ${showActive ? 'active' : ''}`}>
            {/* Background Animations */}
            <span className="animate" aria-hidden="true"></span>
            <span className="animate2" aria-hidden="true"></span>

            {/* Signup Form Box */}
            <div className="form-box register">
                <h2 className="animation" style={{ '--i': 13, '--j': 0 }}>
                    Signup
                </h2>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={signupValidationSchema}
                    onSubmit={handleSignupSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-box animation" style={{ '--i': 1, '--j': 1 }}>
                                <Field type="text" name="name" required />
                                <label>Name</label>
                                <FaUser />
                                <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="input-box animation" style={{ '--i': 2, '--j': 2 }}>
                                <Field type="email" name="email" required />
                                <label>Email</label>
                                <FaEnvelope />
                                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="input-box animation relative" style={{ '--i': 3, '--j': 3 }}>
                                <Field
                                    type={showSignupPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                />
                                <label>Password</label>

                                <button
                                    type="button"
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white"
                                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                                    tabIndex={-1}
                                >
                                    {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || signupLoading}
                                className="btn animation"
                                style={{ '--i': 4, '--j': 4 }}
                            >
                                {signupLoading ? 'Signing Up...' : 'Signup'}
                            </button>

                            <div className="logreg-link animation" style={{ '--i': 5, '--j': 5 }}>
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" className="login-link">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Login Form Box */}
            <div className="form-box login">
                <h2 className="animation" style={{ '--i': 12, '--j': 0 }}>
                    Login
                </h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLoginSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-box animation" style={{ '--i': 1, '--j': 1 }}>
                                <Field type="email" name="email" required />
                                <label>Email</label>
                                <FaUser />
                                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="input-box animation relative" style={{ '--i': 2, '--j': 2 }}>
                                <Field
                                    type={showLoginPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                />
                                <label>Password</label>

                                <button
                                    type="button"
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white"
                                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                                    tabIndex={-1}
                                >
                                    {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || loginLoading}
                                className="btn animation"
                                style={{ '--i': 3, '--j': 3 }}
                            >
                                {loginLoading ? 'Signing In...' : 'Login'}
                            </button>

                            <div className="logreg-link animation" style={{ '--i': 4, '--j': 4 }}>
                                <p>
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="register-link">
                                        Signup
                                    </Link>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Info Text Boxes */}
            <div className="info-text login">
                <h2 className="animation" style={{ '--i': 14, '--j': 0 }}>
                    Welcome Back!
                </h2>
                <p className="animation" style={{ '--i': 15, '--j': 1 }}>
                    Log in to continue your journey with us.
                </p>
            </div>

            <div className="info-text register">
                <h2 className="animation" style={{ '--i': 16, '--j': 0 }}>
                    Get Started!
                </h2>
                <p className="animation" style={{ '--i': 17, '--j': 1 }}>
                    Join our community by signing up now.
                </p>
            </div>
        </div>
        </div>
    );
};

export default LoginSignup;
