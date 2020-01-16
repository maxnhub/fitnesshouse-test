import React, {Component} from 'react'
import '../../index.css'
import classes from './ServicePage.module.scss'
import axios from 'axios'

class ServicePage extends Component {


    // componentDidMount() {

    //     axios.get('https://fitnesshouse-test.firebaseio.com/services.json').then(response => {

    // }

    render() {
        
        
        return(
            <div className={classes.ServicePage__item}>
                <img className={classes.ServicePage__avatar} src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" />
                <div className={classes.ServicePage__desc}>
                    <h3 className={classes.ServicePage__desc_title}>Мультикарта Fitness House</h3>
                    <p className={classes.ServicePage__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                    <ul className={classes.ServicePage__desc_tags}>
                        <li className={classes.ServicePage__desc_tags_item}>Количество занятий - <span>18 занятий</span></li>
                        <li className={classes.ServicePage__desc_tags_item}>Тип секции - <span>вода</span></li>
                    </ul>
                    <div className={classes.ServicePage__price}>
                        <p className={classes.ServicePage__price_numbers}>5 000<small>руб.</small></p>
                        <button onClick={this.addCounter} className={classes.ServicePage__price_button}>Купить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicePage