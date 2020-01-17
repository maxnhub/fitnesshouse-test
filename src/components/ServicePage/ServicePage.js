import React, {Component} from 'react';
import '../../index.css';
import classes from './ServicePage.module.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import {setServices } from '../../store/actions/services';
import Counter from '../Counter/Counter'

class ServicePage extends Component {


    componentDidMount() {
        const { setServices } = this.props;

        axios.get('https://fitnesshouse-test.firebaseio.com/services.json')
        .then(response => {
            const services = response.data;
            
            setServices(services);
        });
    }

    render() {
        
        
        const { services, match } = this.props;
        const alias = match.params.alias; 

        const service = services.find((value) => value.alias === alias)
        
        return(

            <React.Fragment>
                {
                services.map((service, index) => {
                    if (service.alias === alias) {
                        return (
                            <div className={classes.ServicePage__item}>
                
                                <img className={classes.ServicePage__avatar} src={ service && service.image} alt={ service && service.alias} />
                                <div className={classes.ServicePage__desc}>
                                    <h3 className={classes.ServicePage__desc_title}> { service && service.title}  </h3>
                                    <p className={classes.ServicePage__desc_text}>{ service && service.description}</p>
                                    <ul className={classes.ServicePage__desc_tags}>
                                        <li className={classes.ServicePage__desc_tags_item}>{ service && service.properties[0].title} - <span>{ service && service.properties[0].value}</span></li>
                                        <li className={classes.ServicePage__desc_tags_item}>{ service && service.properties[1].title} - <span>{ service && service.properties[1].value}</span></li>
                                    </ul>
                                    <div className={classes.ServicePage__price}>
                                        <p className={classes.ServicePage__price_numbers}>{ service && service.price}<small>руб.</small></p>
                                        <Counter />
                                    </div>
                                </div>
                            </div>
                        )
                    }   
                })
            }
            
            
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setServices: (services) => dispatch(setServices(services))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);