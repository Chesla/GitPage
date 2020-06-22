import React from 'react';
import './App.css';
class RepoList extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
      const {repo} = this.props;
    return (
      <div className={'repoContainer'}>
        <div className={'repoName'}>{repo.name}</div>
        <div className={'repoDesc'}>{repo.description}</div>
        <div className={'repoLanguage'}>{repo.language}</div>
      </div>
    )
  }
}


export default RepoList;
