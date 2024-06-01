import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  Toolbar,
  AdbIcon,
  MenuIcon,
  Menu,
} from "@mui/material";
import { AppBar } from "@mui/material";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const pages = ["Responses", "Interviews"];

export default function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{ display: "flex", alignItems: "center", columnCount: 2 }}
        >
          <Typography component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    sx={{
                      flexGrow: 1,
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
            <AccountCircle />
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
