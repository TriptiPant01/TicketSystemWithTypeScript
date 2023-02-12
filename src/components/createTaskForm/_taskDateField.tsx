import React, { FC, ReactElement } from "react";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IDateField } from "./interfaces/IDateField";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = new Date(),
    onChange = (date) => console.log(date),
    disabled = false,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        value={value}
        label="Task Date"
        inputFormat="dd/MM/yyyy"
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};
