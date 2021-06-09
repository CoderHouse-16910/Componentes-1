import React, { Component } from 'react';
import './App.css';

//Componentes
import Header from './Components/Header/Header';
import UserCard from './Components/UserCard/UserCard';
import Footer from './Components/Footer/Footer';
// Semantic UI
import { Button } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    //this.handleCounterUp = this.handleCounterUp.bind(this);
  }
  // handleCounterUp() {
  //  console.log('Hiciste Click!');
  // }

  handleCounterUp = () => {
    // console.log('Hiciste Click!');
    this.setState({ counter: this.state.counter + 1 });
  };

  handleCounterDown = () => {
    // console.log('Hiciste Click!');
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className='App'>
        <Header
          title={'Developer Team IT'}
          color={'yellow'}
          subtitle={'Welcome to our site!'}
        />
        <div className='UserSection'>
          <UserCard
            name={'Daniel Di Salvo'}
            date={'Se unió en Enero 2020'}
            description={
              'Front-end Developer y profesor del curso de React.js en CoderHouse'
            }
            img={
              'https://react.semantic-ui.com/images/avatar/large/matthew.png'
            }
          />
          <UserCard
            name={'Raul Gutierrez'}
            date={'Se unió en Abril 2021'}
            description={'Scrum Master y UX Designer en Mercado Libre'}
            img={'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'}
          />
          <UserCard
            name={'Federico Spinelli'}
            date={'Se unió en Octubre 2020'}
            description={
              'Back-End Developer y profesor del curso de Back-end en Coder House'
            }
            img={'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'}
          />
        </div>
        <div className='CounterSection'>
          <h3>Contador:</h3>
          <span className='span-counter'>{this.state.counter}</span>
          <div className='btn-section'>
            <Button primary onClick={this.handleCounterUp}>
              +
            </Button>
            <Button secondary onClick={this.handleCounterDown}>
              -
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
