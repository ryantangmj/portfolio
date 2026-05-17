import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import MediaCard from "./MediaCard";
import { projectDetails } from "../data/projects";

function Projects() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#ffffff" }}>
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
              Things I've built
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
              Projects
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

        {projectDetails.map((project, index) => (
          <MediaCard key={index} projectDetail={project} index={index} />
        ))}
      </Container>
    </Box>
  );
}

export default Projects;
