import * as types from '../constants/actionTypes.js';

export const clickBoxActionCreator = boxId => ({
  type: types.clickBox,
  payload: boxId
});