import * as React from "react";
import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    accent: "#112D4E",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "R", "SQL"],
  },
  {
    label: "Frontend",
    accent: "#3F72AF",
    skills: ["React", "Next.js", "Vue.js", "React Native"],
  },
  {
    label: "Backend",
    accent: "#1d5f8a",
    skills: ["Node.js", "Express.js", "FastAPI", "NestJS", "Flask", "Java EE"],
  },
  {
    label: "Databases & Cloud",
    accent: "#2874a6",
    skills: [
      "MongoDB",
      "MySQL",
      "Firebase",
      "Amazon Web Services",
      "Cloudinary",
      "Git",
    ],
  },
];

function Skills() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#ffffff",
        backgroundImage:
          "radial-gradient(rgba(63,114,175,0.07) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Typography
              sx={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#3F72AF",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              What I work with
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                color: "#112D4E",
                mb: 2,
              }}
            >
              Skills & Technologies
            </Typography>
            <Box
              sx={{
                width: 56,
                height: 4,
                borderRadius: 2,
                bgcolor: "#3F72AF",
                mx: "auto",
              }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {skillCategories.map((category, idx) => (
            <Grid item xs={12} sm={6} key={category.label}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "16px",
                    bgcolor: "#fff",
                    border: "1px solid rgba(17,45,78,0.08)",
                    boxShadow: "0 4px 20px rgba(17,45,78,0.06)",
                    height: "100%",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(17,45,78,0.11)",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 24,
                        borderRadius: 2,
                        bgcolor: category.accent,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#112D4E",
                        fontFamily: "inherit",
                      }}
                    >
                      {category.label}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: "rgba(63,114,175,0.08)",
                          color: "#3F72AF",
                          border: "1px solid rgba(63,114,175,0.18)",
                          fontFamily: "inherit",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          height: 28,
                          "&:hover": { bgcolor: "rgba(63,114,175,0.14)" },
                          transition: "background-color 0.2s",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
