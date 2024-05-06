import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import SearchBar from "../../components/searchBar/SearchBar";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { Link } from "react-router-dom";
import  ArrowBackIcon  from "@mui/icons-material/ArrowBack";

const Properties = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    axios
      .get(`${baseUrl}/api/properties`)
      .then((reponse) => {
        setData(reponse.data);
      })
      .catch((error) => {
        setError("Error fetching data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Header />
      <Box sx={{ margin: "1rem", minHeight: "100vh" }}>
        <Typography variant="h4" sx={{ margin: "1rem 0" }}>
        <Link
              to="/"
              style={{
                border: "1px solid black",
                padding: ".2rem .5rem",
                borderRadius: "50%",
              }}
            >
              <ArrowBackIcon />
            </Link>{" "}  Properties
        </Typography>
        {loading ? (
          <div>...Loading</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Grid container spacing={2}>
            {data && data.map((item) => (
              <Grid key={item._id} item xs={12} sm={6} md={6}>
                <PropertyCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </Container>
  );
};

export default Properties;
