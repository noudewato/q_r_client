/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";
// import { CategoryDetailsAction } from "../../store/actions/categoryActions";
// import { Box, Grid, Typography } from "@mui/material";
// import ProductCard from "../../components/productCardComponent/ProductCard";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
// import { Loader } from "../../components/Loader";
// import Message from "../../components/Message";
// import ScrollToTop from "../../components/ScrollToTop";
// import { baseUrl } from "../../service/ApiEndpoint";
// import axios from "axios";

// const MenuList = () => {
//   const [data, setData] = useState([]);
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`${baseUrl}/products`);
//       setData(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   });

//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const categoryDetails = useSelector((state) => state.categoryDetails);
//   const { category, loading } = categoryDetails;

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const setTimer = setTimeout(() => {
//       if (isLoading) {
//         setIsLoading(false);
//       }
//     }, 1000);

//     return () => clearTimeout(setTimer);
//   }, [isLoading]);

//   useEffect(() => {
//     dispatch(CategoryDetailsAction(id));
//   }, [dispatch, id]);

//   const [query, setQuery] = useState("");

//   const capitalizeFirstLetter = (text) => {
//     return text.trim().charAt(0).toUpperCase() + text.slice(1);
//   };

//   return (
//     <div style={{ backgroundColor: "#edc339" }}>
//       <Navbar />
//       <ScrollToTop />
//       {/* <Box> */}
//       <Box sx={{}} style={{ minHeight: "70vh" }}>
//         {isLoading || loading ? (
//           <Loader />
//         ) : category.products.length === 0 ? (
//           <Message>
//             No products found for this category.
//             <Link
//               to="/"
//               style={{
//                 color: "white",
//                 textDecoration: "none",
//                 marginRight: "5px",
//                 border: ".5px solid white",
//                 padding: "5px",
//                 borderRadius: "50%",
//                 backgroundColor: "darkblue",
//               }}
//             >
//               Go back
//             </Link>
//           </Message>
//         ) : (
//           <Box>
//             <div style={{ marginTop: "110px" }}>
//               <Box className="mb-4">
//                 {/* <Box
//                     sm="12"
//                     md="6"
//                     lg="6"
//                     style={{
//                       fontWeight: 'bold',
//                       fontSize: '22px',
//                       display: 'flex',
//                       alignItems: 'center',
//                     }}
//                   >
//                     Items found{' '}
//                     <span style={{ color: 'lightgray' }}>({category?.products?.length})</span>
//                   </Box>
//                   <Box sm="12" md="6" lg="6">
//                     <input
//                       type="text"
//                       value={query}
//                       onChange={(e) => setQuery(e.target.value)}
//                       placeholder="search..."
//                       className="menu__search"
//                       style={{
//                         width: '95%',
//                         padding: '.5rem 1rem',
//                         borderRadius: '10px',
//                         border: '1px solid gold',
//                         boxShadow: '0 4px 8px rgb(237, 237,237)',
//                         marginBottom: '1.5rem',
//                       }}
//                     />
//                   </Box> */}
//                 <Box
//                   style={{
//                     fontWeight: "bold",
//                     fontSize: "22px",
//                     display: "flex",
//                     alignItems: "center",
//                     margin: "5px",
//                     justifyContent: "space-between",
//                   }}
//                   sx={{
//                     padding: {
//                       xs: "0px 20px",
//                       sm: "20px",
//                       md: "0px 50px",
//                       lg: "0px 250px",
//                     },
//                   }}
//                 >
//                   <Link
//                     to="/"
//                     style={{
//                       color: "white",
//                       textDecoration: "none",
//                       marginRight: "5px",
//                       border: ".5px solid white",
//                       padding: "10px",
//                       borderRadius: "50%",
//                       backgroundColor: "darkblue",
//                     }}
//                   >
//                     Go back
//                   </Link>
//                   <Typography
//                     variant="h5"
//                     component="div"
//                     sx={{ fontWeight: "bold", color: "black" }}
//                   >
//                     {category.name}
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     padding: {
//                       xs: "10px 20px 0px  20px",
//                       sm: "10px 20px 0px 20px",
//                       md: "10px 500px 0px 500px",
//                     },
//                   }}
//                 >
//                   <input
//                     type="text"
//                     value={query}
//                     style={{
//                       width: "100%",
//                       padding: ".5rem 1rem",
//                       borderRadius: "10px",
//                       border: "1px solid gold",
//                       boxShadow: "0 5px 8px rgb(237, 237,237)",
//                       marginBottom: ".5rem",
//                       outline: "none",
//                     }}
//                     placeholder="search ..."
//                     onChange={(e) => setQuery(e.target.value)}
//                   />
//                 </Box>
//               </Box>
//               <Box
//                 sx={{
//                   padding: {
//                     xs: "20px",
//                     sm: "20px",
//                     md: "0px 50px",
//                     lg: "20px 250px",
//                   },
//                 }}
//               >
//                 <Grid
//                   container
//                   rowSpacing={3}
//                   columnSpacing={{ xs: 0, sm: 2, md: 3 }}
//                 >
//                   {category.products
//                     .filter((product) =>
//                       product.name.toLowerCase().includes(query)
//                     )
//                     .map((product) => (
//                       <Grid item lg={4} md={6} sm={6} xs={12} key={product._id}>
//                         <div
//                           style={{
//                             position: "relative",
//                             border: "1px solid red",
//                             height: "370px",
//                             borderRadius: "1rem",
//                             cursor: "pointer",
//                             backgroundColor: "whitesmoke",
//                           }}
//                         >
//                           <ProductCard product={product} />
//                           <div
//                             style={{
//                               fontSize: "20px",
//                               padding: "10px",
//                             }}
//                           >
//                             {capitalizeFirstLetter(product.description)}
//                           </div>
//                           <div
//                             style={{
//                               position: "absolute",
//                               bottom: 0,
//                               color: "white",
//                               backgroundColor: "green",
//                               padding: "8px",
//                               width: "100%",
//                               borderRadius: "1rem",
//                               textAlign: "center",
//                               fontWeight: "bolder",
//                               fontSize: "18px",
//                             }}
//                           >
//                             {product.name}{" "}
//                             <span
//                               style={{
//                                 backgroundColor: "red",
//                                 color: "white",
//                                 fontWeight: "bold",
//                                 padding: ".5rem",
//                                 borderRadius: "50%",
//                               }}
//                             >
//                               <span>₵</span>
//                               {product.price}
//                             </span>
//                           </div>
//                         </div>
//                       </Grid>
//                     ))}
//                 </Grid>
//               </Box>
//             </div>
//           </Box>
//         )}
//       </Box>
//       {/* </Box> */}
//       <Footer />
//     </div>
//   );
// };

// export default MenuList;

import React, { useEffect, useState } from "react";
import { baseUrl } from "../../service/ApiEndpoint";
import Navbar from "../../components/navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import Perfect from "../../assets/perfect_touch.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Loader } from "../../components/Loader";
import Message from "../../components/Message";

const MenuList = () => {
  const { id } = useParams();
  const location = useLocation();
  const categoryName = location.state;
  const [data, setData] = useState([]);
  const [productPriceData, setProductPriceData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [productFiltered, setProductFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoader, setPageLoader] = useState(true);
  const [errors, setErrors] = useState(null);
  const currencyFormat = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  });

  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (pageLoader) {
        setPageLoader(false);
      }
    }, 2500);

    return () => clearTimeout(setTimer);
  }, [pageLoader]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setErrors(null);
      const res = await axios.get(`${baseUrl}/products`);
      setData(res.data);
    } catch (error) {
      console.log(error);
      setErrors("Error fetching data!");
    }
    setIsLoading(false);
  };

  const fetchProductPriceData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/productPrices`);
      setProductPriceData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchProductPriceData();
  }, []);

  useEffect(() => {
    if (data && productPriceData && id) {
      const filterByCategory = data.filter(
        (product) => product.ProductCategoryID.toString() === id
      );

      const productIDs = filterByCategory.map((product) => product.ProductID);

      const filterByPrice = productPriceData.filter((price) =>
        productIDs.includes(price.ProductID)
      );

      setProductData(filterByPrice);
    }
  }, [data, productPriceData, id]);

  useEffect(() => {
    const searchProduct = productData?.filter((product) =>
      product.ProductName.toLowerCase().includes(productSearch.toLowerCase())
    );
    setProductFiltered(searchProduct);
  }, [productData, productSearch]);

  return (
    <div style={{ backgroundColor: "#edc339", position: "relative" }}>
      <Navbar />
      <ScrollToTop />
      {pageLoader || isLoading ? (
        <Loader />
      ) : errors ? (
        <Message>
          {errors}{" "}
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "5px",
              border: ".5px solid white",
              padding: "5px",
              borderRadius: ".5rem",
              // backgroundColor: "darkblue",
            }}
          >
            back
          </Link>
        </Message>
      ) : (
        <Box>
          <Box
            style={{
              fontWeight: "600",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              margin: "5px",
              justifyContent: "space-between",
            }}
            sx={{
              padding: {
                xs: "20px 5px",
                sm: "20px",
                md: "10px 50px",
                lg: "10px 250px",
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "5px",
                    border: ".5px solid white",
                    padding: "5px",
                    borderRadius: ".5rem",
                    // backgroundColor: "darkblue",
                  }}
                >
                  Back
                </Link>
                <Box
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {categoryName?.ProductCategoryName}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <input
                  type="text"
                  value={productSearch}
                  style={{
                    width: "100%",
                    padding: ".7rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid gold",
                    boxShadow: "0 4px 8px rgb(237, 237,237)",
                    margin: "0",
                    outline: "none",
                    fontSize: "14px",
                  }}
                  placeholder="Search ..."
                  onChange={(e) => setProductSearch(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "0px",
                sm: "0px",
                md: "0px 50px",
                lg: "20px 250px",
              },
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              },
              minHeight: "80vh",
            }}
          >
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 0, sm: 2, md: 3 }}
            >
              {productFiltered.map((cat) => (
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      borderRadius: ".3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: ".7rem",
                      height: "80px",
                      boxShadow:
                        "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                    >
                      {/* <img
                      src={`${Perfect}`}
                      alt="resto_img"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: ".7rem",
                      }}
                    /> */}
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "",
                          textTransform: "uppercase",
                        }}
                      >
                        {cat.ProductName}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "600",
                        color: "red",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {cat.SellingPriceWithTAX}₵
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "30px 10px",
                sm: "10px",
                md: "0px 50px",
                lg: "20px 250px",
              },
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
              backgroundColor: {
                xs: "white",
                sm: "white",
                md: "none",
                lg: "none",
              },
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
              minHeight: "80vh",
            }}
          >
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            >
              {productFiltered.map((cat) => (
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      borderRadius: ".3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: ".7rem",
                      boxShadow:
                        "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                    >
                      {/* <img
                      src={`${Perfect}`}
                      alt="resto_img"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: ".7rem",
                      }}
                    /> */}
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "",
                          textTransform: "uppercase",
                        }}
                      >
                        {cat.ProductName}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "600",
                        color: "red",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {cat.SellingPriceWithTAX}₵
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}

      {/* <Footer /> */}
      <Box
        sx={{
          width: "100%",
          p: "1rem",
          textAlign: "center",
          backgroundColor: "white", // Optional: add a background color to ensure it stands out
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)", // Optional: add a shadow for visual separation
        }}
      >
        Perfect Touch Menu
      </Box>
    </div>
  );
};

export default MenuList;
