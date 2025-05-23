import type { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
}
