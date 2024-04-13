"use client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
}
