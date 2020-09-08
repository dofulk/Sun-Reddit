import React from 'react';
import { Surface } from './Surface';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cat from '../../cateyes.jpg';
import { shallow } from 'enzyme';


const mockStore = configureStore();


describe('<Surface />', () => {

  it('renders without props', () => {
    const wrapper = shallow(<Surface />)
    expect(wrapper).toMatchSnapshot();


  });

  it('renders with image', () => {
    const wrapper = shallow(<Surface title="Test" body={Cat} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('renders with comments', () => {
    const wrapper = shallow(
    <Surface title="Test" comments={[
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
          }]} />
          );
    expect(wrapper).toMatchSnapshot();
  })

  it('should dispatch an action on button click', () => {
    const mockAddComment = jest.fn();
    const wrapper = shallow(
        <Surface addComment={mockAddComment} />
    )


    wrapper.find('WithStyles(ForwardRef(Button))').simulate('click');
    expect(wrapper.find('CommentList').length).toEqual(1);
  })

})