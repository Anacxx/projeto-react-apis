import PokemonCard from '../../componentes/PokemonCard';
import logo from '../../imagens/pokemon-logo.png'
import { HeaderContainer,StylButton,StyledLogo,LogoContainer, MainContainer,StyledTitle,CardsContainer} from './PokedexPageStyle';
import { goToHome } from '../../Router/Coordinator';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { url } from '../../constants/url';
export const PokedexPage = () =>{
    const context = useContext(GlobalContext)
    const {pokedex,removerPokedex} = context
    const navigate = useNavigate()
    return(
        <div>
            <>
                <HeaderContainer>
                    <StylButton onClick={()=> goToHome(navigate)}> &lt; Todos os Pokemons</StylButton>
                    <LogoContainer>
                        <StyledLogo src={logo}/>
                    </LogoContainer>
                </HeaderContainer>
                <MainContainer>
                    <StyledTitle>Meus Pokémons</StyledTitle>
                    <CardsContainer>
                        {pokedex.map((pokemon) => (
                            <PokemonCard
                            key ={pokemon.id}
                            pokemonUrl={`${url}/${pokemon.name}`}
                            removerPokedex = {removerPokedex}
                            />
                        ))}
                    </CardsContainer>
                </MainContainer>
            </>
        </div>
    )
}