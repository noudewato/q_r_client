/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareIcon from "@mui/icons-material/Square";

const PropertyCard = ({ item }) => {
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
        <Typography variant="h6">{item?.propertyTitle}</Typography>
        <Stack direction="row" spacing={2} sx={{ margin: ".5rem 0" }}>
          <Box>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              {" "}
              <span style={{ fontWeight: "bold", color: "blue" }}>
                Location:{" "}
              </span>{" "}
              {item?.propertyLocation}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "bold", color: "blue" }}>Type: </span>
              {item?.propertyType}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: "bolder" }}
            >
              <span style={{ fontWeight: "bold", color: "blue" }}>Price: </span>{" "}
              {currencyFormat.format(item?.propertyPrice)}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "bold", color: "blue" }}>
                Status:{" "}
              </span>{" "}
              {item?.propertyStatus}
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ margin: "0.5rem 0", display: "flex", gap: "0 1rem" }}>
          <Button variant="outlined" startIcon={<LocationOnIcon />}>
            {item?.city}
          </Button>
          <Button variant="outlined" endIcon={<LocalHotelIcon />}>
            {item?.beds}
          </Button>
          <Button variant="outlined" endIcon={<BathtubIcon />}>
            {item?.bathrooms}
          </Button>

          <Button variant="outlined" endIcon={<SquareIcon />}>
            {item?.dimensions}
          </Button>
        </Box>

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

export default PropertyCard;
