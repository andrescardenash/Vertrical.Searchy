import React from 'react';
import Card from '../Card.jsx';
import { render } from '@testing-library/react';

describe('Card component --> <Card />', () => {
  const textValue = 'This is a render text';
  let component;

  beforeEach(() => {
    component = render(
      <Card>
        <label>{textValue}</label>
      </Card>
    );
  });

  it('should render its children', () => {
    expect(component.container).toHaveTextContent(textValue);
  });
});
