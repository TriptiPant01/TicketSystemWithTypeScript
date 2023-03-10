import { Box } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { TaskHeader } from "./_taskHeader";
import { ITask } from "./interfaces/ITask";
import { Status } from "../createTaskForm/enums/Status";
import { Priority } from "../createTaskForm/enums/Priority";
import { renderPriorityBorderColor } from "./helpers/renderPriorityBorderColor";

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = "title",
    date = new Date(),
    description = "test",
    priority = Priority.low,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};
