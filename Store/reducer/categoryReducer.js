import  Categories  from '../../Constants/Categories'
import  { TOGGLE_FAVOURITE } from '../actions/categoryAction'
let initialState = {
    categories : Categories,
    favCat : []
}

const categoryReducer = (state = initialState , action) =>{
 switch(action.type){
     case TOGGLE_FAVOURITE:
         const exsistingIndex = state.favCat.findIndex(cat => cat.id === action.id)
         if(exsistingIndex >=0 ){
             const updateFavCat = [...state.favCat];
             updateFavCat.splice(exsistingIndex,1)
             return {...state , favCat:updateFavCat}
         } else {
             return {...state , favCat:state.favCat.concat(state.categories.find ( cat => cat.id === action.id))}
         }
 }
 return state
}

export default categoryReducer