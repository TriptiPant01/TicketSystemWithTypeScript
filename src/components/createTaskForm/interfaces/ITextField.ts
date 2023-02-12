import { IDisabled } from "./IDisabled";
import React, { ReactElement } from "react";

export interface ITextField extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
