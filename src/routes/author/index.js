/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Author from './Author';
import Layout from '../../components/Layout';

export default {

  path: '/:author',

  async action(context, { author })
  {
    return {
      title: '',
      component: <Layout><Author author={author}/></Layout>,
      description: 'Some cool tool to see latest node commits',
    };
  },

};
