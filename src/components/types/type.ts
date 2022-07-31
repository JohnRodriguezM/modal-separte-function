export interface BASE {
  children: JSX.Element;
}


export interface propsModal extends BASE {
  isOpen?: boolean | (() => void);
  closeModal?: any;
}

export interface PropsButton extends BASE {
  onClick?: any;

}
