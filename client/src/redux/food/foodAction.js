import { domain } from '../../confg';
import * as actions from './actionType';
import axios from 'axios';



export const fitchFoodrequest = () => {
    return {
      type: actions.FETCH_FOOD_REQUEST
    } 
  }
  export const fitchFoodsuccess = (food) => {
    return {
      type: actions.FETCH_FOOD_SUCCESS,
      payload: food,
    } 
  }
  export const fitchFoodfailure= (error) => {
    return {
      type: actions.FETCH_FOOD_FAILURE,
      payload: error,
    }
  }
 
  export const  fetchFood = () => { 
    return (dispatch) => {
        dispatch(fitchFoodrequest())
        axios.get(`${domain}/api/foodDissh/randomItems`)
        .then((res) => {
          const food = res.data
          dispatch(fitchFoodsuccess(food))
        }).catch((error) =>{
            const eroorr = error.message
          dispatch(fitchFoodfailure(eroorr))

        })
    }
  }