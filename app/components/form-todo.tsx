import React, { useState } from "react";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import { CheckboxTodoFunction } from "./checkbox-todo-function";

export const FormTodo = () => {
  const [label, setLabel] = useState<string>("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setLabel(label);
    setData([...data, label]);
    setLabel("");
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
      <Input
        className=""
        style={{ border: "0px solid #000" }}
        slotProps={{
          input: {
            className:
              "w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
          },
        }}
        aria-label="Demo input"
        placeholder="Type something…"
        onChange={(e) => setLabel(e.target.value)}
        value={label}
      >
      </Input>
      <Button onClick={handleAdd}>
        Add
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 300,
          "& > div": { p: 2, borderRadius: "md", display: "flex" },
        }}>
        {data.map((item, index) => (
          <Box key={index}>
            <CheckboxTodoFunction label={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
