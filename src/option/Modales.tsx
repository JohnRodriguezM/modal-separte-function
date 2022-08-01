import React from "react";
import { Modal } from "./Modal";
import { useModal } from "./useModal";

export const Modales = () => {
  const [modal1, open1, close1] = useModal("none");
  const [modal2, open2, close2] = useModal("block");
  const [modal3, open3, close3] = useModal("none");

  return (
    <div>
      <button onClick={open1}>open modal 1</button>
      <Modal modal={modal1} close = {close1}>
        <>
          <button onClick = {close1}>X</button>
          <h1>Modal 1</h1> <br />
          <input type="text" name="" id="" /> <br />
          <input type="submit" value="enviar modal" />
        </>
      </Modal>
      <hr />
      <button onClick={open2}>open modal 2</button> <br />
      <Modal modal={modal2} close = {close2}>
        <>
          <button onClick={close2}>X</button>
          <h1>Modal 2</h1>
          <input type="text" name="" id="" /> <br />
          <input type="submit" value="enviar modal" />
        </>
      </Modal>
      <hr />
      <button onClick = {open3}>open modal 3</button> <br />
      <Modal modal={modal3} close = {close3}>
        <>
          <button onClick = {close3}>X</button>
          <h1>Modal 3</h1>
          <input type="text" name="" id="" /> <br />
          <input type="submit" value="enviar modal" />
        </>
      </Modal>
    </div>
  );
};
