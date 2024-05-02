/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const currencyFormat = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.29)",
        border: "0.5px solid grey",
        borderRadius: "1rem",
      }}
    >
      <Box sx={{ padding: "1rem 1rem 0 1rem", borderRadius: "1rem" }}>
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.29)",
            borderRadius: "1rem",
          }}
          src={item?.images[0]}
          alt={item?.propertyTitle}
        />
      </Box>

      <Box sx={{ padding: "1rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{item?.productName}</Typography>
          <Typography variant="h6" sx={{fontWeight:"bolder"}}>
            {currencyFormat.format(item?.productPrice)}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ margin: ".5rem 0" }}>
          <Box>
            <Typography variant="body2" sx={{ fontSize: "18px" }}>
              {" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Category:{" "}
              </span>{" "}
              {item?.productCategory}
            </Typography>
          </Box>
        </Stack>

        <Box>
          <Button
            sx={{ width: "48%", marginRight: "10px" }}
            variant="contained"
            color="primary"
          >
            <Link
              style={{
                textDecoration: "none",
                paddingLeft: "3px",
                fontSize: "18px",
                color: "white",
              }}
              to="/"
            >
              View Details
            </Link>
          </Button>
          <Button variant="contained" sx={{ width: "48%" }} color="success">
            {" "}
            <PhoneInTalkOutlinedIcon />
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "3px",
                fontSize: "18px",
                color: "white",
              }}
              href="tel:0555009156"
            >
              0555009156
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCard;
