import { useState } from "react";
import { Topbar } from "../components/layout/Topbar";

export default function Register() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  return (
    <Topbar open={open} handleDrawerOpen={handleDrawerOpen} isLogin={false} />
  );
}