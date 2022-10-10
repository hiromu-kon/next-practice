import { render } from '@testing-library/react';
import { Button } from '@/components/Button/Button';

test('label', () => {
  const label = 'label';
  const { getByText } = render(<Button label={label} />);
  expect(getByText(label)).toBeTruthy;
});
