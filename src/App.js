import React, {Component} from 'react'
import classes from './App.module.scss'
import Header from './components/Header/Header'
import Main from './containers/Main/Main'



class App extends Component {

  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState((prevState) => {
        return {
            counter: prevState.counter + 1
        }
    })
  }

  render() {
    return (
      <div>
        <Header counter={this.state.counter}/>
        <main>
          <section className={classes.Main}>
          <button onClick={this.addCounter} className="counter__button">+</button>
            <div className={classes.container}>
              <Main />
            </div>
          </section>
  
        </main>
      </div>
    )
  }
}

export default App;
