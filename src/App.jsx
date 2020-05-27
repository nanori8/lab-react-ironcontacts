import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


const ContactsInfo = (props) => {
  return (
    <tr>
      <th><img className="contact-img" src={props.picture} alt={props.picture}/></th>
      <th>{props.name}</th>
      <th>{props.popularity.toFixed(2)}</th>
    </tr>
  );
};

class App extends Component {
  constructor () {
    super();
    this.state = {
      fullContacts: contacts,
      contacts: [...contacts].slice(0,5) 
    }
  }

  getRandomPic = () => {
    const randomNumber = Math.floor(Math.random() * this.state.fullContacts.length);
    const randomCelebrity=this.state.fullContacts[randomNumber];
    
    console.log('length',this.state.fullContacts.length )
    console.log('randomNumber', randomNumber)
    this.state.contacts.concat(randomCelebrity);
    
    console.log('randomCelebrity', randomCelebrity)

    this.setState({
      contacts: [...this.state.contacts, randomCelebrity]

    })
  }  

  render() {
    return(
      <div className="app">
        <h1>IronContacts</h1>
        <button onClick={this.getRandomPic}> Add Random Contact</button> 
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((celebrity) =>{
              return <ContactsInfo key={celebrity.name}
              picture={celebrity.pictureUrl} name={celebrity.name} popularity={celebrity.popularity}
              />
                })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
