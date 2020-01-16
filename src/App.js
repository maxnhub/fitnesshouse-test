import React, {Component} from 'react'
import classes from './App.module.scss'
import Header from './components/Header/Header'
import Main from './containers/Main/Main'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import ServicePage from './components/ServicePage/ServicePage'



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
    let routes = (
      <Switch>
        <Route path="/main" component={Main}/>
        <Route path="/main/:id" component={ServicePage}/>
        <Route path="/" exact component={Main}/>
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div>
        <Header counter={this.state.counter}/>
        <main>
          <section className={classes.Main}>
          <button onClick={this.addCounter} className="counter__button">+</button>
            <div className={classes.container}>
              { routes }
            </div>
          </section>
  
        </main>
      </div>
    )
  }
}

export default withRouter(App);
