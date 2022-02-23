import React from 'react';
import Section from '../Section.jsx';
import { render, screen } from '@testing-library/react';
import ImgUser from './files/users.png';
describe('Section component --> <Section />', () => {
  const title = 'Fake title';
  let component;

  describe('Render success', () => {
    beforeEach(() => {
      component = render(<Section imgSrc={ImgUser} title={title} />);
    });

    it('should render the title', () => {
      expect(component.container).toHaveTextContent(title);
    });

    it('should render the image', () => {
      const image = screen.getAllByAltText('imgSection');

      expect(image).toBeTruthy();
    });
  });
  describe('Fail render', () => {
    beforeEach(() => {
      component = render(<Section imgSrc={null} title={title} />);
    });

    it('should not render the image', () => {
      const { container } = component;
      const imgElement = container.querySelector('img[alt="imgSection"]');

      expect(imgElement).toBeNull();
    });
  });
});
