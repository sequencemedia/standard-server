import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga'

import reducers from '@sequencemedia/app/reducers'
import sagas from '@sequencemedia/app/sagas'

export const configureStore = (initialState) => {
  /*
   *  Create the Saga middleware
   */
  const sagaMiddleware = createSagaMiddleware()

  /*
   *  Mount the Store and the Saga middleware
   */
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  )

  /*
   *  Run the Sagas
   */
  sagaMiddleware.run(sagas)

  return store
}
