import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Stack,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddOnSelector from "./AddOnSelector";

export default function OptionColumn({
  data,
  selectedAddons,
  setSelectedAddons,
  calculateTotal,
}) {
  return (
    <Box elevation={3} sx={{ p: 3, border: "1px solid grey", mb: 5 }}>
      <Typography variant="h6" gutterBottom>
        {data.type}
      </Typography>

      {/* Deliverables Section */}
      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
        Included Deliverables
      </Typography>
      <List dense>
        {data.deliverables.map((deliverable, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <Typography variant="body"> {deliverable} </Typography>
          </ListItem>
        ))}
      </List>

      {/* Approach Message */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontStyle: "italic",
          my: 2,
          p: 2,
          bgcolor: "grey.100",
          borderRadius: 2,
        }}
      >
        {data.message}
      </Typography>

      {/* Timeline */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Project Timeline
      </Typography>
      <List dense>
        {data.timeline.map((phase, index) => (
          <ListItem key={index} disableGutters>
            <Stack spacing={2} direction={"row"}>
              <Typography variant={"body"}>{`${index + 1}. `}</Typography>
              <ListItemText
                primary={phase}
                primaryTypographyProps={{ variant: "body" }}
              />
            </Stack>
          </ListItem>
        ))}
      </List>

      {/* Base Price */}
      <Typography variant="h6" color="primary" sx={{ my: 2 }}>
        Base Price: {data.pricing.base} AED
      </Typography>
      {data.type === "Update Current WordPress Website" && (
        <Typography>
          Please note that this price covers only the audit. After we have seen
          what the previous developer did, we will give the full price.
        </Typography>
      )}

      {/* Add-ons Selector */}
      <AddOnSelector
        addons={data.pricing.addons}
        selectedAddons={selectedAddons}
        setSelectedAddons={setSelectedAddons}
      />

      {/* Total Calculation */}
      <Box sx={{ mt: 2, textAlign: "left" }}>
        <Typography variant="h6" color="primary">
          Total: {calculateTotal(data.pricing.base, selectedAddons)} AED
        </Typography>
        {selectedAddons.length >= 2 && (
          <Typography variant="body" color="text.secondary">
            10% discount applied for multiple add-ons
          </Typography>
        )}
      </Box>
    </Box>
  );
}
