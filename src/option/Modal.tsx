import React, {FC} from 'react'

interface PropsModal{
  children: JSX.Element;
  modal: any;
  close: any;
}

import { ModalDesign,Section } from './styles';

export const Modal: FC<PropsModal> = ({children,modal,close}) => {
  const stopEvent = (e:any) => e.stopPropagation()
  return (
    <Section onClick = {close}>
      <ModalDesign className="modal" style = {{display: modal}}
      onClick = {stopEvent}
      >
      {children}
      </ModalDesign>
    </Section>
  )
}
