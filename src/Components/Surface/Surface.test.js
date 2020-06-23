import React from 'react';
import renderer from 'react-test-renderer';
import Surface from './Surface';
import Cat from '../../cateyes.jpg'
import { shallow } from 'enzyme';

describe('<Surface />', () => {
  it('renders without props', () => {
    const wrapper = shallow(<Surface />);
    expect(wrapper).toMatchSnapshot();
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
      }]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

})