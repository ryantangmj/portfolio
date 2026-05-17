import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function Experience() {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F4F7FA" }}>
      <Container maxWidth="md">
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
              Where I've worked
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
              Experience
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

        <Box>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
                disableGutters
                elevation={0}
                sx={{
                  mb: 1.5,
                  borderRadius: "12px !important",
                  border: "1px solid",
                  borderColor:
                    expanded === index
                      ? "rgba(63,114,175,0.3)"
                      : "rgba(17,45,78,0.08)",
                  bgcolor: "#ffffff",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  boxShadow:
                    expanded === index
                      ? "0 8px 28px rgba(17,45,78,0.12)"
                      : "0 2px 8px rgba(17,45,78,0.05)",
                  "&::before": { display: "none" },
                  "& .MuiCollapse-root": { overflow: "hidden" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    exp.bullets && exp.bullets.length > 0 ? (
                      <ExpandMoreIcon
                        sx={{ color: "#3F72AF", fontSize: "1.3rem" }}
                      />
                    ) : null
                  }
                  sx={{
                    px: 3,
                    py: 0.5,
                    minHeight: 76,
                    cursor:
                      exp.bullets && exp.bullets.length > 0
                        ? "pointer"
                        : "default",
                    "& .MuiAccordionSummary-content": {
                      my: 1.5,
                      alignItems: "center",
                      gap: 2,
                      flexWrap: "wrap",
                      minWidth: 0,
                    },
                    borderLeft:
                      expanded === index
                        ? "3px solid #3F72AF"
                        : "3px solid transparent",
                    transition: "border-left-color 0.25s ease",
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      bgcolor: "#F4F7FA",
                      border: "1px solid rgba(17,45,78,0.07)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{
                        width: "70%",
                        height: "70%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#112D4E",
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "#3F72AF",
                        fontWeight: 500,
                        mt: 0.3,
                      }}
                    >
                      {exp.company}
                      {exp.subtitle && (
                        <Box
                          component="span"
                          sx={{
                            color: "#6B8CAD",
                            fontWeight: 400,
                            ml: 0.75,
                            display: { xs: "none", sm: "inline" },
                          }}
                        >
                          · {exp.subtitle}
                        </Box>
                      )}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", sm: "inline-flex" },
                      px: 1.5,
                      py: 0.4,
                      bgcolor: "rgba(63,114,175,0.08)",
                      borderRadius: "20px",
                      border: "1px solid rgba(63,114,175,0.18)",
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#3F72AF",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>
                </AccordionSummary>

                {exp.bullets && exp.bullets.length > 0 && (
                  <AccordionDetails sx={{ px: 3, pt: 0, pb: 2.5 }}>
                    <Box
                      sx={{
                        display: { xs: "inline-flex", sm: "none" },
                        mb: 1.5,
                        px: 1.5,
                        py: 0.4,
                        bgcolor: "rgba(63,114,175,0.08)",
                        borderRadius: "20px",
                        border: "1px solid rgba(63,114,175,0.18)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "#3F72AF",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>

                    <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                      {exp.bullets.map((bullet, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            display: "flex",
                            gap: 1.5,
                            mb: i < exp.bullets.length - 1 ? 1.25 : 0,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "#3F72AF",
                              flexShrink: 0,
                              mt: "9px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              color: "#3D5266",
                              lineHeight: 1.7,
                              overflowWrap: "break-word",
                              minWidth: 0,
                            }}
                          >
                            {bullet}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </AccordionDetails>
                )}
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
