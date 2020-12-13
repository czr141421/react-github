import { GET_SEAR_INFO,GET_USER,GET_USER_REPOS,CLEAR_SEARCH,SET_LOADING,SEARCH_USERS } from "../types"

export default (state,action) => {
    switch (action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                users:[],
                loading:false
            }
        case GET_USER:
            return{
                ...state,
                user:action.payload,
                loading:false
            }  
        case GET_USER_REPOS:
            return{
                ...state,
                repos:action.payload,
                loading:false
            }
        default:
            return state
    }
}
