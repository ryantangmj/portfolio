import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";

export default function MediaCard({ projectDetail, index }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const images = projectDetail.imgSrc;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(17,45,78,0.08)",
          boxShadow: "0 4px 24px rgba(17,45,78,0.07)",
          mb: 4,
          bgcolor: "#fff",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:hover": {
            boxShadow: "0 16px 48px rgba(17,45,78,0.13)",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Image side */}
        <Box
          sx={{
            width: isMobile ? "100%" : "48%",
            flexShrink: 0,
            bgcolor: "#F4F7FA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: isMobile ? 220 : 320,
            overflow: "hidden",
          }}
        >
          <Swiper
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "85%",
                    height: "auto",
                    maxHeight: 300,
                    objectFit: "contain",
                    mx: "auto",
                    display: "block",
                    py: isMobile ? 2 : 3,
                  }}
                  image={src}
                  alt={`${projectDetail.title} screenshot ${idx + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Content side */}
        <CardContent
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "&:last-child": { pb: { xs: 3, md: 4 } },
          }}
        >
          <Typography
            sx={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#3F72AF",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Project {String(index + 1).padStart(2, "0")}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: 700,
              color: "#112D4E",
              lineHeight: 1.3,
              mb: 1.5,
              fontFamily: "inherit",
            }}
          >
            {projectDetail.title}
          </Typography>

          {!isMobile && (
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#666",
                lineHeight: 1.8,
                mb: 2.5,
                fontFamily: "inherit",
              }}
            >
              {projectDetail.description}
            </Typography>
          )}

          <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mb: 3 }}>
            {projectDetail.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: "rgba(63,114,175,0.08)",
                  color: "#3F72AF",
                  border: "1px solid rgba(63,114,175,0.2)",
                  fontFamily: "inherit",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  height: 26,
                }}
              />
            ))}
          </Stack>

          <motion.a
            href={projectDetail.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: "8px",
                bgcolor: "#112D4E",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "inherit",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(17,45,78,0.25)",
                "&:hover": { bgcolor: "#1a3a5c" },
                transition: "background-color 0.2s",
              }}
            >
              <GitHubIcon sx={{ fontSize: 18 }} />
              View on GitHub
            </Box>
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
