import { useState, useEffect } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import MenuList from "../menu/MenuList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(setTimer);
  }, [isLoading]);

  const location = "Berkies TakeOut Dome, Dome Road, Accra";
  const mapUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    location
  )}`;

  return (
    <Container
      sx={{ minHeight: "100vh", backgroundColor: "white" }}
      maxWidth="sm"
    >
      <Header />
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <img src="assets/logo.jpg" style={{ width: '50px', height: '50px' }} alt="logo" /> */}
          <Typography
            sx={{ fontWeight: "bold", padding: "10px 0px 0px 0px" }}
            variant="h4"
            component="div"
          >
            Berkies Menu
          </Typography>
        </Box>

        <Stack sx={{ padding: "10px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              width: "120px",
              marginBottom: "10px",
            }}
          >
            <PhoneInTalkOutlinedIcon />
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "3px",
                fontSize: "18px",
                color: "black",
              }}
              href="tel:0555009156"
            >
              0555009156
            </a>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
          >
            <PlaceOutlinedIcon />
            <Link
              style={{
                textDecoration: "none",
                paddingLeft: "3px",
                fontSize: "18px",
                color: "black",
              }}
              to={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location}
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottomBottom: "10px",
            }}
          >
            <ScheduleOutlinedIcon color="danger" />
            <Typography
              sx={{
                textDecoration: "none",
                paddingLeft: "3px",
                fontSize: "18px",
                color: "black",
              }}
            >
              Monday - Sunday 10:00AM - 11:00PM
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <MenuList />
      </Box>

        <Footer />
    </Container>
  );
};

export default Home;
