import { Box } from '@mui/material'

const Header = () => {
  return (
    <Box sx={{ backgroundColor:'gold', borderRadius: "20px" }}>
       <img 
         src="https://graphicsfamily.com/wp-content/uploads/edd/2020/04/house-apartment-logo-blue-png-transparent.png" 
         style={{ width: "100%", height: "400px" }} 
         alt="logo" 
        />
    </Box>
  )
}

export default Header
