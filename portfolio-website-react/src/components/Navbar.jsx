import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const pages = ["About", "Skills", "Experience", "Projects", "Contact"];
const pageIds = ["aboutme", "skills", "experience", "projects", "contactme"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(17,45,78,0.98)" : "rgba(17,45,78,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(63,114,175,0.2)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 0.75 }}>
          {/* Brand */}
          <ScrollLink
            to="aboutme"
            smooth
            duration={500}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#ffffff",
                letterSpacing: "0.02em",
                fontFamily: "inherit",
                "& span": { color: "#3F72AF" },
              }}
            >
              Ryan<span>.</span>
            </Typography>
          </ScrollLink>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            {pages.map((page, index) => (
              <ScrollLink
                key={page}
                to={pageIds[index]}
                smooth
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                <Box
                  sx={{
                    px: 1.5,
                    py: 1,
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                    fontSize: "0.88rem",
                    fontFamily: "inherit",
                    letterSpacing: "0.02em",
                    position: "relative",
                    cursor: "pointer",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "4px",
                      left: "12px",
                      right: "12px",
                      height: "2px",
                      borderRadius: "1px",
                      bgcolor: "#3F72AF",
                      transform: "scaleX(0)",
                      transition: "transform 0.25s ease",
                    },
                    "&:hover": {
                      color: "#ffffff",
                      "&::after": { transform: "scaleX(1)" },
                    },
                    transition: "color 0.2s ease",
                  }}
                >
                  {page}
                </Box>
              </ScrollLink>
            ))}
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: "rgba(255,255,255,0.9)" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  bgcolor: "#112D4E",
                  border: "1px solid rgba(63,114,175,0.25)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  mt: 0.5,
                  minWidth: 160,
                },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ "&:hover": { bgcolor: "rgba(63,114,175,0.15)" } }}
                >
                  <ScrollLink
                    to={pageIds[index]}
                    smooth
                    duration={500}
                    offset={-70}
                    onClick={handleCloseNavMenu}
                    style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,0.85)",
                      width: "100%",
                    }}
                  >
                    <Typography
                      fontFamily="inherit"
                      fontSize="0.9rem"
                      fontWeight={500}
                    >
                      {page}
                    </Typography>
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
