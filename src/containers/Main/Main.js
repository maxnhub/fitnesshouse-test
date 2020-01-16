import React from 'react'
import '../../index.css'
import classes from './Main.module.scss'
import Filters from '../../components/Navigation/Filters/Filters'
import Services from '../../components/Services/Services'


const Main = () => {

    return(
      <React.Fragment>
          <Filters />
          <Services />
      </React.Fragment>
    )
}

export default Main;


              