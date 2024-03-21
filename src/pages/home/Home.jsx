import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryGroupListAction } from '../../store/actions/categoryGroupAction'
import { CategoriesListAction } from '../../store/actions/categoryActions'
import CategoryButton from '../../components/categoryComponent/CategoryButton'
import { Box, Grid } from '@mui/material'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Loader } from '../../components/Loader'
import ScrollToTop from '../../components/ScrollToTop'

const Home = () => {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [categorySearch, setCategorySearch] = useState('')
  const [activeGroup, setActiveGroup] = useState(null)

  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 1000)

    return () => clearTimeout(setTimer)
  }, [isLoading])

  const categoryGroupList = useSelector((state) => state.categoryGroupList)
  const { categoryGroup, loading } = categoryGroupList

  const categoryList = useSelector((state) => state.categoryList)
  const { categories, loading: categoryLoading } = categoryList

  useEffect(() => {
    dispatch(CategoryGroupListAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(CategoriesListAction())
  }, [dispatch])

  useEffect(() => {
    // Set the active group to null to represent all groups
    setActiveGroup(null)
    // Fetch all categories when the app starts
    dispatch(CategoriesListAction())
  }, [dispatch])

  const handleAllClick = () => {
    setActiveGroup(null) // Set active group to null to represent all categories
    dispatch(CategoriesListAction()) // Fetch all categories
  }

  return (
    <div style={{ backgroundColor: '#edc339' }}>
      <Navbar />
      <ScrollToTop/>
      <Box style={{ minHeight: '70vh' }}>
        {isLoading || loading ? (
          <Loader />
        ) : (
          <Box>
            <div style={{ marginTop: '130px' }}>
              <Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: '1rem',
                  }}
                >
                  <span
                    style={{
                      padding: '.5rem 1rem',
                      marginBottom: '.5rem',
                      marginRight: '.5rem',
                      cursor: 'pointer',
                      border: '.5px solid gray',
                      borderRadius: '8px',
                      backgroundColor: !activeGroup ? 'green' : 'white',
                      color: !activeGroup ? 'white' : 'green',
                    }}
                    onClick={handleAllClick}
                  >
                    All Menus
                  </span>
                  {categoryGroup &&
                    categoryGroup.map((group) => (
                      <span
                        key={group._id}
                        className={activeGroup === group._id ? 'active' : ''}
                        style={{
                          padding: '.5rem 1rem',
                          marginBottom: '.5rem',
                          marginRight: '.5rem',
                          cursor: 'pointer',
                          border: '.5px solid gray',
                          borderRadius: '8px',
                          backgroundColor: activeGroup === group._id ? 'green' : 'white',
                          color: activeGroup === group._id ? 'white' : 'green',
                        }}
                        onClick={() => {
                          dispatch(CategoriesListAction(group.name))
                          setActiveGroup(group._id)
                        }}
                      >
                        {group.name}
                      </span>
                    ))}
                </Box>
              </Box>
              <Box>
                <Box sx={{ padding: { xs: '0px 20px', sm: '0 30px', md: '0 300px', lg: '0 500px' }}}>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '.5rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid gold',
                      boxShadow: '0 4px 8px rgb(237, 237,237)',
                      marginBottom: '.5rem',
                      outline: 'none'
                    }}
                    placeholder="search ..."
                    onChange={(e) => setCategorySearch(e.target.value)}
                  />
                </Box>
              </Box>
              {categoryLoading ? (
                <Loader />
              ) : (
                <Box sx={{ padding: { xs: '20px', sm:'20px', md: '0px 50px', lg: '20px 250px'} }}>
                  <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
                    {categories &&
                      categories
                        ?.filter((category) =>
                          // category?.categoryGroup === activeGroup &&
                          category?.name?.toLowerCase().includes(categorySearch),
                        )
                        .map((category) => (
                          <Grid item lg={4} md={6} sm={6} xs={12} key={category._id}>
                            <CategoryButton category={category} />
                          </Grid>
                        ))}
                  </Grid>
                </Box>
              )}
            </div>
          </Box>
        )}
      </Box>
      <Footer />
    </div>
  )
}

export default Home
