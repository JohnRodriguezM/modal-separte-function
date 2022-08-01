import React,{FC} from 'react'
import {createPortal} from 'react-dom'
interface PropsInfo{
  title:string;
  description:string;
  image:string;
  closeAdvertencia: any;
  info: any;
}

export const Info: FC<PropsInfo> = (props) => {
  let portalInfo: any = document.getElementById('informacionRelevante')
  return createPortal(
    <div style = {{display: props.info,
    position: 'absolute', bottom: '150px'}}>
      <button onClick = {props.closeAdvertencia}>close adverts</button>
      <h6>{props.title}</h6>
      <p>{props.description}</p>
      <img src={props.image} alt="" />
    </div>,portalInfo
  )
}
