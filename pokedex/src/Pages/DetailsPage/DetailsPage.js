
import logo from '../../imagens/pokemon-logo.png'
import { 
    HeaderContainer,
     StyledLogo, 
     StatsContainer,
     MovesContainer,
     MainContainer,
     ContainerImg,
     Container,
     TypesContainer,
     StyledTitle,
     Pokeball,
     Pokemon,
     PokemonNumber,
     PokemonName,
     PokemonType,
     ImgPokemon,
     Stats,
     StyledSubTitle,
     ProgressBar,
     Tit,
     StyledMove,
     MovesItem,
     StyledButton,
     StylButton
     } from "./DetailsPageStyle"
import { goToHome,goToPokedex} from "../../Router/Coordinator";
import { useNavigate, useParams} from "react-router-dom";
import { url } from "../../constants/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useContext } from "react"
import PokeballImg from '../../imagens/Pokeball.png'

import { getTypes } from '../../Types/PokemonType';
import { getMoves } from "../../Moves/get-moves";
export const DetailsPage = () => {
    const context = useContext(GlobalContext)
    const { removerPokedex,} = context;
    const navigate = useNavigate() 
    const params = useParams()
    const [pokemonDet,setPokemonDet] = useState([])
    useEffect(() => {
        PokemonsDetalhes()
    },[])
    const PokemonsDetalhes = async () =>{
        try{
            const res = await axios.get(`${url}/${params.nomePokemon}`)
            setPokemonDet(res.data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }
    let sum = 0
    return(
    <>
        <HeaderContainer>
            <StylButton onClick={() => goToHome(navigate)}>&lt; Todos os Pokémons</StylButton>
            <StyledLogo src={logo}/>
            <StyledButton onClick={() => {removerPokedex(pokemonDet); goToPokedex(navigate); }}>Remover da Pokédex</StyledButton> 
        </HeaderContainer>
        <MainContainer>
            <StyledTitle>Detalhes</StyledTitle>
            <Container  cor = {pokemonDet.types? pokemonDet.types[0].type.name : 'water'}>
                <div>
                    <ContainerImg>
                        <ImgPokemon src={pokemonDet?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default} alt="Foto de costas"/>
                    </ContainerImg>
                    <ContainerImg>
                        <ImgPokemon src={pokemonDet?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.back_default} alt="Foto de costas"/>
                    </ContainerImg>
                </div>
                    <StatsContainer>
                        <StyledSubTitle>Base stats</StyledSubTitle>
                        {pokemonDet.stats?.map((item) => {
                        sum += item.base_stat;
                        return (
                            <Stats key={item.stat.name}>
                            <Tit>{item.stat.name}</Tit>
                            <p>{item.base_stat}</p>
                            <ProgressBar stat={item.base_stat}></ProgressBar>
                            </Stats>
                        );
                        })}
                        <Stats>
                            <Tit>Total</Tit>
                            <p>{sum}</p>
                        </Stats>
                    </StatsContainer> 
                <div> 
                    <PokemonNumber>#0{pokemonDet.id}</PokemonNumber>
                    <PokemonName>{pokemonDet.name}</PokemonName>
                    <TypesContainer>
                        {pokemonDet.types?.map((tipo) => {
                        return <PokemonType key={tipo} src={getTypes(tipo.type.name)} alt='' />
                        })} 
                    </TypesContainer>
                    <MovesContainer>
                        <StyledSubTitle>Moves:</StyledSubTitle>   
                            {pokemonDet.moves?.slice(0,4).map((item) => {
                                return (
                                    <MovesItem>
                                        <StyledMove>{getMoves(item.move.name)}</StyledMove>
                                    </MovesItem>
                                )})} 
                        
                    </MovesContainer>
                </div> 
                <Pokemon src={pokemonDet?.sprites?.other["official-artwork"].front_default}/> 
                <Pokeball src={PokeballImg}/>
            </Container>
        </MainContainer>
    </>
    )
}