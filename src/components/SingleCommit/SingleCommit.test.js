/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { SingleCommitComponent } from './SingleCommit';

const data = {
    commit: {
        sha: '123',
        author: {
            login: 'Jane Doe'
        },
        commit: {
            message: 'hello'
        }
    }
};


describe(`#File: ${__filename}`, () => {
    it('should exist', () => {
        expect(SingleCommitComponent).to.be.ok;
    });
});

describe('Rendering', () => {
    const wrapper = shallow(<SingleCommitComponent {...data} />);

    it('should render list element', () => {
        expect(wrapper.find('li')).to.have.length(1);
    });
});
