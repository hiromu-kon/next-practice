import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Main } from "../components/layout/Main";
import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

export default function Rooms() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Main>
        <Typography paragraph>
          Rooms
        </Typography>
        <Typography paragraph>
        </Typography>
      </Main>
    </Box>
  );
}