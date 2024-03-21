import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { CategoryDetailsAction } from '../../store/actions/categoryActions'
import { Box, Grid, Typography } from '@mui/material'
import ProductCard from '../../components/productCardComponent/ProductCard'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Loader } from '../../components/Loader'
import Message from '../../components/Message'
import ScrollToTop from '../../components/ScrollToTop'

const MenuList = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const categoryDetails = useSelector((state) => state.categoryDetails)
  const { category, loading } = categoryDetails

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 1000)

    return () => clearTimeout(setTimer)
  }, [isLoading])

  useEffect(() => {
    dispatch(CategoryDetailsAction(id))
  }, [dispatch, id])

  const [query, setQuery] = useState('')

  const capitalizeFirstLetter = (text) => {
    return text.trim().charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <div style={{ backgroundColor: '#edc339' }}>
      <Navbar />
      <ScrollToTop />
      {/* <Box> */}
      <Box sx={{ }} style={{ minHeight: '70vh' }}>
        {isLoading || loading ? (
          <Loader />
        ) : category.products.length === 0 ? (
          <Message>
            No products found for this category.
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '5px',
                border: '.5px solid white',
                padding: '5px',
                borderRadius: '50%',
                backgroundColor: 'darkblue',
              }}
            >
              Go back
            </Link>
          </Message>
        ) : (
          <Box>
            <div style={{ marginTop: '110px' }}>
              <Box className="mb-4">
                {/* <Box
                    sm="12"
                    md="6"
                    lg="6"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '22px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Items found{' '}
                    <span style={{ color: 'lightgray' }}>({category?.products?.length})</span>
                  </Box>
                  <Box sm="12" md="6" lg="6">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="search..."
                      className="menu__search"
                      style={{
                        width: '95%',
                        padding: '.5rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid gold',
                        boxShadow: '0 4px 8px rgb(237, 237,237)',
                        marginBottom: '1.5rem',
                      }}
                    />
                  </Box> */}
                <Box
                  style={{
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '5px',
                    justifyContent: 'space-between'
                  }}

                  sx={{ padding: { xs: '0px 20px', sm:'20px', md: '0px 50px', lg: '0px 250px'} }}
                >
                  <Link
                    to="/"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      marginRight: '5px',
                      border: '.5px solid white',
                      padding: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'darkblue',
                    }}
                  >
                    Go back
                  </Link>
                    <Typography variant='h5' component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
                       {category.name}
                    </Typography>
                </Box>
                <Box sx={{ padding: { xs: '10px 20px 0px  20px', sm: '10px 20px 0px 20px', md: '10px 500px 0px 500px' } }}>
                  <input
                    type="text"
                    value={query}
                    style={{
                      width: '100%',
                      padding: '.5rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid gold',
                      boxShadow: '0 5px 8px rgb(237, 237,237)',
                      marginBottom: '.5rem',
                      outline: 'none'
                    }}
                    placeholder="search ..."
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </Box>
              </Box>
              <Box sx={{ padding: { xs: '20px', sm:'20px', md: '0px 50px', lg: '20px 250px'} }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
                  {category.products
                    .filter((product) => product.name.toLowerCase().includes(query))
                    .map((product) => (
                      <Grid item lg={4} md={6} sm={6} xs={12} key={product._id}>
                        <div
                          style={{
                            position: 'relative',
                            border: '1px solid red',
                            height: '370px',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                            backgroundColor: 'whitesmoke',
                          }}
                        >
                          <ProductCard product={product} />
                          <div
                            style={{
                              fontSize: '20px',
                              padding: '10px',
                            }}
                          >
                            {capitalizeFirstLetter(product.description)}
                          </div>
                          <div
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              color: 'white',
                              backgroundColor: 'green',
                              padding: '8px',
                              width: '100%',
                              borderRadius: '1rem',
                              textAlign: 'center',
                              fontWeight: 'bolder',
                              fontSize: '18px',
                            }}
                          >
                            {product.name}{' '}
                            <span
                              style={{
                                backgroundColor: 'red',
                                color: 'white',
                                fontWeight: 'bold',
                                padding: '.5rem',
                                borderRadius: '50%',
                              }}
                            >
                              <span>₵</span>
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </div>
          </Box>
        )}
      </Box>
      {/* </Box> */}
      <Footer />
    </div>
  )
}

export default MenuList
