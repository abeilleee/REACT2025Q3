import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { cardData } from '@/__mocks__/mocks';

describe('Card test', () => {
  test('should render Card with correct data', () => {
    render(<Card pokemon={cardData} />);

    expect(screen.getByText(cardData.name)).toBeInTheDocument();
    expect(screen.getByAltText(cardData.name)).toBeInTheDocument();

    const cardImg = screen.getByAltText('pidgeot');
    expect(cardImg).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png'
    );
  });
});
