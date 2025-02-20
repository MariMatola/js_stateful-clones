'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateList = [];
  let stateClone = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        stateClone = Object.assign(stateClone, action.extraData);
        break;
      case 'removeProperties':
        for (const key in stateClone) {
          if (action.keysToRemove.includes(key)) {
            delete stateClone[key];
          }
        }
        break;
      default:
        stateClone = {};
    }

    stateList.push(stateClone);
    stateClone = { ...stateClone };
  }

  return stateList;
}

module.exports = transformStateWithClones;
