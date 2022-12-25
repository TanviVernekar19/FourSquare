import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserDetailsReducer from '../ReduxPersist/UserDetails';
import RatingSliceReducer from '../ReduxPersist/RatingSlice';




const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
  };


  const reducer = combineReducers({
    userDetails:UserDetailsReducer,
    ratingState:RatingSliceReducer
  });

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistRed,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});