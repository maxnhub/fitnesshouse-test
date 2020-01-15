import React from 'react'
import '../../../index.css'
import classes from './Filters.module.scss'

const Filters = () => {

    return(
        <ul className={classes.Main__filters}>
            <li className={classes.Main__filters_item}>
            <div className={classes.Main__filters_block}>
                <select className={classes.Main__filters_select}>
                    <option value="value1" selected className={classes.Main__filters_option}>Количество занятий</option> 
                    <option value="value2" className={classes.Main__filters_option}>100 занятий</option>
                    <option value="value3" className={classes.Main__filters_option}>36 занятий</option>
                    <option value="value4" className={classes.Main__filters_option}>18 занятий</option>
                    <option value="value5" className={classes.Main__filters_option}>Разовое посещение</option>
                </select>
            </div>
            </li>
            <li className={classes.Main__filters_item}>
            <div className={classes.Main__filters_block}>
                <select className={classes.Main__filters_select}>
                    <option value="value1" selected className={classes.Main__filters_option}>Срок действия</option> 
                    <option value="value2" className={classes.Main__filters_option}>1 год</option>
                    <option value="value3" className={classes.Main__filters_option}>6 месяцев</option>
                </select>
            </div>
            </li>
            <li className={classes.Main__filters_item}>
            <div className={classes.Main__filters_block}>
                <select className={classes.Main__filters_select}>
                    <option value="value1" selected className={classes.Main__filters_option}>Время посещения</option> 
                    <option value="value2" className={classes.Main__filters_option}>Утро</option>
                    <option value="value3" className={classes.Main__filters_option}>Вечер</option>
                </select>
            </div>
            </li>
            <li className={classes.Main__filters_item}>
            <div className={classes.Main__filters_block}>
                <select className={classes.Main__filters_select}>
                    <option value="value1" selected className={classes.Main__filters_option}>Тип секции</option> 
                    <option value="value2" className={classes.Main__filters_option}>Вода</option>
                    <option value="value3" className={classes.Main__filters_option}>Зал</option>
                </select>
            </div>
            </li>
            <li className={classes.Main__filters_item}>
            <div className={classes.Main__filters_block}>
                <select className={classes.Main__filters_select}>
                    <option value="value1" selected className={classes.Main__filters_option}>Категория тренера</option> 
                    <option value="value2" className={classes.Main__filters_option}>Профи</option>
                    <option value="value3" className={classes.Main__filters_option}>Мастер</option>
                </select>
            </div>
            </li>
        </ul>
    )
}

export default Filters;


