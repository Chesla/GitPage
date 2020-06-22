import React from 'react';
import './App.css';
class HeaderList extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
    return (
      <div className={'mainContainer'}>
        <div className={'listItems'}>
            Overview
        </div>
        <div className={'activelistItems'}>
            Repositories
        </div>
        <div className={'listItems'}>
            Projects
        </div>
        <div className={'listItems'}>
            Star
        </div>
        <div className={'listItems'}>
            Follow
        </div>
        <div className={'listItems'}>
            Following
        </div>
      </div>
    )
  }
}


export default HeaderList;
