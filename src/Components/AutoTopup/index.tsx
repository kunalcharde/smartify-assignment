import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TopUpSwitch from "../Switch";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import AutoTopupSlider from "../AutoTopupSlider";
import { credits } from "../../const";


const AutoTopup = () => {
  const minThreshold = 50;
  const autoPurchaseThreshold = 1200;

  const [autoTopUp, setAutoTopUp] = useState<boolean>(true);
  const [sliderValue, setSliderValue] = useState<number>(10);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleConfirmAutoPurchase = () => {
    console.log("Selected credit amount:", sliderValue);
  };



  function valuetext(value: number) {
    return `${value}`;
  }

  const MarkComponent = ({ value, label, threshold }: any) => (
    <Box>
      <span>{value}</span>
      <span>{label}</span>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "24px",
          maxWidth: 990,
          [theme.breakpoints.down("sm")]: {
            padding: "20px",
          },
        }}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexDirection: "row",
            }}
          >
            <Typography variant="h1">Setup Auto Top-up</Typography>
            <TopUpSwitch autoTopUp={autoTopUp} setAutoTopUp={setAutoTopUp} />
          </Box>
          <Box sx={{ maxWidth: 910 }}>
            <Typography variant="subtitle2">
              Once the credit goes below a minimum threshold{" "}
              <span className="threshold">{minThreshold}</span>, we will
              auto-purchase{" "}
              <span className="threshold">{autoPurchaseThreshold}</span>{" "}
              credits and add them to your account.{" "}
              <Link
                href="#"
                sx={{ fontWeight: 600, color: "#7B7B7B"}}
              >
                Learn More
              </Link>
            </Typography>
          </Box>
        </Box>
        {autoTopUp && <Box>
          <Box sx={{ marginTop: "20px" }}>
          <AutoTopupSlider
            onChange={handleSliderChange}
            defaultValue={10}
            getAriaValueText={valuetext}
            valueLabelDisplay="off"
            marks={credits}
            min={5}
            max={30}
            // slots={{ mark: MarkComponent }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            gap :1,
           
          }}
        >
          {credits.map((credit, index) => (
            <Typography variant="caption" key={index} sx={{ [theme.breakpoints.down("sm")]: {
              fontSize: 14,
              lineHeight: "14px",
            },}}>
              {credit.additionalLabel}
            </Typography>
          ))}
        </Box>
        </Box>}
        <Box sx={{ marginTop: "32px" }}>
          <Button
            variant="contained"
            sx={{
              padding: "12px 16px",
              borderRadius: "8px",
              boxShadow: "none",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
              [theme.breakpoints.down("sm")]: {
                fontSize: 14,
                lineHeight: "14px",
              }
            }}
            onClick={handleConfirmAutoPurchase}
            disabled={!autoTopUp}
          >
            Confirm auto-purchase
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AutoTopup;
