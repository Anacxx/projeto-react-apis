
import styled from "styled-components"
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    width: 100%;
    height: 150px;
    padding: 20px;
`
export const StyledLogo = styled.img` 
    width: 290px;
    height: 98px;
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
    font-weight: bolder;
`
export const CardsContainer = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:2em;
`
export const StyledButton = styled.button`
  border: none;
  background-color: #33a4f5;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family:'poppins';
  font-size: 18px;
  padding: 12px 50px;
  border-radius: 8px;
  margin: 4px 2px;
  cursor: pointer;
`
