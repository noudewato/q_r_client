import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import InventoryIcon from "@mui/icons-material/Inventory";
import TerrainIcon from "@mui/icons-material/Terrain";

const NavMenu = () => {
  const navMenu = [
    {
      id: 1,
      name: "Lands",
      icon: <TerrainIcon />,
      url: "/landproperties",
    },
    {
      id: 1,
      name: "Properties",
      icon: <MapsHomeWorkIcon />,
      url: "/properties",
    },
    {
      id: 3,
      name: "Items",
      icon: <InventoryIcon />,
      url: "/items",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {navMenu.map((item) => (
        <Box
          key={item.id}
          sx={{
            padding: "1.5rem",
            border: "1px solid grey",
            borderRadius: "1rem",
            width: "200px",
            ":hover": {
              backgroundColor: "gold",
              transition: "all ease-in-out 300ms",
              transform: "scale(1.05)",
            },
          }}
        >
          <Link style={{ textDecoration: "none" }} to={item.url}>
            <Box>
              <div style={{ textAlign: "center", fontSize: "30px" }}>
                <span>{item.icon}</span>
              </div>
              <h1
                style={{
                  fontSize: "20px",
                  color: "black",
                  textAlign: "center",
                }}
              >
                {item.name}
              </h1>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default NavMenu;
