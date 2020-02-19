import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';
import Cat from '../../cateyes.jpg';

it('renders without props', () => {
  const tree = renderer.create(<Image />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders with image', () => {
  const tree = renderer.create(<Image src={Cat}/>).toJSON();
  expect(tree).toMatchSnapshot();
})