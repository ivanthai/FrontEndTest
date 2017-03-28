/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { HomeComponent } from './Home';
import Main from './../../components/Main';

describe(`#File: ${__filename}`, () => {
  it('should exist', () => {
    expect(HomeComponent).to.be.ok;
  });
});

describe('Rendering home component', () => {
  const homeWrapper = shallow(<HomeComponent />);
  it('should render main component', () => {
    expect(homeWrapper.find(Main)).to.have.length(1);
  });
});
