import './Products.css';
import React, { useState } from 'react';
import Wyswietl_Gry from './Products';
import baza_gier from './data';
import { Link, Route, Switch } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import Display_Categories from './Categories';



function App() {

  const [Wszystkie_Gry, setMenuItems] = useState(baza_gier);

  const filterItems = (wyslana_category) => {
    if(wyslana_category === 'all'){
      setMenuItems(baza_gier);
      return;
    }
    //filter działa tak ze zrwaca TYLKO te które spełniają jakiś warunek
    const newItems = baza_gier.filter((gra)=> gra.category === wyslana_category)
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <nav className='NavBar'>
        <Link to="/">Home</Link>
      </nav>


      <Switch>
        
        <Route exact path="/">
          <Wyswietl_Gry gry={Wszystkie_Gry} filterItems={filterItems}/> 
        </Route>
        <Route path="/:productId">
          <ProductDetail/>
        </Route>

      </Switch>
      
    </div>

  );
}

export default App;