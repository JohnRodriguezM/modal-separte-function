import React from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { useModal } from "../hooks/useModal";
export const Modales = () => {

  //!
  const [modal1, open1, close1] = useModal(false);
  const [modal2, open2, close2] = useModal(true);
  const [modal3, open3, close3] = useModal(true);

  return (
    <div>
      <h2>these are my modals</h2>

      <Button onClick={open1}>
        <>Modal 1</>
      </Button>
      <Modal isOpen={modal1}>
        <div>
          <Button onClick={close1}>
            <>Closexx</>
          </Button>
          <h1>modal 1</h1>
          <img src="https://placeimg.com/200/200/animals" alt="" />
          <p>hola la vida</p>
        </div>
      </Modal>
      <hr />

      <Button onClick={open2}>
        <>Modal 2</>
      </Button>
      <Modal isOpen={modal2}>
        <div>
          <Button onClick={close2}>
            <>closexx</>
          </Button>
          <h1>modal 2</h1>
          <img src="https://placeimg.com/200/200/nature" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </div>
      </Modal>

      <hr />

      <Button onClick={open3}>
        <>Modal 3</>
      </Button>
      <Modal isOpen={modal3}>
        <div>
          <Button onClick={close3}>
            <>closexx</>
          </Button>
          <h1>modal 3</h1>
          <img src="https://placeimg.com/200/200/tech" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </div>
      </Modal>
    </div>
  );
};
