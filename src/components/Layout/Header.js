import React, {Fragment} from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Alba Meals</h1>
                <HeaderCardButton onClic={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="table food" />
            </div>
        </Fragment>
    );
}

export default Header;