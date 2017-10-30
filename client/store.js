import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import initialState from './intialState';
import reducer from './reducers/search';
import saga from './sagas/search';


const sagaMiddleware = createSagaMiddleware();
const makeStore = (initialStore = initialState) => {

  const store = createStore(
    reducer,
    initialStore,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(saga);
  return store;
}

export default makeStore;
