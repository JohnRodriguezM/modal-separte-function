import {useState} from 'react';

export const useModal = (initialValue : string = 'none') : any[] => {
  const [modal, setModal] = useState(initialValue)

  const openModal = () => setModal('block')
  const closeModal = () => setModal('none')

  return[
    modal,
    openModal,
    closeModal,
  ]
}
