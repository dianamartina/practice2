import React from 'react';
import UserItem from './components/UserItem';
import AddUserForm from './components/AddUsersForm';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state= {
      backgroundColor: '#ecf5f4',
      color: '#143a37'      
    }
  }

  handleBackgroundOnChange(ev) {
    // console.log(ev);// imi da toate obiectele
    // console.log(ev.target.value);//avem codul de culoare selectat
    const backgroundColorFromUser = ev.target.value;
    this.setState({
      backgroundColor : backgroundColorFromUser      
    }
      );
  }
  handleColorOnChange(ev) {
    // console.log(ev);// imi da toate obiectele
    // console.log(ev.target.value);//avem codul de culoare selectat
    const colorUser = ev.target.value;
    this.setState({      
      color: colorUser
    }
      );
  }
   render() {
    return (
      <div className="app" style={{backgroundColor:  this.state.backgroundColor, color: this.state.color}} >
        <h1>Practice 2 </h1>
        <h2>User Item </h2>
        <UserItem name="Ionescu Mihai" email="ionescu.mihai@yahoo.com" salary="1000euro" img="https://images.unsplash.com/photo-1603900732827-2c5fd3f4ff4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="bird"/>
        <UserItem name="Popescu Maria" email="popescu.maria@yahoo.com" salary="1500euro" img="https://images.unsplash.com/photo-1603912492856-f44bd5065774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="sky"/>
        <UserItem name="Gheorghe Ioan" email="gheorghe.ioan@gmail.com" salary="900euro" img="https://images.unsplash.com/photo-1603220485746-4395270d2aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="tree"/>
        <div className="input_App">
          <div className="inline_input">
            <p> Change background:</p>
            <input type="color" onChange={(ev)=> this.handleBackgroundOnChange(ev)}/> 
          </div>
          <div className="inline_input">
            <p> Change text color:</p>
            <input type="color" onChange={(ev)=> this.handleColorOnChange(ev)}/> 
          </div>          
        </div>
        <AddUserForm/>
         
      </div>
    );
   }
}

export default App;
