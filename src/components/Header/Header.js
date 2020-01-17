import React, {Component} from 'react'
import '../../index.css'
import classes from './Header.module.scss'
import mySvg1 from '../../super1.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Header extends Component {


    render() {
        const {counter} = this.props;

        return(
            <div>
                <header className={classes.Header}>
                    <div className={classes.Header__container}>
                        <Link to="/"><h1 className={classes.Header__title}>Fitness House Market</h1></Link>
                        <button className={classes.Header__button}>
                            <div className={classes.Header__counter}>
                                { counter }
                            </div>
                            <img src={mySvg1} className={classes.Header__cart} alt="cart-logo" />
                            <span className={classes.Header__button_text}>Корзина</span>
                        </button>
                    </div>
                </header>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Header)