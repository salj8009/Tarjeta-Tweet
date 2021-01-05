import styled, {createGlobalStyle} from 'styled-components'
import Encabezado from './components/Encabezado'
import Iconos from './components/Iconos'
import MiTexto from './components/Mitexto'
import SubTarjeta from './components/SubTarjeta'
//import './App.css';
const GlobalStyle = createGlobalStyle`
  body{
    color:white;
    display: flex;
    justify-content: center;
    background-color: #282c34;
    height: 100vh;
  }

 
`
const MiApp = styled.div`
      padding: 1em;
    border: solid 1px;
    border-radius: .2em;
    display: flex;
    margin-top: 2em;
    width: 40vw;
    align-items: flex-start;
    flex-wrap: wrap;
    &:hover {
      background-color: #fff2;
    }
`
function App() {
  return (

    <MiApp>
        <GlobalStyle />   
        <Encabezado />
        <MiTexto /> 
        <SubTarjeta />
        <Iconos />
    </MiApp>
  );
}

export default App;
