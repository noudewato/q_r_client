import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryGroupListAction } from '../../store/actions/categoryGroupAction'
import { CategoriesListAction } from '../../store/actions/categoryActions'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import CategoryButton from '../../components/categoryComponent/CategoryButton'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Loader } from '../../components/Loader'
import ScrollToTop from '../../components/ScrollToTop'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom';
import MenuCard from '../../components/menucard/MenuCard';
import HorizontalScroll from '../../components/horizontalscrollmenu/HorizontalScroll';

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

  const [filterCategory, setFilterCategory] = useState([])

  useEffect(() => {
    dispatch(CategoryGroupListAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(CategoriesListAction())
  }, [dispatch])

  useEffect(() => {
    setFilterCategory(categories)
  }, [categories])

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

  const location = "Berkies TakeOut Dome, Dome Road, Accra";
  const mapUrl = `https://www.google.com/maps/place/${encodeURIComponent(location)}`;


  return (
      <Container sx={{ minHeight: "100vh", backgroundColor: 'white' }} maxWidth="sm">
           <Header />
           <Box>
             
             <Box sx={{display:"flex", alignItems: 'center', justifyContent: 'space-between' }}>
              {/* <img src="assets/logo.jpg" style={{ width: '50px', height: '50px' }} alt="logo" /> */}
             <Typography sx={{ fontWeight: 'bold', padding: '10px 0px 0px 0px' }} variant='h4' component="div">
                Berkies Menu
             </Typography>
             </Box>

             <Stack sx={{padding: '10px 0px'}}>

             <Box sx={{
              display:"flex", 
              alignItems: 'center', 
              borderRadius: '10px',
              width: '120px',
              marginBottom: '10px'
              }}>
                 <PhoneInTalkOutlinedIcon/>
                 <a style={{textDecoration: 'none', paddingLeft:'3px', fontSize: '18px', color: 'black' }} 
                    href='tel:0555009156'>
                   0555009156
                 </a>
              </Box>
               
               <Box sx={{display:"flex", alignItems: 'center', marginBottom: '10px'}}>
                  <PlaceOutlinedIcon/>
                  <Link 
                    style={{textDecoration: 'none', paddingLeft:'3px', fontSize: '18px', color: 'black'}} 
                    to={mapUrl} target="_blank"
                    rel="noopener noreferrer">
                     {location}
                  </Link>
              </Box>              

              <Box sx={{display:"flex", alignItems: 'center', marginBottomBottom: '10px'}}>
                 <ScheduleOutlinedIcon color='danger' />
                 <Typography sx={{textDecoration: 'none', paddingLeft:'3px', fontSize: '18px', color: 'black'}}>
                   Monday - Sunday 10:00AM - 11:00PM
                 </Typography>
              </Box>

             </Stack>
           </Box>
           <Box>
             <HorizontalScroll />
           </Box>
           <Box>
             <MenuCard/>
           </Box>

           <Box>
             <MenuCard/>
           </Box>

           <Box>
             <MenuCard/>
           </Box>

           <Box>
             <MenuCard/>
           </Box>

           <Box>
             <MenuCard/>
           </Box>
      </Container>
  )
}

export default Home
