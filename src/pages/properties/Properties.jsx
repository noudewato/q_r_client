import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import SearchBar from "../../components/searchBar/SearchBar";
import { Property } from "../../data/Property";
import PropertyCard from "../../components/propertyCard/PropertyCard";

const Properties = () => {
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Header />
      <Box sx={{ margin: "1rem", minHeight: "50vh" }}>
        <Typography variant="h4" sx={{ margin: "1rem 0" }}>
          Properties
        </Typography>

        <Grid container spacing={2}>
          {Property.map((item) => (
            <Grid key={item._id} item xs={12} sm={6} md={6}>
              <PropertyCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
};

export default Properties;
