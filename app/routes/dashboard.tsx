/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Container, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import { FormTodo } from "../components/form-todo";

export const Component = function Dashboard(): JSX.Element {
  usePageEffect({ title: "TODO LIST" });

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        TODO LIST
      </Typography>

      <FormTodo />

    </Container>
  );
};
