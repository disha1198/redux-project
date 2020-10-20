import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../redux/root-reducer';

const middleWares = [logger];

// below is the function that gets root reducers and also the return value of applyMiddlewares and inside that we are gonna spread in middle ware with 3 dots. (what applyMiddleware(...middleWares) will do is, this will spread in all of the methods, and values from the middlewares array into this function called individual arguments. This way if we want to add more values to applymiddleware we can simply add to the middlewares array above)
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
