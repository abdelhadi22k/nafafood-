import * as actions from './actionType';

const inshealstat ={
    loading: false,
    food: [],
    error:''
} 


const reduserFood = (state = inshealstat, action ) => {
    switch(action.type){
     case   actions.FETCH_FOOD_REQUEST :
        return{
            ...state,
            loading: true,
        }
     case    actions.FETCH_FOOD_SUCCESS:
        return{
            loading: false,
            food: action.payload,
            error: ''
        }
     case    actions.FETCH_FOOD_FAILURE:
        return{
            loading: false,
            food:[],
            error:  action.payload,
        }
        default:
            return state;
    }
}
export default reduserFood;