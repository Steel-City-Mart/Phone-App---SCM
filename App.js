import React , {useState} from 'react'
import {StyleSheet} from 'react-native'
import Navigator from './Navigation/Navigator'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {createStore , combineReducers, applyMiddleware} from 'redux'
import categoryReducer from './Store/reducer/categoryReducer'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  categories : categoryReducer
})

const store = createStore (rootReducer ,applyMiddleware(ReduxThunk));

const fetchFonts = ()=>{
  return Font.loadAsync(
    {
      'open-sans' : require('./Assets/Fonts/OpenSans-Regular.ttf'),
      'open-sans-bold':require('./Assets/Fonts/OpenSans-Bold.ttf')
    }
  )
}
export default function App() {

  const [dataLoaded , setDataLoaded] = useState(false);
  global.oCart =[];
  if (!dataLoaded){
    return <AppLoading startAsync = {fetchFonts} onFinish={()=>setDataLoaded(true)}></AppLoading>
  }
  return <Provider store = {store}><Navigator /></Provider>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
