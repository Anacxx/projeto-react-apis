import styled from "styled-components";
import tema from "../Theme/tema";
export const Container = styled.div`
  padding: 16px;
  min-width: 280px;
  max-width: 360px;
  border-radius: 12px;
  display: flex;
  position: relative;
  color: #ffffff;
  background-color: ${({cor}) => tema.colors[cor]};
  margin: 15px 0px 15px 0px;
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

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
  flex-direction: row;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`
export const Pokemon = styled.img`
  width: 46%;
  height: auto;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`
export const CapturarButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 8px 22px;
  border-radius: 8px;
  margin: 4px 2px;
  cursor: pointer;
`
export const ExcluirButton = styled.button`
  border: none;
  background-color: #FF6262;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 8px 28px;
  border-radius: 8px;
  margin: 4px 2px;
  cursor: pointer;
`
export const DetailsButton = styled.button`
  background-color: transparent;
  font-family: 'poppins';
  border: none;
  color: white;
  text-decoration: underline;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`