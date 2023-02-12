import { Box, Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { ITaskDescription } from "./interfaces/ITaskDescription";

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = "desc" } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};
