/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const MenuCard = ({ product }) => {

  const numberFormat = Intl.NumberFormat('US')
  if (!product) {
    return null; // or some other fallback component or message
  }

  const { name, price, image } = product;
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
        borderRadius: "1rem",
        position: "relative",
        backgroundClor: "#ffffff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        margin: "1.5rem 0",
      }}
    >
      <img
        src={image}
        alt="food"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          padding: "10px",
        }}
      />

      <Box sx={{ display: "block", alignItems: "center", padding: "10px 0px" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "20px", padding: "10px 0px"}}
          component="div"
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            color: "red",
            margin: "10px 0px",
            fontSize: "22px",
          }}
          component="div"
        >
          GH₵ {numberFormat.format(price)}
        </Typography>
      </Box>
    </Box>
  );
};

export default MenuCard;
