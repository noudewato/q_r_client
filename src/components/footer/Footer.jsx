import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { Box, Container } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'white',
        p: ' 50px 10px',
        mt: '2rem',
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight={'bold'} color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero harum nemo libero
                ullam laboriosam quam earum molestiae quisquam vitae nesciunt.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom fontWeight={'bold'}>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Perfect Touch Restaurant, Blohum Rd, Accra
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: perfecttouch@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: 0242815853
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" fontWeight={'bold'} gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit" style={{ color: 'blue' }}>
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                style={{ color: 'red' }}
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit" style={{ color: 'green' }}>
                <WhatsApp />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit">Fawaz Noudewato</Link> {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
    </Box>
  )
}
