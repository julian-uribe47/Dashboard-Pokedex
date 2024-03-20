import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';

interface PokemonsState {
  [key: string]: SimplePokemon
}

const getInitialState = ():PokemonsState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons')?? '{}')

  return favorites;
}

const initialState: PokemonsState = {
  ...getInitialState(),
  // '1': { id:  '1', name: 'bulbasaur' },
  // '3': { id:  '3', name: 'venasaur' },
  // '5': { id:  '5', name: 'charmeleon' },
  // '25': { id:  '25', name: 'pikachu' }
}



const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }
      //TODO: No se debe de hacer en REDUX
      localStorage.setItem('favorite-pokemons', JSON.stringify(state))

    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer