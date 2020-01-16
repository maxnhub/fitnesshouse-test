import React, {Component} from 'react'
import '../../index.css'
import classes from './Services.module.scss'
import axios from 'axios'



class Services extends Component {

    state = {
        services: []
    }

    componentWillMount() {
               
    }

    componentDidMount() {
        const services = this.state.services

        axios.get('https://fitnesshouse-test.firebaseio.com/services.json').then(response => {
            console.log(response)
            const arr = response.data
            console.log(response.data[0].alias)
            console.log('arr', response)

            // services.push(service)

            this.setState({
                services: arr
            })

        })
    }

    render() {
        
        
        return(
            <ul className={classes.Services}>
                <li className={classes.Services__item}>
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" className={classes.Services__avatar}/>
                    <div className={classes.Services__desc}>
                        <h3 className={classes.Services__desc_title}>Мультикарта Fitness House</h3>
                        <p className={classes.Services__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                        <ul className={classes.Services__desc_tags}>
                            <li className={classes.Services__desc_tags_item}>#18 занятий</li>
                            <li className={classes.Services__desc_tags_item}>#вода</li>
                        </ul>
                    </div>
                </li>
                <li className={classes.Services__item}>
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" className={classes.Services__avatar}/>
                    <div className={classes.Services__desc}>
                        <h3 className={classes.Services__desc_title}>Мультикарта Fitness House</h3>
                        <p className={classes.Services__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                        <ul className={classes.Services__desc_tags}>
                            <li className={classes.Services__desc_tags_item}>#18 занятий</li>
                            <li className={classes.Services__desc_tags_item}>#вода</li>
                        </ul>
                    </div>
                </li>
                <li className={classes.Services__item}>
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" className={classes.Services__avatar}/>
                    <div className={classes.Services__desc}>
                        <h3 className={classes.Services__desc_title}>Мультикарта Fitness House</h3>
                        <p className={classes.Services__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                        <ul className={classes.Services__desc_tags}>
                            <li className={classes.Services__desc_tags_item}>#18 занятий</li>
                            <li className={classes.Services__desc_tags_item}>#вода</li>
                        </ul>
                    </div>
                </li>
                <li className={classes.Services__item}>
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" className={classes.Services__avatar}/>
                    <div className={classes.Services__desc}>
                        <h3 className={classes.Services__desc_title}>Мультикарта Fitness House</h3>
                        <p className={classes.Services__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                        <ul className={classes.Services__desc_tags}>
                            <li className={classes.Services__desc_tags_item}>#18 занятий</li>
                            <li className={classes.Services__desc_tags_item}>#вода</li>
                        </ul>
                    </div>
                </li>
                <li className={classes.Services__item}>
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" className={classes.Services__avatar}/>
                    <div className={classes.Services__desc}>
                        <h3 className={classes.Services__desc_title}>Мультикарта Fitness House</h3>
                        <p className={classes.Services__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                        <ul className={classes.Services__desc_tags}>
                            <li className={classes.Services__desc_tags_item}>#18 занятий</li>
                            <li className={classes.Services__desc_tags_item}>#вода</li>
                        </ul>
                    </div>
                </li>
                <li className={classes.Services__item}>
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg" alt="Мультикарта Fitness House" className={classes.Services__avatar}/>
                    <div className={classes.Services__desc}>
                        <h3 className={classes.Services__desc_title}>Мультикарта Fitness House</h3>
                        <p className={classes.Services__desc_text}>Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.</p>
                        <ul className={classes.Services__desc_tags}>
                            <li className={classes.Services__desc_tags_item}>#18 занятий</li>
                            <li className={classes.Services__desc_tags_item}>#вода</li>
                        </ul>
                    </div>
                </li>
            </ul>
            
        )
    }

    
}

export default Services;

