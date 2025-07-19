import type { PokemonData } from '@/utils/types';

export const cardData: PokemonData = {
  name: 'pidgeot',
  height: 15,
  weight: 395,
  abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
  sprites: {
    homefrontDefault:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
  },
};

export const mockPokemonsData: PokemonData[] = [
  {
    name: 'pidgeot',
    height: 15,
    weight: 395,
    abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
    sprites: {
      homefrontDefault:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
    },
  },
  {
    name: 'pikachu',
    height: 4,
    weight: 60,
    abilities: ['static', 'lightning-rod'],
    sprites: {
      homefrontDefault:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
    },
  },
  {
    name: 'wartortle',
    height: 225,
    weight: 10,
    abilities: ['torrent', 'rain-dish'],
    sprites: {
      homefrontDefault:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png',
    },
  },
];

export const MOCK_ENDPOINT = 'pidgeot';

export const mockApiResponseResults = [
  { name: 'test', url: 'test url' },
  { name: 'test1', url: 'test1 url' },
];

export const mockApiResponse = {
  count: 22,
  next: '2',
  previous: null,
  results: mockApiResponseResults,
};
