
export const goToHome = (navigate) => {
    navigate('/')
 }
 export const goToPokedex = (navigate) => {
    navigate('/pokedex')
 }
 export const goToDetalhes = (navigate,nomePokemon) => {
    navigate(`/detalhes/${nomePokemon}`)
 }