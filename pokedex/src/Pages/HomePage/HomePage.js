import PokemonCard from '../../componentes/PokemonCard';
import logo from '../../imagens/pokemon-logo.png';
import { HeaderContainer, StyledLogo, MainContainer,StyledButton, StyledTitle, LogoContainer, CardsContainer } from "./HomePageStyle";
import { goToPokedex } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useContext } from "react";
export const HomePage = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { pokelist,
        pokedex,
        addPokedex} = context;

        const filteredPokelist = () =>
        pokelist.filter(
          (pokemonInList) =>
            !pokedex.find(
              (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
            )
        );
    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <StyledLogo src={logo} />
                </LogoContainer>
                <StyledButton onClick={() => goToPokedex(navigate)}>Pokedéx</StyledButton>
            </HeaderContainer>
            <MainContainer>
                <StyledTitle>Todos os Pokémons</StyledTitle>
                <CardsContainer>
                    {filteredPokelist().map((pokemon) =>(
                    <PokemonCard
                        key={pokemon.url}
                        pokemonUrl={pokemon.url}
                        addPokedex={addPokedex}
                    />
                    ))}
                </CardsContainer>
            </MainContainer>
        </>
    )
}