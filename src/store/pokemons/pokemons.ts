import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';

interface PokemonsState {
  favorites: {[key: string]: SimplePokemon}
}

// const getInitialState = ():PokemonsState => {
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons')?? '{}')

//   return favorites;
// }

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // '1': { id:  '1', name: 'bulbasaur' },
  // '3': { id:  '3', name: 'venasaur' },
  // '5': { id:  '5', name: 'charmeleon' },
  // '25': { id:  '25', name: 'pikachu' }
}



const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons( state, action: PayloadAction< {[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }
      //TODO: No se debe de hacer en REDUX
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer