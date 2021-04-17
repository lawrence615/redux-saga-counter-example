import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Imports: Redux Root Reducer
import rootReducer from 'reducers'

// Imports: Redux Root Saga
import counterSaga from 'sagas/counterSaga'

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware()

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// Middleware: Redux Saga
sagaMiddleware.run(counterSaga)

// Exports
export default store

