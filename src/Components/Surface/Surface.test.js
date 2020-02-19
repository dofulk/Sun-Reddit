import React from 'react';
import renderer from 'react-test-renderer';
import Surface from './Surface';
import Cat from '../../cateyes.jpg'

it('renders without props', () => {
  const tree = renderer.create(<Surface />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders with image', () => {
  const tree = renderer.create(<Surface title="Test" body={Cat} comments={[
    {
      key: 1,
      comment: 'hi'
    },
    {
      key: 2,
      comment: 'hello',
    },
    {
      key: 3,
      comment: 'how'
    }]}/>).toJSON();
  expect(tree).toMatchSnapshot();
})