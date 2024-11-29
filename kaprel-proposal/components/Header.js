import Image from "next/image";
import header from "../public/images/header.png";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "relative",
        height: "200px",
        overflow: "hidden",
        marginBottom: isSmallScreen ? "0px" : "30px", // Adjust marginBottom based on the screen size
        border: isSmallScreen ? "1px solid grey" : null,
      }}
    >
      <Image
        src={header}
        alt="Header Image"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
    </div>
  );
}
