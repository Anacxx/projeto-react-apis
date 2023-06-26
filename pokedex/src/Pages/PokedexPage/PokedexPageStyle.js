import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding: 20px;
    position: relative; 
`;
export const StyledLogo = styled.img` 
    width: 290px;
    height: 98px;
    margin: 0;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-grow:1;
`
export const MainContainer = styled.div` 
    max-width: 1440px;
    min-height: 2455px;
    background-color: #5d5d5d;

`
export const StyledTitle = styled.h1` 
    font-size: 2rem;
    background-color: #5d5d5d;
    padding: 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
`
export const CardsContainer = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:2em;
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