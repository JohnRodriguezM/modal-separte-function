import { FC } from "react";

import { PropsButton } from "./types/type";

export const Button: FC<PropsButton> = ({ children, onClick,...props }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};
