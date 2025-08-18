import { Avatar, Box, Button, Menu, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../../styles/main.scss";

const Profile = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      setName(userObj.name);
    }
  }, []);
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setName(null);
    handleClose();
    if (onLogout) onLogout()
  };
  if (!name) return null;

  return (
    <>
      <Button
        className="profileAvatar"
        onClick={handleClick}
        startIcon={<Avatar>{name[0]}</Avatar>}
        disableRipple
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <span className="profileName">
          {name}
        </span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock
        disableAutoFocusItem
        disableEnforceFocus
        PaperProps={{
          sx: { p: 2, width: 220, borderRadius: 2 }
        }}
      >
        <Box sx={{ mb: 1, textAlign: "center" }}>
          <Avatar sx={{ width: 56, height: 56, mx: "auto", }}>
            {name[0]}
          </Avatar>
          <Typography className="profileAvatar" variant="subtitle1">{name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : ""}
          </Typography>
        </Box>
        <div className="logout_btn" onClick={handleLogout}>
          Logout
        </div>
      </Menu>

    </>
  );
};

export default Profile;
