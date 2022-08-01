import React, { FC } from "react";

import ReactDOM, { createPortal } from "react-dom";

interface PropsModal {
  children: JSX.Element;
  modal: any;
  close: any;
}

import { ModalDesign, Section } from "./styles";

export const ModalPortal: FC<PropsModal> = ({ children, modal, close }) => {
  let element: any = document.getElementById("modal")
  const stopEvent = (e: any) => e.stopPropagation();

  return createPortal(
    <Section onClick={close}>
      <ModalDesign
        className="modal"
        style={{ display: modal }}
        onClick={stopEvent}
      >
        {children}
      </ModalDesign>
    </Section>,
    element
  );
};
