import { render, screen } from '@testing-library/react';
import { cardData } from '@/__mocks__/mocks';
import { Description } from '@/components/ui';

describe('Description test', () => {
  test('should render Description with correct data', () => {
    render(
      <Description
        weight={cardData.weight}
        height={cardData.height}
        abilities={cardData.abilities}
      />
    );

    expect(screen.getByText(`Weight: ${cardData.weight}`)).toBeInTheDocument();
    expect(screen.getByText(`Height: ${cardData.height}`)).toBeInTheDocument();

    cardData.abilities.forEach((ability) => {
      expect(screen.getByText(ability)).toBeInTheDocument();
    });
  });
});
