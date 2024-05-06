
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
const AutoTopupSlider = styled(Slider)({
    color: "#9747FF",
    height: 7,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      backgroundColor: "#fff",
      border: "6px solid currentColor",
      transition: "box-shadow 0.3s", // Add transition for smoother effect
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "0px 0px 24px rgba(151, 71, 255, 0.8)",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#E4E7EC",
    },
    "& .MuiSlider-markLabel": {
      fontWeight: 700,
      fontSize: 16,
      transform: "translateX(-100%)",
      '&[data-index="0"]': {
        transform: "none",
      },
    },
  });

  export default AutoTopupSlider