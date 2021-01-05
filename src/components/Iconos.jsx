import React from 'react'
import styled from 'styled-components'

import CloudText from '../assets/1485477216-cloud-text_78566.svg'
import Retweet from '../assets/retweet_112393.svg'
import Favorito from '../assets/3643770-favorite-heart-like-likes-love-loved_113432.svg'
import UploadFile from '../assets/uploadingfile_85739.svg'

const ContenedorIconos = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  width: 100vw;
`
const CloudTextSvg = styled.img`
 width: 1.5em;
 padding: .2em;
 &:hover {
   background-color: #83bbdd;
   border-radius : 2ex;
 } 
`
const RetweetSvg = styled.img`
 width: 1.5em;
 padding: .2em; 
 &:hover {
   background-color: #57f586;
   border-radius : 2ex;
 }
`
const FavoritoSvg = styled.img`
 width: 1.5em;
 padding: .2em; 
 &:hover {
   background-color: #f55757;
   border-radius : 2ex;
 } 
`
const UploadFileSvg = styled.img`
 width: 1.5em;
 padding: .2em; 
 &:hover {
   background-color: #1C93DC;
   border-radius : 2ex;
 } 
`

const Iconos = () => {
  return(
    <ContenedorIconos>
    <CloudTextSvg src={CloudText} alt="CloudText" />
    <RetweetSvg src={Retweet} alt="Retweet" /> 
    <FavoritoSvg src={Favorito} alt="Favorito" />
    <UploadFileSvg src={UploadFile} alt="UploadFile"/>
    </ContenedorIconos>
  )
}

export default Iconos