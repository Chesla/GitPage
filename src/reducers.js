import {USER_DATA,REPO_LIST,FILTER_LIST} from './constants';
export default function users(state={},actions){

    switch(actions.type){
        case USER_DATA:{
            console.log(actions);
            return{
                ...state,
                user_details:actions.user_details
            }
        }
        case REPO_LIST:{
            return{
                ...state,
                repo_lists:actions.repo_lists,
                filter_repos:actions.repo_lists
            }
        }
        case FILTER_LIST:{
            return{
                ...state,
                filter_repos:actions.filter_repos
            }
        }
        default :return state;
    }
    
}