import { Box } from "@mantine/core";
import Header from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header></Header>
      {/* Body */}
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainTemplate;
