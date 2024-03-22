import { Box, Typography } from "@mui/material"

const MenuCard = () => {
  return (
    <Box sx={{ 
        border: '1px solid lightgray', 
        display: "flex",  
        padding: '.5rem',
        borderRadius: '1rem',
        position: "relative",
        backgroundClor: "#ffffff",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        margin: '1rem 0'
        }}>
        <img 
        src="https://cdn.filestackcontent.com/resize=width:430,height:430,fit:crop,align:center/8NmM6NwZQXa6qqzhSRxq" 
        alt="food" 
        style={{ width: '120px', height: '120px', borderRadius: '50%'}}
        />

        <Box sx={{ padding: "10px"}}>
            <Typography sx={{ fontWeight:"bold" }} component="div">
              JOLLOF WITH CHICKEN WINGS
            </Typography>

            <Typography sx={{ fontWeight:"bold", color:"red", margin: "20px 0px" }} component="div">
                GHC75.00
            </Typography>
        </Box>

       
       
    </Box>
  )
}

export default MenuCard
