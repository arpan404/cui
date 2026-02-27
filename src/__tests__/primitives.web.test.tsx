import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ButtonBase, Div, P, Span } from '../primitives/index.web';

describe('web primitives', () => {
  it('renders Div as a div and forwards className', () => {
    render(<Div className='test-class' testID='div-el'>hello</Div>);
    const element = screen.getByTestId('div-el');

    expect(element.tagName).toBe('DIV');
    expect(element).toHaveClass('test-class');
  });

  it('renders Span and P with expected html tags', () => {
    render(
      <>
        <Span testID='span-el'>inline</Span>
        <P testID='p-el'>para</P>
      </>,
    );

    expect(screen.getByTestId('span-el').tagName).toBe('SPAN');
    expect(screen.getByTestId('p-el').tagName).toBe('P');
  });

  it('triggers onPress bridge in ButtonBase', () => {
    let count = 0;
    render(
      <ButtonBase testID='button' onPress={() => count++}>
        Click
      </ButtonBase>,
    );

    screen.getByTestId('button').click();
    expect(count).toBe(1);
  });
});
