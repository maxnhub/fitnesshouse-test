import React, {Component} from 'react'
import '../../index.css'
import classes from './Counter.module.scss'
import {onAdd} from '../../store/actions/services'
import {connect} from 'react-redux'

class Counter extends Component  {

    render() {

        return(
            <button onClick={this.props.onAdd} className={classes.Counter}>Купить</button>
        )
    }
    
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (counter) => dispatch(onAdd(counter)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
