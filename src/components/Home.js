import React from 'react';
import Apple from '../images/apple.jpg';
import Pear from '../images/pear.jpg';
import Orange from '../images/orange.jpg';
import Banana from '../images/banana.jpg';
const Home = () => {
    return (
        <div className="container">
            <div className="image">
                <img src={Apple} alt="Apple"/>
                <h3>Apple</h3>
                <h3>3,00</h3>
                <a className="addToCart cart1" href="#">Add to cart</a>
            </div>
            <div className="image">
                <img src={Orange} alt="Orange" />
                <h3>Orange</h3>
                <h3>$8,00</h3>
                <a className="addToCart cart2" href="#">Add to cart</a>
            </div>
            <div className="image">
                <img src={Pear} alt="Pear" />
                <h3>Banana</h3>
                <h3>$6,00</h3>
                <a className="addToCart cart3" href="#">Add to cart</a>
            </div>
            <div className="image">
                <img src={Banana} alt="Banana" />
                <h3>Pear</h3>
                <h3>$7,00</h3>
                <a className="addToCart cart4" href="#">Add to cart</a>
            </div>
        </div>
    );
}

export default Home;