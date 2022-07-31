import { FC } from 'react';

import '../css/Modal.css';

import {propsModal} from './types/type'

export const Modal: FC<propsModal> = ({children,isOpen, closeModal, ...props}) => {
  const handlePropagation = (e:any) => e.stopPropagation();
  return (
    <>
    <section onClick={closeModal}>
    <section className = {`${isOpen ? 'modal is-opened' : 'modal'}`} >
      <div className="modal-container" onClick = {handlePropagation}>
        {children}
      </div>
    </section>
    </section>
    </>
  )
}
