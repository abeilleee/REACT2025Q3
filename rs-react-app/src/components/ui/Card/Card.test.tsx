import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { cardData } from '@/__mocks__/mockData';
import { Card } from './Card';

describe('Card test', () => {
  test('should render Card with correct data', () => {
    render(
      <MemoryRouter>
        <Card pokemon={cardData} />
      </MemoryRouter>
    );

    expect(screen.getByText(cardData.name)).toBeInTheDocument();
    expect(screen.getByAltText(cardData.name)).toBeInTheDocument();

    const cardImg = screen.getByAltText(cardData.name);
    expect(cardImg).toHaveAttribute('src', cardData.sprites.homefrontDefault);
  });

  test('should display placeholder if there is not a sprite', () => {
    const data = { ...cardData, sprites: { homefrontDefault: undefined } };
    const src = '/src/assets/images/no-img.png';

    render(
      <MemoryRouter>
        <Card pokemon={data} />
      </MemoryRouter>
    );

    const cardImg = screen.getByRole('img');

    expect(cardImg).toHaveAttribute('src', src);
  });
});
