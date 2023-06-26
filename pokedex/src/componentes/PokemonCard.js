import { Container, Pokeball,DetailsButton,CapturarButton,ExcluirButton, Pokemon, PokemonType, PokemonName, PokemonNumber, ButtonContainer, TypesContainer} from "./PokemonCardStyle";
import PokeballImg  from '../imagens/Pokeball.png'
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from '../Contexts/GlobalContext';
import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getTypes } from "../Types/PokemonType";
import { goToDetalhes } from "../Router/Coordinator";

const PokemonCard = (props) => {
  const {pokemonUrl} = props
  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)
  const {addPokedex,removerPokedex } = context;
  const [pokemon,setPokemon] = useState({})
  useEffect(() => {
    reqPokemon()
  },[])
  const reqPokemon = async() => {
    try{
      const res = await axios.get(pokemonUrl)
      setPokemon(res.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <Container cor = {pokemon.types? pokemon.types[0].type.name : 'water'}>
        <div> 
          <PokemonNumber>#0{pokemon.id}</PokemonNumber>
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesContainer>
            {pokemon.types?.map((tipo) => ( 
              <PokemonType key={tipo} src={getTypes(tipo.type.name)} alt='' />
              ))} 
          </TypesContainer>
          <DetailsButton onClick={() => goToDetalhes(navigate,pokemon.name)}>
          Detalhes</DetailsButton>
        </div> 
        <Pokemon src={pokemon?.sprites?.other["official-artwork"].front_default} />
        <ButtonContainer>
          {location.pathname === '/' ? (
            
            <CapturarButton onClick={() => addPokedex(pokemon)}>Capturar!</CapturarButton>
          ) : (
            <ExcluirButton onClick={() => removerPokedex(pokemon)}>Excluir</ExcluirButton>  
          )
          }
        </ButtonContainer>
        <Pokeball src={PokeballImg}/>
      </Container>
    </>
  );
};
export default PokemonCard;
