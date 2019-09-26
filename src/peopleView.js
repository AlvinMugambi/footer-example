import React from 'react'

class PeopleView extends React.Component {

  constructor (props) {
    super(props);
    this.people = [
      {
        name: 'Alexandar aiko',
        dob: '01-11-2019'
      },
      {
        name: 'Charles',
        dob: '10-15-2013'
      },
      {
        name: 'Xavior',
        dob: '09-10-1998'
      },
      {
        name: 'Hjaena aiko',
        dob: '10-19-2001'
      },
      {
        name: 'Brathe man',
        dob: '04-01-2000'
      },
    ]

    this.state = {
      people: []
    }
  };

  componentDidUpdate(prevProps, nextProps){
    console.log(">>>>>>lee", nextProps);
  }

  componentDidMount(){
    console.log("called")
    const { sortByAge, sortByName } = this.props
    console.log(">>>>>>",this.props);
    if(sortByName){
      this.people.sort(function(a, b) {
        return this.compareName(a.name, b.name);
      })

      this.setState({
        people: this.people
      })
    }
    this.setState({
      people: this.people
    })
  }

compareName(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

  render () {

    const { people } = this.state
    return(
      <div >
        {people.map(person => (
          <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row'
            }}>
          <div>
            <p>{person.name}</p>
          </div>
          <div>
            <p>{person.dob}</p>
          </div>
          </div>
        ))}

      </div>
    )
  }
}

export default PeopleView;
