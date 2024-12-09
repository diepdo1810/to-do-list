import React, { useState } from "react";
import Box from "@mui/joy/Box";
import { Checkbox } from "@mui/joy";
import Close from "@mui/icons-material/Close";

interface checkbox {
  label: string;
  color?: string;
  icon?: string;
}

export const CheckboxTodoFunction = ({ label = "", icon = "" }: checkbox) => {
  const [data, setData] = useState<checkbox>({
    label: "",
    color: "danger",
  });

  const showData = (isChecked) => {
    return {
      label: isChecked ? `${label} checked` : `${label} unchecked`,
      color: isChecked ? "success" : "danger",
    };
  };

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setData(showData(isChecked));
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
      <Checkbox
        onChange={handleChange}
        label={data.label !== "" ? data.label : label}
        color={data.color}
        uncheckedIcon={icon || <Close />}
      ></Checkbox>
    </Box>
  );
};
