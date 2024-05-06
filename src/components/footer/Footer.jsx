import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "white",
        p: "10px",
        my: "1rem",
      }}
    >
      <Container>
        <Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit">Dianga</Link> {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
