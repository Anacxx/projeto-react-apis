import { BrowserRouter,Routes, Route } from "react-router-dom"
import {HomePage} from '../Pages/HomePage/HomePage'
import {PokedexPage} from '../Pages/PokedexPage/PokedexPage'
import {DetailsPage} from '../Pages/DetailsPage/DetailsPage'
export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
            <Route path= '/' element={<HomePage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/detalhes/:nomePokemon" element= {<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}