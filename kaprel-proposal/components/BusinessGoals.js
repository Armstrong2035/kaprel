import { Container, Typography, Paper, Box, Icon, Stack } from "@mui/material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

export default function BusinessGoals() {
  const clientNeeds = [
    {
      title: "Outdated Website",
      content:
        "Your current website is outdated and its content no longer represent your brand.",
      icon: <HourglassTopIcon />,
    },
    {
      title: "Vendor Unavailability",
      content:
        "The vendor who originally built your website is no longer in business, leaving you without support.",
      icon: <DoNotDisturbAltIcon />,
    },
    {
      title: "Show Mission and Values",
      content:
        "You want your website to effectively communicate your mission, values, and the key aspects of your identity.",
      icon: <AdsClickIcon />,
    },
    {
      title: "Modern and Fast Design",
      content:
        "You need a fast, high-performing, and visually modern website that reflects your brand.",
      icon: <OfflineBoltIcon />,
    },
    {
      title: "Dynamic Content Display",
      content:
        "You want your website to showcase ongoing projects, testimonials, and a catalog of your offerings.",
      icon: <CollectionsIcon />,
    },
    {
      title: "Lead Generation",
      content:
        "You need your website to function as a tool for generating leads and attracting potential customers.",
      icon: <InsertChartIcon />,
    },
    {
      title: "Conversion Optimization",
      content:
        "You want a website that can easily convert visitors, especially those arriving from various sources.",
      icon: <LightbulbIcon />,
    },
  ];

  return (
    <Container>
      <Typography variant="h2">Dear Kapral</Typography>

      <Typography sx={{ mt: 1 }}>
        Zeena and I enjoyed our conversation with Menna. It was fun getting to
        understand your needs. Just to clarify, you are rebuilding your website
        for the following reasons:
      </Typography>

      <Stack spacing={3} sx={{ mt: 1 }}>
        {clientNeeds.map((need, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              p: 2,
              border: "1px solid grey",
            }}
          >
            <Icon>{need.icon}</Icon>

            <Box>
              <Typography variant={"h6"}>{`${need.title}:`}</Typography>

              <Typography variant={"body"}>{need.content}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
