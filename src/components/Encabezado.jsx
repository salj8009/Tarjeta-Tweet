import React , {useState} from 'react'
import styled from 'styled-components'

import ImagenUsuario from '../assets/GvVTI6Dt_400x400.jpg'
//import Verificado from '../assets/correcto.svg'
import IconVerificado from './IconVerificado'
import TarjetaSmall from './TarjetaSmall'

const UsuarioImg = styled.img`
  border-radius: 50%;
  margin-right: 1em;
  width: 4em;
`
const UserName = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 34vw;
  z-index: 1;
 
`
const LinkUsuario = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight:bold;

  &:hover {
      text-decoration: underline;
    }
`
const TresPuntos = styled.span`
 padding: .2em; 
 &:hover {
   background-color: #1C93DC;
   border-radius : 2ex;
 } 
`


const Encabezado = () => {

  let [small , setsmall] = useState(false)

  const cambia = () => {   
    setsmall(!small)

  }
  // onMouseEnter={cambia}
  // onMouseLeave ={cambia}
  return(
    < >
    <UsuarioImg src={ImagenUsuario} alt="logo-usuario" onMouseEnter={cambia} />
 
    <UserName onMouseEnter={cambia}>      
      <LinkUsuario 
      href='https://twitter.com/home'>      
      NombreUsuario</LinkUsuario>
      {/*console.log(small)*/}
      <span>@usuario <IconVerificado/></span>
      <span>. 3h</span>
      <TresPuntos >...</TresPuntos> 
            
    </UserName>
 {small === true ?  <TarjetaSmall /> : '' }  
    </>
  )
}

export default Encabezado