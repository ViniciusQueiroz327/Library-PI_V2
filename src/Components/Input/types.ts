import { ReactNode } from "react";

export interface UIInput {
    placeholder: string;
    name: string;
    type: string;
    icon?: ReactNode;
}