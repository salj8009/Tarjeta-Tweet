import React from 'react'
import styled from 'styled-components'

import ImgSubtarjeta from '../assets/gustas-brazaitis-xNKy-Cu20d4-unsplash.jpg'




const SegundaTarjeta = styled.div`
  border-radius: 1em 1em 1em 1em;
  border: solid .5px #fff;
  display: flex;
  flex-wrap: wrap;  
`
const ImagenSubtarjeta = styled.img`
    border-radius: 1em 1em 0 0;
    width: 100%;
    height: auto;
 
  @supports(object-fit: cover){
      .box img{
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
  }
`

const Parrafo = styled.p`
  color: #fff;  
  margin: 1em;
  
`

const SubTarjeta = () => {
  return(
    <SegundaTarjeta>
      <ImagenSubtarjeta src={ImgSubtarjeta} alt="imagen de tarjeta"/>
        <Parrafo>
          Una mañana, tras un sueño intranquilo, 
        Gregorio Samsa se despertó convertido en un monstruoso insecto. 
        Estaba echado de espaldas sobre un du
        </Parrafo>  
    </SegundaTarjeta>
  )
}

export default SubTarjeta