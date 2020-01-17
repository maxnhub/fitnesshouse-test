import React, {Component} from 'react'
import '../../index.css'
import classes from './Services.module.scss'
import axios from 'axios'
import {setServices, setFilter} from '../../store/actions/services'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



class Services extends Component {

    onFilterChange = (e, title) => {
        e.preventDefault();
        const { setFilter } = this.props;
        const { value} = e.target;


        setFilter(title, value);
    }

    componentDidMount() {
        const { setServices } = this.props;

        axios.get('https://fitnesshouse-test.firebaseio.com/services.json')
        .then(response => {
            const services = response.data;
            
            setServices(services);
        });
    }

    render() {
        const { services, filters } = this.props;    
        
        return(
            <React.Fragment>
                <ul className={classes.Main__filters}>
                    <li className={classes.Main__filters_item}>
                        <div className={classes.Main__filters_block}>
                            <select onChange={(e) => this.onFilterChange(e, 'Количество занятий')} className={classes.Main__filters_select}>
                                <option value="Количество занятий" selected className={classes.Main__filters_option}>Количество занятий</option> 
                                <option value="100 занятий" className={classes.Main__filters_option}>100 занятий</option>
                                <option value="36 занятий" className={classes.Main__filters_option}>36 занятий</option>
                                <option value="18 занятий" className={classes.Main__filters_option}>18 занятий</option>
                                <option value="разовое посещение" className={classes.Main__filters_option}>разовое посещение</option>
                            </select>
                        </div>
                    </li>
                    <li className={classes.Main__filters_item}>
                        <div className={classes.Main__filters_block}>
                            <select onChange={(e) => this.onFilterChange(e, 'Срок действия')} className={classes.Main__filters_select}>
                                <option value="Срок действия" selected className={classes.Main__filters_option}>Срок действия</option> 
                                <option value="1 год" className={classes.Main__filters_option}>1 год</option>
                                <option value="6 месяцев" className={classes.Main__filters_option}>6 месяцев</option>
                            </select>
                        </div>
                    </li>
                    <li className={classes.Main__filters_item}>
                        <div className={classes.Main__filters_block}>
                            <select onChange={(e) => this.onFilterChange(e, 'Время посещения')} className={classes.Main__filters_select}>
                                <option value="Время посещения" selected className={classes.Main__filters_option}>Время посещения</option> 
                                <option value="вечер" className={classes.Main__filters_option}>вечер</option>
                                <option value="утро" className={classes.Main__filters_option}>утро</option>
                            </select>
                        </div>
                    </li>
                    <li className={classes.Main__filters_item}>
                        <div className={classes.Main__filters_block}>
                            <select onChange={(e) => this.onFilterChange(e, 'Тип секции')} className={classes.Main__filters_select}>
                                <option value="Тип секции" selected className={classes.Main__filters_option}>Тип секции</option> 
                                <option value="вода" className={classes.Main__filters_option}>вода</option>
                                <option value="зал" className={classes.Main__filters_option}>зал</option>
                            </select>
                        </div>
                    </li>
                    <li className={classes.Main__filters_item}>
                        <div className={classes.Main__filters_block}>
                            <select onChange={(e) => this.onFilterChange(e, 'Категория тренера')} className={classes.Main__filters_select}>
                                <option value="Категория тренера" selected className={classes.Main__filters_option}>Категория тренера</option> 
                                <option value="профи" className={classes.Main__filters_option}>профи</option>
                                <option value="мастер" className={classes.Main__filters_option}>мастер</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <ul className={classes.Services}>
                    {
                        services.map((service, index) => {
                            if (service.properties[0].value === filters['Количество занятий'] 
                            || service.properties[1].value === filters['Срок действия'] 
                            || service.properties[2].value === filters['Тип секции']
                            || service.properties[2].value === filters['Категория тренера']
                            || service.properties[2].value === filters['Время посещения']
                            ) {
                                return (
                                    
                                        <li key={index} className={classes.Services__item}>
                                            <Link to={`/service/${service.alias}`}>
                                                <img src={service.image} alt={service.alias} className={classes.Services__avatar}/>
                                            </Link>
                                            <div className={classes.Services__desc}>
                                                <h3 className={classes.Services__desc_title}>{ service.title }</h3>
                                                <p className={classes.Services__desc_text}>{ service.description }</p>
                                                <ul className={classes.Services__desc_tags}>
                                                    <li className={classes.Services__desc_tags_item}>#{ service.properties[0].value }</li>
                                                    <li className={classes.Services__desc_tags_item}>#{ service.properties[1].value }</li>
                                                    { service.properties[2]
                                                        ? <li className={classes.Services__desc_tags_item}>#{ service.properties[2].value }</li>
                                                        : null
                                                    }
                                                </ul>
                                            </div>
                                        </li> 
                                )
                            }   
                        })
                    }
                </ul>
            </React.Fragment>
            
        )
    } 
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setServices: (services) => dispatch(setServices(services)),
        setFilter: (title, value) => dispatch(setFilter(title, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);

