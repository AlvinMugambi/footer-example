import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import PeopleView from './peopleView';
import Button from './button';

class Filter extends React.Component {

  state = {
    name: false,
    age: false
  }

  onChange = () => {
    const { name, age } = this.state
    if(name){
      console.log("filter>>>>");
      return <PeopleView />
    }
    console.log("filter>>>>");
    return <PeopleView/>
  }

  render () {
    return(
      <div>
        <Checkbox
          onChange={() =>{this.onChange(); this.setState({name: true})}}
          />
        <label>name</label>
        <Checkbox
          onChange={() => {this.onChange(); this.setState({age: true})}}
          />
        <label>Age</label>
      </div>
    )
  }
}

export default Filter;
