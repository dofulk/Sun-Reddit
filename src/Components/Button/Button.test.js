import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';


describe('<Button />', () => {
  it('renders correctly with no props', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with all props', () => {
    const tree = renderer.create(<Button label="Press Me" handleClick={() => console.log('clicked')} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})