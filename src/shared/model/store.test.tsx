import { mockFormData } from '@/app/tests/mock';
import { useFormStore } from './store';

describe('Store tests', () => {
  const initialState = {
    controlledData: [],
    unControlledData: [],
    countries: ['USA', 'Canada', 'UK'],
  };

  beforeEach(() => {
    useFormStore.setState(initialState);
  });

  test('should add data to controlledData', () => {
    const { setControlledData } = useFormStore.getState();
    setControlledData(mockFormData);

    const state = useFormStore.getState();
    expect(state.controlledData).toHaveLength(1);
    expect(state.controlledData[0]).toEqual(mockFormData);
  });

  test('should add data to uncontrolledData', () => {
    const { setUncontrolledData } = useFormStore.getState();
    setUncontrolledData(mockFormData);

    const state = useFormStore.getState();
    expect(state.unControlledData).toHaveLength(1);
    expect(state.unControlledData[0]).toEqual(mockFormData);
  });

  test('should have countries array', () => {
    const state = useFormStore.getState();
    expect(state.countries).toEqual(initialState.countries);
    expect(state.countries).toHaveLength(initialState.countries.length);
  });
});
