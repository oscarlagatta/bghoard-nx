import { render } from '@testing-library/react';

import ReviewUtilsFormatters from './review-utils-formatters';

describe('ReviewUtilsFormatters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUtilsFormatters />);
    expect(baseElement).toBeTruthy();
  });
});
