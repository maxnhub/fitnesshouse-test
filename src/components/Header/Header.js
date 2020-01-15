import React from 'react'
import '../../index.css'
import classes from './Header.module.scss'
import mySvg1 from '../../super1.png'


const Header = (props) => {


    const counter = props.counter

    return(
        <div>
            <header className={classes.Header}>
                <div className={classes.Header__container}>
                    <h1 className={classes.Header__title}>Fitness House Market</h1>
                    <button className={classes.Header__button}>
                        <div className={classes.Header__counter}>
                            { counter }
                        </div>
                        <img src={mySvg1} className={classes.Header__cart} />
                        <span className={classes.Header__button_text}>Корзина</span>
                    </button>
                </div>
            </header>
        </div>
    )
    
}

export default Header