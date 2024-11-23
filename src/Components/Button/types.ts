import { To } from "react-router-dom";

export interface UIButton {
    onClick?: () => void;
    path?: To;
    title: string;
    type?: string;
}