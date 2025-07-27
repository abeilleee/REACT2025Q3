import type { Pokemon } from '@/services/api/types';
import type { PokemonData } from '@/utils/types';

export const MOCK_ENDPOINT = 'pidgeot';
export const NOT_EXISTING_ENDPOINT = 'abc';
export const TEST_ENDPOINT = 'test';

export const cardData: PokemonData = {
  name: 'pidgeot',
  height: 15,
  weight: 395,
  abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
  sprites: {
    homefrontDefault:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
  },
  stats: {
    name: ['stat', 'test'],
    base: [10, 22],
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
    stats: {
      name: ['stat', 'test'],
      base: [10, 22],
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
    stats: {
      name: ['stat', 'test'],
      base: [10, 22],
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
    stats: {
      name: ['stat', 'test'],
      base: [10, 22],
    },
  },
];

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

export const mockPokemonDataResponse: Pokemon = {
  name: 'pidgeot',
  height: 15,
  weight: 395,
  abilities: [
    {
      ability: {
        name: 'keen-eye',
        url: 'https://pokeapi.co/api/v2/ability/51/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'tangled-feet',
        url: 'https://pokeapi.co/api/v2/ability/77/',
      },
      is_hidden: false,
      slot: 2,
    },
  ],
  sprites: {
    other: {
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
      },
    },
  },
  stats: [
    {
      base_stat: 22,
      effort: 22,
      stat: {
        name: 'stat',
        url: 'url',
      },
    },
  ],
};
