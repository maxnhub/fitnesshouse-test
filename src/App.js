import React, {Component} from 'react'
import classes from './App.module.scss'
import Header from './components/Header/Header'
import Main from './containers/Main/Main'
import {Route, Switch, Redirect } from 'react-router-dom'
import ServicePage from './components/ServicePage/ServicePage'



class App extends Component {

  
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/service/:alias" component={ServicePage}/>
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div>
        <Header />
        <main>
          <section className={classes.Main}>
            <div className={classes.container}>
              { routes }
            </div>
          </section>
  
        </main>
      </div>
    )
  }
}

export default App;
