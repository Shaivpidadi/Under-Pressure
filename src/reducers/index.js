/*-------------------------------------------------------------------------------
       This is the root reducer where all reducer combine in single reducer
------------------------------------------------------------------------------------ */

import { combineReducers } from 'redux'
import Auth from './auth.js'
import Product from './products.js'

const appReducer = combineReducers({
  Auth,
  Product
})

export default appReducer
