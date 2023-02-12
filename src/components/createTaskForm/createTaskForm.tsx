import { Box, Typography, Stack } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} variant="h6">
        Create Task
      </Typography>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <TaskSelectField
            label="Status"
            name="Status"
            items={[
              { value: Status.todo, label: Status.todo.toLocaleUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toLocaleUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="Priority"
            items={[
              { value: Priority.low, label: Priority.low.toLocaleUpperCase() },
              {
                value: Priority.normal,
                label: Priority.normal.toLocaleUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toLocaleUpperCase(),
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
