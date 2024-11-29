import React from "react";
import {
  Typography,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
} from "@mui/material";

export default function AddOnsSelector({
  addons,
  selectedAddons,
  setSelectedAddons,
}) {
  const handleAddonToggle = (addon) => {
    setSelectedAddons((prev) => {
      const isSelected = prev.find((a) => a.name === addon.name);

      if (isSelected) {
        return prev.filter((a) => a.name !== addon.name);
      } else {
        return [...prev, addon];
      }
    });
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
        Optional Add-ons
      </Typography>
      <List dense>
        {addons.map((addon, index) => (
          <ListItem key={index} disableGutters>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedAddons.some((a) => a.name === addon.name)}
                  onChange={() => handleAddonToggle(addon)}
                />
              }
              label={`${addon.name} - ${addon.price} AED`}
              componentsProps={{ typography: { variant: "body" } }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
