import {USER_DATA,REPO_LIST,FILTER_LIST} from './constants';
export  function getUserData(){
    return async dispatch => {
        const resp = await fetch(`https://api.github.com/users/supreetsingh247`).then(
            resp => resp.json()
        ).then(data =>{
           
            dispatch({
                type:USER_DATA,
                user_details:data
            })
        });
    }
}
export  function getRepoList(){
    return async dispatch => {
        const resp = await fetch(`https://api.github.com/users/supreetsingh247/repos`).then(
            resp => resp.json()
        ).then(data =>{
           
            dispatch({
                type:REPO_LIST,
                repo_lists:data,
            })
        });
    }
}

export  function filterRepos(data){
    console.log(data);
    return{
        type:FILTER_LIST,
        filter_repos:data
    }
}

