import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';
import Grid from './Grid';

const setup = propOverrides => {
  const props = Object.assign({
    bikes: List(),
  }, propOverrides);

  return shallow(<Grid {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render grid', () => {
    const wrapper = setup({
      bikes: List([
        Map({
          _id: 'yolo',
          title: 'dolan',
        })
      ])
    });

    expect(wrapper).toMatchSnapshot();
  });
});
