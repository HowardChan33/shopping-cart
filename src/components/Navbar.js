import React from 'react';

function Home() {
    return (
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>Shop</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">
            <ion-icon name="basket-outline"></ion-icon>
             Cart<span>0</span></a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Home