import React, { useState } from "react";
import { Container, Grid, Divider, Typography, Button } from "@mui/material";
import OptionColumn from "./OptionColumn";
import { wordpressData, newWebsiteData } from "../utils/data";

export default function QuoteGenerator() {
  const [selectedAddonsWordpress, setSelectedAddonsWordpress] = useState([]);
  const [selectedAddonsNewSite, setSelectedAddonsNewSite] = useState([]);

  const calculateTotal = (basePrice, addons) => {
    const addonTotal = addons.reduce((sum, addon) => sum + addon.price, 0);
    const discount = addons.length >= 2 ? 0.1 : 0;
    const discountAmount = (basePrice + addonTotal) * discount;
    return basePrice + addonTotal - discountAmount;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Website Development Options
      </Typography>

      <Grid container spacing={3} direction={"row"}>
        <Grid item xs={12} md={6}>
          <OptionColumn
            data={wordpressData}
            selectedAddons={selectedAddonsWordpress}
            setSelectedAddons={setSelectedAddonsWordpress}
            calculateTotal={calculateTotal}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <OptionColumn
            data={newWebsiteData}
            selectedAddons={selectedAddonsNewSite}
            setSelectedAddons={setSelectedAddonsNewSite}
            calculateTotal={calculateTotal}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
