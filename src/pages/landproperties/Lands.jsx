import { Box, Container, Grid,  Typography } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import SearchBar from "../../components/searchBar/SearchBar";
import { LandProperties } from "../../data/LandProperty";
import LandPropertyCard from "../../components/landPropertyCard/LandPropertyCard";

const Lands = () => {
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Header />
      <Box sx={{ margin: "1rem", minHeight: "50vh" }}>
        <Typography variant="h4" sx={{ margin: "1rem 0" }}>
          Land Properties
        </Typography>

        <Grid container spacing={2}>
          {LandProperties.map((item) => (
            <Grid key={item._id} item xs={12} sm={6} md={6}>
              <LandPropertyCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
};

export default Lands;
