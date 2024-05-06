import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import SearchBar from "../../components/searchBar/SearchBar";
import ItemCard from "../../components/itemCard/ItemCard";
import { baseUrl } from "../../api/api";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Items = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/api/products`);
      setData(response.data);
    } catch (error) {
      setError("Error fetching data!");
    }

    setLoading(false);
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
          </Link>{" "}
          Items
        </Typography>
        {loading ? (
          <div>..Loading</div>
        ) : error ? (
          <div
            style={{
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: "lightred",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            {error}
          </div>
        ) : (
          <Grid container spacing={2}>
            {data && data.map((item) => (
              <Grid key={item._id} item xs={12} sm={6} md={6}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </Container>
  );
};

export default Items;
