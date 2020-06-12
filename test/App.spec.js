import React from 'react';
import Enzyme, { shallow } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/component/App.jsx';

// enzyme configuration
Enzyme.configure({ adapter: new Adapter() });



//test

describe('App', () => {
  it('should show text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div');
    expect(text.text()).toBe('Creation Station');
  })
})

// it('should handle the click event', () => {
//   window.alert = jest.fn();
//   const output = shallow(
//     <Link title="mockTitle" url="mockUrl" />
//   );
//   output.simulate('click');
//   expect(window.alert).toHaveBeenCalledWith('clicked');
// });