import React, { useState, useMemo } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function QuoteGenerator() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedOption, setSelectedOption] = useState("wordpress");
  const [selectedAddons, setSelectedAddons] = useState([]);

  const options = {
    wordpress: {
      title: "WordPress Update",
      basePrice: 7000,
      deliverables: [
        "UX/UI design",
        "Copywriting updates",
        "Navigation improvements",
        "Accessibility enhance",
        "Content updates",
      ],
      approach: "Working with existing site limitations",
      timeline: [
        { phase: "Audit", duration: "2 weeks" },
        { phase: "Backend review", duration: "2 weeks" },
      ],
      addons: [
        { name: "Chatbot", price: 2000 },
        { name: "Analytics", price: 800 },
      ],
    },
    new: {
      title: "New Website Build",
      basePrice: 13000,
      deliverables: [
        "Complete UX/UI design",
        "Full website copywriting",
        "Full website development",
        "Responsive design",
        "SEO optimization",
      ],
      approach: "Complete custom solution tailored to your needs",
      timeline: [
        { phase: "Design", duration: "1 week" },
        { phase: "Development", duration: "2 weeks" },
      ],
      addons: [
        { name: "Chatbot", price: 2000 },
        { name: "SEO Services", price: 2500 },
      ],
    },
  };

  const calculateTotal = (option) => {
    const basePrice = options[option].basePrice;
    const addonTotal = selectedAddons
      .filter((addon) => options[option].addons.some((a) => a.name === addon))
      .reduce((sum, addon) => {
        const addonPrice = options[option].addons.find(
          (a) => a.name === addon
        ).price;
        return sum + addonPrice;
      }, 0);
    return basePrice + addonTotal;
  };

  const OptionCard = ({ optionKey }) => {
    const option = options[optionKey];

    return (
      <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
        <Typography variant="h5" gutterBottom>
          {option.title}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Deliverables
          </Typography>
          <List dense>
            {option.deliverables.map((item, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <CheckIcon color="primary" sx={{ mr: 1 }} />
                <Typography>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Approach
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {option.approach}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Timeline
          </Typography>
          {option.timeline.map((item, index) => (
            <Typography key={index} variant="body2">
              - {item.phase} ({item.duration})
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" gutterBottom>
          Base Price: {option.basePrice} AED
        </Typography>

        <Box sx={{ mb: 2 }}>
          {option.addons.map((addon) => (
            <FormControlLabel
              key={addon.name}
              control={
                <Checkbox
                  checked={selectedAddons.includes(addon.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedAddons([...selectedAddons, addon.name]);
                    } else {
                      setSelectedAddons(
                        selectedAddons.filter((a) => a !== addon.name)
                      );
                    }
                  }}
                />
              }
              label={`${addon.name} (${addon.price} AED)`}
            />
          ))}
        </Box>

        <Typography variant="h6" color="primary">
          Total: {calculateTotal(optionKey)} AED
        </Typography>
      </Paper>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" align="left" gutterBottom>
        Pricing structure for both options
      </Typography>

      <Grid container spacing={isMobile ? 4 : 2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <OptionCard optionKey="wordpress" />
        </Grid>
        <Grid item xs={12} md={6}>
          <OptionCard optionKey="new" />
        </Grid>
      </Grid>
    </Container>
  );
}
