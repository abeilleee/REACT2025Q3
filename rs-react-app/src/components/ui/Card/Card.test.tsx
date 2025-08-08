import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { cardData } from '@/__mocks__/mockData';
import { store } from '@/store';
import { Card } from './Card';

describe('Card test', () => {
  test('should render Card with correct data', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card pokemon={cardData} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(cardData.name)).toBeInTheDocument();
    expect(screen.getByAltText(cardData.name)).toBeInTheDocument();

    const cardImg = screen.getByAltText(cardData.name);
    expect(cardImg).toHaveAttribute('src', cardData.sprites);
  });

  test('should display placeholder if there is not a sprite', () => {
    const data = { ...cardData, sprites: '' };
    const src = '/src/assets/images/no-img.png';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card pokemon={data} />
        </MemoryRouter>
      </Provider>
    );

    const cardImg = screen.getByRole('img');

    expect(cardImg).toHaveAttribute('src', src);
  });
});
