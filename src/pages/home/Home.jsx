import { useState, useEffect } from "react";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../../components/header/Header";
// import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Loader } from "../../components/Loader";
import NavMenu from "../../components/navmenu/NavMenu";
import { Property } from "../../data/Property";
import PropertyCard from "../../components/propertyCard/PropertyCard";

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

  // const location = "Berkies TakeOut Dome, Dome Road, Accra";
  // const mapUrl = `https://www.google.com/maps/place/${encodeURIComponent(
  //   location
  // )}`;

  return (
    <Container sx={{ minHeight: "100vh", backgroundColor: "white" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ minHeight: "100vh" }}>
          <Header />
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1rem 0",
              }}
            >
              {/* <img src="assets/logo.jpg" style={{ width: '50px', height: '50px' }} alt="logo" /> */}
              <Typography
                sx={{ fontWeight: "bold", padding: "10px 0px 0px 0px" }}
                variant="h4"
                component="div"
              >
                Dianga Estate
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <NavMenu />
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              sx={{ fontWeight: "bold", padding: "10px 0px 10px 0px" }}
              variant="h4"
              component="div"
            >
              Recents Properties
            </Typography>
            <Box>
              <Grid container spacing={2}>
                {Property.slice(0, 4).map((item) => (
                  <Grid key={item._id} item xs={12} sm={6} md={6}>
                    <PropertyCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Stack
            sx={{ padding: "2rem", textAlign: "center", fontWeight: "bolder" }}
          >
            <Typography variant="h4">
              We are available 24/7 for any enquiries call or whatsapp this
              number{" "}
              <Button variant="outlined" color="success">
                {" "}
                <PhoneInTalkOutlinedIcon />
                <a
                  style={{
                    textDecoration: "none",
                    paddingLeft: "3px",
                    fontSize: "18px",
                    color: "Black",
                  }}
                  href="tel:0555009156"
                >
                  0555009156
                </a>
              </Button>
            </Typography>
          </Stack>
        </Box>
      )}

      <Footer />
    </Container>
  );
};

export default Home;
