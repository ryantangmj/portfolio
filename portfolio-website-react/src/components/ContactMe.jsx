import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <ContactMailIcon sx={{ fontSize: 26 }} />,
    label: "Email",
    value: "ryantangmj@u.nus.edu",
    href: "mailto:ryantangmj@u.nus.edu",
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 26 }} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ryantangmj",
    href: "https://www.linkedin.com/in/ryantangmj",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 26 }} />,
    label: "GitHub",
    value: "github.com/ryantangmj",
    href: "https://github.com/ryantangmj",
  },
];

function ContactMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(135deg, #0d2238 0%, #112D4E 50%, #1a3a5c 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(63,114,175,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(63,114,175,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}
          >
            <Typography
              sx={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#3F72AF",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Get in touch
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Let's work{" "}
              <Box component="span" sx={{ color: "#3F72AF" }}>
                together
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                maxWidth: 400,
              }}
            >
              I'm always open to new opportunities, collaborations, and
              interesting conversations. Feel free to reach out!
            </Typography>
          </motion.div>

          {/* Right: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ flex: 1, width: "100%" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contacts.map(({ icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2.5,
                      p: 2.5,
                      borderRadius: "14px",
                      bgcolor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(63,114,175,0.5)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "12px",
                        bgcolor: "rgba(63,114,175,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#7ab3e0",
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          mb: 0.25,
                          fontFamily: "inherit",
                        }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          color: "#ffffff",
                          fontFamily: "inherit",
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                </motion.a>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactMe;
