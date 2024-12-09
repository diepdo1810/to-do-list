/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Container, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import { CheckboxTodoClass } from "../components/checkbox-todo-class";
import { DateTimeTodoClass } from "../components/datetime-todo-class";
import { CheckboxTodoFunction } from "../components/checkbox-todo-function";
import { DatetimeTodoFunction } from "../components/datetime-todo-function";

export const Component = function Dashboard(): JSX.Element {
  usePageEffect({ title: "TODO LIST" });

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        TODO LIST
      </Typography>

      <DateTimeTodoClass />
      <DatetimeTodoFunction />

      <CheckboxTodoFunction label="Buy milk" />
      <CheckboxTodoClass label="Buy chinsu" />
      <CheckboxTodoClass label="Buy ajinomoto" />
    </Container>
  );
};
