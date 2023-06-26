import styled from "styled-components"
import tema from "../../Theme/tema"
export const HeaderContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
    flex-direction: row;
    width: 100%;
    height: 150px;
`
export const StyledLogo = styled.img` 
    width: 290px;
    height: 98px;

`
export const MainContainer = styled.div` 
    width: 100%;
    height: 1500px;
    background-color: #5d5d5d;
`
export const StyledTitle = styled.h1` 
    font-size: 2rem;
    padding: 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
`

export const Container = styled.div`
  padding: 16px;
  max-width: 850px;
  height:450px;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 20px;
  color: #ffffff;
  background-color: ${({cor}) => tema.colors[cor]};
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;
export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
  flex-direction: row;
`;
export const Pokemon = styled.img`
    width: 200px;
    height: 200px;
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 2;
`
export const ContainerImg = styled.div`
    width:  180px;
    height: 180px;
    margin-top: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StatsContainer = styled.div`
    width:  180px;
    height: 380px;
    margin: 20px;
    background-color: white;
    border-radius: 10px;
    color: black;
`
export const Pokeball = styled.img`
  width: 490px;
  height: 490px;
  position: absolute;
  top: 0;
  right: 0;
`;
export const MovesContainer = styled.div`
  width:  180px;
  height: 230px;
  background-color: white;
  border-radius: 8px;
  gap: 0.5rem;
  display: flex;
  flex-direction:column;
`
export const StyledButton = styled.button`
  border: none;
  background-color: #ff6262;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 16px 28px;
  border-radius: 8px;
  margin: 4px 2px;
  cursor: pointer;
`
export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

`;
export const ImgPokemon = styled.img`
  width:  110px;
`
export const StyledSubTitle = styled.p`
  color: black;
  font-family: 'Poppins', sans-serif;
  padding: 10px;
`
export const ProgressBar = styled.div`
  width: 100%;
  height: 0.6rem;
  display: flex;
  padding-left:5px;
  &::before {
    border-radius: 1.5vw;
    content: "";
    width: calc(${(props) => props.stat} * 1%);
    background-color: hsl(calc(${(props) => props.stat} * 0.8), 70%, 50%);
  }
  `
export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 3fr;
  justify-items: end;
  align-items: center;
  gap: 2%;
  width: 100%;
  margin-top: 1%;
  font-size: 1vw;
  border-top: 0.1vw dashed rgba(245, 222, 179, 0.5);
  border-bottom: 0.1vw dashed rgba(245, 222, 179, 0.5);
  padding: 1% 0 1% 0;
  text-align: right;
  span:nth-child(1) {
    width: 50%;
    padding-right: 3%;
    font-size: 0.9vw;
  }
  `
  export const Tit = styled.p`
    color: gray;
  `
  export const StyledMove = styled.span`
  background-color: #ECECEC;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 300;
  border-radius: 8px;
  border: 2px dashed #dbdbdb;
  margin: 10px;
  padding: 5px 8px 5px 8px;
`
export const MovesItem = styled.span`
  margin-top:6px;
` 

export const StylButton = styled.button`
  background-color: transparent;
  font-family: 'poppins';
  border: none;
  color: black;
  text-decoration: underline;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`