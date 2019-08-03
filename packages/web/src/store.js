import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import { saga, sagaMiddleware } from './saga'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (initialState, options) => {
    return createStore(reducer, initialState, bindMiddleware([]));
}

function configureStore(preloadState) {
    const store = createStore(
        reducer,
        preloadState,
        bindMiddleware([sagaMiddleware])
    )

    store.sagaTask = sagaMiddleware.run(saga);

    return store;
}

export default configureStore;
