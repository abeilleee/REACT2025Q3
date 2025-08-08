import type { PokemonData } from '@/store/slices/api/types';

export const cardData: PokemonData = {
  name: 'pidgeot',
  height: 15,
  weight: 395,
  abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
  sprites:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
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
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
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
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
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
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png',
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
