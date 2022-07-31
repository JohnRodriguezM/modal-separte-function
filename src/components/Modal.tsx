import { useState, useEffect, FC } from 'react';

import '../css/Modal.css';

import {propsModal} from './types/type'

export const Modal: FC<propsModal> = ({children,isOpen, ...props}) => {
  return (
    <>
    <section className = {`${isOpen ? 'modal.is-opened' : 'modal'}`}>
      <div className="modal-container">
        {children}
      </div>
    </section>
    </>
  )
}
