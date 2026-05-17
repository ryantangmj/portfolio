import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#0d2238",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        py: 3,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.82rem",
          color: "rgba(255,255,255,0.32)",
          fontFamily: "inherit",
        }}
      >
        Designed & built by Ryan Tang · {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
