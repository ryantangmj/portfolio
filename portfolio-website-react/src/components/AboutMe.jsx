import * as React from "react";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
const roles = ["Data Scientist", "Full-Stack Developer"];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ryantangmj",
    icon: <LinkedInIcon sx={{ fontSize: 20 }} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ryantangmj",
    icon: <GitHubIcon sx={{ fontSize: 20 }} />,
    label: "GitHub",
  },
  {
    href: "mailto:ryantangmj@u.nus.edu",
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    label: "Email",
  },
];

function AboutMe() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #ffffff 0%, #f0f4f8 45%, #dbe8f0 100%)",
      }}
    >
      {/* Background blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(63,114,175,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-8%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(17,45,78,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          maxWidth: "lg",
          width: "100%",
          px: { xs: 3, sm: 5, md: 8 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 5, md: 8 },
          zIndex: 1,
        }}
      >
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#3F72AF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            Welcome to my portfolio
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
              fontWeight: 800,
              color: "#112D4E",
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            Hi, I'm{" "}
            <Box component="span" sx={{ color: "#3F72AF" }}>
              Ryan Tang
            </Box>
          </Typography>

          <Box
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              color: "#555",
              fontWeight: 400,
              mb: 2.5,
              minHeight: "2em",
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              flexWrap: "wrap",
            }}
          >
            <Box component="span">I'm a</Box>
            <Box component="span" sx={{ color: "#3F72AF", fontWeight: 600 }}>
              <ReactRotatingText
                items={roles}
                pause={2500}
                typingInterval={80}
                deletingInterval={45}
                emptyPause={400}
                cursor
              />
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "#666",
              lineHeight: 1.9,
              mb: 4,
              maxWidth: 480,
            }}
          >
            An Information Systems graduate from NUS with a passion for building
            intelligent software solutions that bridge AI and real-world impact.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
            <ScrollLink to="contactme" smooth duration={600} offset={-70}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#112D4E",
                  color: "#fff",
                  px: 3.5,
                  py: 1.3,
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 14px rgba(17,45,78,0.3)",
                  "&:hover": {
                    bgcolor: "#1a3a5c",
                    boxShadow: "0 6px 20px rgba(17,45,78,0.4)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Get in Touch
              </Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth duration={600} offset={-70}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(63,114,175,0.5)",
                  color: "#3F72AF",
                  px: 3.5,
                  py: 1.3,
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "inherit",
                  "&:hover": {
                    bgcolor: "rgba(63,114,175,0.06)",
                    borderColor: "#3F72AF",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                View Projects
              </Button>
            </ScrollLink>
          </Box>

          {/* Social icons */}
          <Box sx={{ display: "flex", gap: 1.5 }}>
            {socialLinks.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.92 }}
                style={{ display: "flex" }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "10px",
                    border: "1.5px solid rgba(17,45,78,0.12)",
                    bgcolor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#112D4E",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    "&:hover": { borderColor: "#3F72AF", color: "#3F72AF" },
                    transition: "all 0.2s ease",
                  }}
                >
                  {icon}
                </Box>
              </motion.a>
            ))}
          </Box>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", flexShrink: 0 }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 200, sm: 240, md: 290 },
              height: { xs: 200, sm: 240, md: 290 },
            }}
          >
            {/* Decorative rings */}
            <Box
              sx={{
                position: "absolute",
                inset: -14,
                borderRadius: "50%",
                border: "1.5px solid rgba(63,114,175,0.3)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: -28,
                borderRadius: "50%",
                border: "1px dashed rgba(63,114,175,0.15)",
              }}
            />
            {/* Blue offset shadow */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3F72AF, #112D4E)",
                transform: "translate(10px, 10px)",
                zIndex: 0,
                opacity: 0.85,
              }}
            />
            <Avatar
              alt="Ryan Tang"
              src="https://res.cloudinary.com/dorg7gesr/image/upload/v1713168349/iyshxeowceen6kpqvf8h.jpg"
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 1,
                border: "4px solid #ffffff",
                boxShadow: "0 20px 50px rgba(17,45,78,0.2)",
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <ScrollLink
          to="skills"
          smooth
          duration={600}
          offset={-70}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(17,45,78,0.38)",
                fontWeight: 500,
              }}
            >
              Scroll
            </Typography>
            <KeyboardArrowDownIcon
              sx={{ fontSize: 22, color: "rgba(17,45,78,0.38)" }}
            />
          </motion.div>
        </ScrollLink>
      </Box>
    </Box>
  );
}

export default AboutMe;
