import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';
import { PokemonsResponse } from '../../../pokemons/interfaces/pokemons-response';
import { SimplePokemon } from '../../../pokemons/interfaces/simple-pokemon';



export const metadata = {
 title: 'favoritos',
 description: '151 Pokémons',
};




export default async function PokemonsPage() {

    return (
        <div className=" flex flex-col p-2">

            <span className=" text-3xl my-2">Pokémons favoritos <small className=' text-blue-600'>Global State</small></span>
            
            <PokemonGrid pokemons={[]} />

        </div>
    );
}