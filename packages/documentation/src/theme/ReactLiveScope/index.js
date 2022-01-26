/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Stories from '@react-instagram/stories';
import storyStyles from '@react-instagram/stories';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Stories,
  storyStyles,
};

export default ReactLiveScope;
