import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";

interface datetime {
  time: string;
  format: string;
}

export const DatetimeTodoFunction = () => {
  const [data, setData] = useState<datetime>({
    time: new Date().toLocaleTimeString(),
    format: "24h",
  });

  const handleTime = () => {
    console.log("handle time");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        "& > div": { p: 2, borderRadius: "md", display: "flex" },
      }}
    >
      <Link href="#" level="title-lg">
        {data.time}
      </Link>
    </Box>
  );
};
