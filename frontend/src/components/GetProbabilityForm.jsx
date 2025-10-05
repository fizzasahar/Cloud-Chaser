import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    TextField,
    Button,
    Grid,
    Chip,
    Typography,
    Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Map from "./Map"; // ya jis path pe Map component hai
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress"; // loading spinner ke liye (aapne use kiya hai niche)



// Slide Transition Component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GetProbabilityForm({
    showModal,
    setShowModal,
    location,
    setLocation,
    isMapVisible,
    setIsMapVisible,
    mapCoordinates,
    setMapCoordinates,
    selectedDate,
    setSelectedDate,
    weatherParameters,
    selectedParams,
    handleParamToggle,
    handleSearch,
    loading,
}) {
    // Hero Section ke colors aur gradients
    const PRIMARY_GRADIENT = "linear-gradient(90deg, #f97316, #f59e0b)"; // orange-500 to yellow-500
    const SECONDARY_GRADIENT = "#142e56ff"; // Dark Blue Muted
    const BACKGROUND_COLOR = "#00d9ff53"; // Dark Blue/Nearly Black (Hero background se milta julta)
    const GLASS_EFFECT = "rgba(255, 255, 255, 0.05)"; // White/9 backdrop blur effect
    const TEXT_COLOR = "#e5e7eb"; // gray-200 / white for titles

    return (
        <Dialog
            open={showModal}
            onClose={() => {
                setShowModal(false);
                setTimeout(() => {
                    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
            }}
            fullWidth
            maxWidth="md"
            scroll="paper"
            TransitionComponent={Transition}
            keepMounted
            hideBackdrop={false}
            // --- Themed Dialog Styles ---
            PaperProps={{
                sx: {
                    // Dark background, glass effect, and soft rounded corners
                    backgroundColor: BACKGROUND_COLOR,
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    color: TEXT_COLOR,
                },
            }}
        >
            {/* Dialog Title (Color and Border) */}
            <DialogTitle sx={{
                color: TEXT_COLOR,
                borderBottom: `1px solid ${GLASS_EFFECT}`,
                textAlign: "center"
            }} className="flex items-center justify-center">
                Check Weather Probability
                <IconButton
                    aria-label="close"
                    onClick={() => setShowModal(false)}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: TEXT_COLOR,
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            color: "#ef4444", // Red on hover
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Dialog Content (Dividers and Scroll) */}
            <DialogContent dividers sx={{ borderBottom: `1px solid ${GLASS_EFFECT}` }}>
                {/* Section Typography (White) */}
                <Typography variant="h6" gutterBottom sx={{ color: TEXT_COLOR }}>
                    Select Location
                </Typography>

                {/* TextField Theming (Dark Input) */}
                <TextField
                    fullWidth
                    label="Enter location name or coordinates"
                    placeholder="e.g., New York, NY or 40.7128° N, 74.0060° W"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    margin="normal"
                    size="small" // <--- TextField को भी छोटा किया
                    // --- Input Styles ---
                    sx={{
                        ".MuiInputBase-root": { color: TEXT_COLOR, backgroundColor: GLASS_EFFECT, borderRadius: '12px' }, // <--- 🌟 बॉर्डर 12px
                        ".MuiInputLabel-root": { color: '#9ca3af' }, // gray-400
                        ".MuiOutlinedInput-notchedOutline": { borderColor: 'rgba(255,255,255,0.2)' },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: '#f59e0b !important' },
                        ".Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: '#f97316 !important', borderWidth: '2px' },
                    }}
                />

                {/* Select on Map Button (Outlined with Primary Color) */}
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsMapVisible(!isMapVisible)}
                    sx={{
                        mb: 2,
                        color: '#f59e0b', // Yellow color
                        borderColor: '#f59e0b',
                        "&:hover": {
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            borderColor: '#f97316',
                        }
                    }}
                >
                    {isMapVisible ? "Hide Map" : "Select on Map"}
                </Button>

                {/* Map Component (Needs the Map component to be present) */}
                {isMapVisible && (
                    <div style={{
                        height: 300,
                        marginBottom: "40px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: `1px solid ${GLASS_EFFECT}`
                    }}>


                        <Map
                            mapCoordinates={mapCoordinates}
                            setMapCoordinates={setMapCoordinates}
                            setLocation={setLocation}
                        />


                    </div>
                )}

                {/* Date Input */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate ? dayjs(selectedDate) : null}
                        onChange={(newValue) =>
                            setSelectedDate(newValue ? newValue.format("YYYY-MM-DD") : "")
                        }
                        sx={{
                            "& .MuiInputAdornment-root .MuiSvgIcon-root": {
                                color: TEXT_COLOR,
                            },
                        }}
                        slotProps={{
                            popper: {
                                sx: {
                                    "& .MuiPaper-root": {
                                        backgroundColor: BACKGROUND_COLOR,
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.5)",
                                        color: TEXT_COLOR,
                                    },
                                    "& .MuiPickersDay-root, & .MuiButtonBase-root": {
                                        color: TEXT_COLOR,
                                        "&.Mui-selected": {
                                            backgroundColor: "#f97316 !important",
                                        },
                                        "&:hover": {
                                            backgroundColor: "#b3b2b2ff",
                                        },
                                    },
                                    "& .MuiPickersArrowSwitcher-root .MuiSvgIcon-root": {
                                        color: TEXT_COLOR,
                                    },
                                },
                            },
                            textField: {
                                fullWidth: true,
                                margin: "normal",
                                size: "small",
                                sx: {
                                    ".MuiInputBase-root": {
                                        color: TEXT_COLOR,
                                        backgroundColor: GLASS_EFFECT,
                                        borderRadius: "12px",
                                        transition: "all 0.3s",
                                    },
                                    ".MuiInputLabel-root": {
                                        color: "#b3b2b2ff",
                                        "&.Mui-focused": {
                                            color: "#f59e0b",
                                        },
                                    },
                                    ".MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#ffffff",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#f59e0b !important",
                                    },
                                    ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#f97316 !important",
                                        borderWidth: "2px",
                                    },
                                },
                            },
                        }}
                    />
                </LocalizationProvider>


                {/* Weather Parameters */}
                <Typography variant="h6" sx={{ mt: 3, mb: 1, color: TEXT_COLOR }}>
                    Weather Parameters
                </Typography>
                <Grid container spacing={1}>
                    {weatherParameters.map((param) => (
                        <Grid item xs={6} key={param.id}>
                            <Chip
                                label={
                                    <div>
                                        <Typography variant="body1" sx={{ color: TEXT_COLOR, fontWeight: "bold" }}>
                                            {param.name}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                                            {param.source}
                                        </Typography>
                                    </div>
                                }
                                onClick={() => handleParamToggle(param.id)}
                                // --- Chip Theming ---
                                sx={{
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    p: 2,
                                    height: 'auto',
                                    backgroundColor: selectedParams.includes(param.id) ? "rgba(245, 158, 11, 0.2)" : GLASS_EFFECT, // Yellow/Orange tint on selected
                                    border: `1px solid ${selectedParams.includes(param.id) ? '#f97316' : 'rgba(255, 255, 255, 0.44)'}`,
                                    transition: 'all 0.3s',
                                    "&:hover": {
                                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>

            {/* Dialog Actions */}
            <DialogActions sx={{ p: 3, borderTop: `1px solid ${GLASS_EFFECT}` }}>
                <Button
                    variant="contained"
                    fullWidth
                    disabled={!location || !selectedDate || selectedParams.length === 0 || loading}
                    onClick={() => {
                        handleSearch();      // pehle search call hoga
                        setShowModal(false); // phir modal close hoga
                    }}
                    // --- Button Theming: Gradient and Hover Effects ---
                    sx={{
                        // Hero Section CTA Button Gradient
                        background: PRIMARY_GRADIENT,
                        color: 'white',
                        fontWeight: 'semibold',
                        padding: '12px 0',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)', // Soft glow
                        transition: 'all 0.3s',
                        "&:hover": {
                            background: PRIMARY_GRADIENT, // Hover par bhi gradient rakhein
                            boxShadow: '0 6px 20px rgba(249, 115, 22, 0.6)', // Thoda zyada glow
                            transform: 'translateY(-2px)',
                        },
                        "&.Mui-disabled": {
                            background: SECONDARY_GRADIENT, // Dark, muted color when disabled
                            color: '#9ca3af',
                            boxShadow: 'none',
                        }
                    }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Check Probability"}

                </Button>
            </DialogActions>
        </Dialog>
    );
}