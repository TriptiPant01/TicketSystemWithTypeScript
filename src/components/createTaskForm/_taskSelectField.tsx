import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { FC, ReactElement } from "react";
import { ISelectItems, ISelectField } from "./interfaces/ISelectField";

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = "",
    label = "select Box",
    name = "select Box",
    items = [{ value: "", label: "add items" }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        id={`${name}-id`}
        onChange={onChange}
        label={label}
        name={name}
        disabled={disabled}
        value={value}
      >
        {items.map((item, index) => {
          return (
            <MenuItem key={item.value + index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
