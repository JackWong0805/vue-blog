import * as tabTypes from '../types/tabTypes.js'
export default {
  [tabTypes.CHANGETABPAGE] (state, payload) {
    state.currentTabPage = payload.pageName
  }
}
