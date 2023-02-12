import { Priority } from "../../createTaskForm/enums/Priority";

export const renderPriorityBorderColor = (p: string): string => {
  switch (p) {
    case Priority.normal:
      return "grey.900";
    case Priority.low:
      return "info.light";
    case Priority.high:
      return "error.light";
    default:
      return "grey.900";
  }
};
