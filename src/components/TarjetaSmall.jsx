import React, { useState }  from 'react'
import styled from 'styled-components'

import ImagenUsuario from '../assets/GvVTI6Dt_400x400.jpg'
import IconVerificado from './IconVerificado'

const Contenedor = styled.div`
  border: solid 1px #fff;
  background-color: #282c34;
  border-radius: 1em;
  box-shadow: 1px 1px 5px #ffffff;
  display: flex; 
  margin-top: 2em;
  flex-wrap: wrap;
  padding: 1em;
  position: absolute;
  width: 17vw; 
  z-index:4;
`
const DivImagenBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: inherit;
    justify-content: space-between;
`
const UsuarioImg = styled.img`
  border-radius: 50%;
  margin-right: 1em;
  width: 3em;
`
const BotonSigueme = styled.button`
  color: #fff;
  background-color: #1DA1F2;
  border: 1px;
  border-radius: 2em;
  padding-left: 1em;
  padding-right: 1em;
  height: 70%; 
  &:hover {
    background-color: #CA2055;
  }  
`
const UsuUsu = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: min-content;
`
const UsuarioDiv = styled.div`
 display:flex;
`
const UsarioLink = styled.a`
color: #fff;
text-decoration: none;
`

const SiguendoSegudores = styled.span`
 color: #677783;
`
const NumerosDeSeg = styled.strong`
 color: #fff;
 
`


const TarjetaSmall = () => {

let [seguir, setseguir] = useState('Siguiendo')

const CambiaSeguir = () => {
  setseguir(seguir = 'dejar de seguir')
}
const CambiaOtra = () => {
  setseguir(seguir = 'Siguiendo')
}
  return(
    <Contenedor>
      <DivImagenBtn>
        <UsuarioImg src={ImagenUsuario} alt="logo-usuario"/>
        <BotonSigueme onMouseLeave={CambiaOtra}><strong onMouseEnter={CambiaSeguir} >{seguir}</strong></BotonSigueme>        
      </DivImagenBtn>
      <UsuUsu>
        <UsuarioDiv><UsarioLink href="https://twitter.com/eskoria120"><strong>Usuario</strong></UsarioLink> <IconVerificado /></UsuarioDiv> 
        <div>@usuario</div>        
      </UsuUsu>
      <p>Una plataforma con cursos gratuitos sobre ciencia de datos y aprendizaje automático</p>
      <div>
        <SiguendoSegudores><NumerosDeSeg>11mil</NumerosDeSeg> Siguiendo</SiguendoSegudores>     
        <SiguendoSegudores><NumerosDeSeg>12mil</NumerosDeSeg> seguidores</SiguendoSegudores>
      </div>
    </Contenedor>
  )
}

export default TarjetaSmall