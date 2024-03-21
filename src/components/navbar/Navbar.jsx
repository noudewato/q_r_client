import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import { Stack, Divider, Container } from '@mui/material'
// import { styled, alpha } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Perfect from "../../assets/perfect_touch.jpg"
// import { Image } from '@mui/icons-material'

const drawerWidth = 240
// const navItems = ['Home', 'Shop', 'About', 'Contact']

function Navbar(props) {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  // const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0)
  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  // const StyledAccount = styled('div')(({ theme }) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(2, 2.5),
  //   borderRadius: Number(theme.shape.borderRadius) * 1.5,
  //   backgroundColor: alpha(theme.palette.grey[500], 0.12),
  // }))

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Stack direction="row">
          <Button>
            <Link
              style={{ color: 'black', listStyle: 'none', textDecoration: 'none' }}
              to={'/'}
            >
              <Stack direction="row">
              <Link
                style={{
                  color: 'black',
                  listStyle: 'none',
                  textDecoration: 'none',
                }}
                to={'/'}
              >
                <Stack direction="row" sx={{ fontSize: '14px' }} alignItems="center">
                  <img
                    src={`${Perfect}`}
                    alt="perfect_touch"
                    width="50px"
                    height="50px"
                    style={{ marginRight: '3px' }}
                  />
                  Perfect Touch
                </Stack>
              </Link>
              </Stack>
            </Link>
          </Button>
        </Stack>
      </Box>

      <Divider />

      <Box sx={{ my: 5, mx: 2.5 }}>
        <Box sx={{ ml: 2 }}>
          <a
            style={{
              textDecoration: 'none',
              padding: '10px 15px',
              borderRadius: '20px',
              border: '0.5px solid white',
              backgroundColor: 'orange',
              color: 'white',
              fontWeight: 'bold',
            }}
            href="tel:+233242815853"
          >
            0242815853
          </a>
        </Box>
      </Box>

      {/* <List sx={{ display: 'none' }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List> */}
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex', mb: '6rem', position: 'relative' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: 'white', color: 'black', marginBottom: '1rem' }}>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: '1rem',
            }}
          >
            <Box sx={{ display: { sm: 'block' } }}>
              <Link
                style={{
                  color: 'black',
                  listStyle: 'none',
                  textDecoration: 'none',
                }}
                to={'/'}
              >
                <Stack direction="row" sx={{ fontSize: '22px' }} alignItems="center">
                  <img
                    src={`${Perfect}`}
                    alt="perfect_touch"
                    width="50px"
                    height="50px"
                  />
                  Perfect Touch
                </Stack>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {/* <Box>
              <CNavLink to="/cart" component={NavLink} className="position-relative">
                <CIcon icon={cilCart} size="lg" style={{ fontWeight: 'bold', fontSize: '18px' }} />{' '}
                <CBadge
                  className="border border-light p-1"
                  color="danger"
                  position="top-end"
                  shape="rounded-circle"
                >
                  {cartCount}
                </CBadge>
              </CNavLink>
            </Box> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' },
                mr: { xs: 0, sm: 0, lg: 4 },
              }}
            >
              <a
                style={{
                  textDecoration: 'none',
                  padding: '10px 15px',
                  borderRadius: '20px',
                  border: '0.5px solid white',
                  backgroundColor: 'orange',
                  color: 'white',
                  fontWeight: 'bold',
                }}
                href="tel:+233242815853"
              >
                0242815853
              </a>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon
                sx={{
                  fontSize: '2.5rem',
                  border: '1px solid orange',
                  color: 'orange',
                  borderRadius: '10px',
                }}
              />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default Navbar
