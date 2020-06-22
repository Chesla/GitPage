import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getUserData,getRepoList,filterRepos} from './actions';
import ProfileData from './ProfileData';
import RepoList from './RepoList';
import HeaderList from './HeaderList';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchEle:''
    }
  }
  
  componentDidMount(){
    this.props.getUserData();
    this.props.getRepoList();
  }
  renderRepoList(){
    const {filter_repos} = this.props;
    return filter_repos.map((rl)=>{
      return(
        <RepoList
          repo={rl}
        />
      )
    })
  }
  searchRepos(value){
    const {repo_lists} = this.props;
    if(value){
      let repos = repo_lists.filter((r)=>{
        return r.name.toLowerCase().includes(value.toLowerCase());
      })
      this.props.filterRepos(repos);
    }else{
      this.props.filterRepos(repo_lists);
    }
    this.setState({searchEle:value});
  }
  render(){
    const {user_details} = this.props;
    const {searchEle} = this.state;
    if(Object.keys(user_details).length==0){
      return null;
    }
    return (
      <div className={'mainContainer'}>
        <div>
          <ProfileData user_details={user_details}/>
        </div>
        
        <div className={'marginLeft20'}>
          
          <HeaderList/>
          <div>
            <input type="text" 
                onChange={(e)=>{
                  this.searchRepos(e.target.value);
                }}
                value={searchEle}
            />
          </div>
          {this.renderRepoList()}
        </div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user_details:state.user_details||{},
    repo_lists:state.repo_lists||[],
    filter_repos:state.filter_repos||[],
  }
  
}


const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserData()),
  getRepoList:()=>dispatch(getRepoList()),
  filterRepos:(repos)=>dispatch(filterRepos(repos)),
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
