import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Display_Categories from './Categories';
import filter from 'react'


//******* SCROLL ***********/
//tu sprawdza scrolla ciągle
let currentScrollPosition = 500 ;
window.addEventListener('scroll',function(){
  currentScrollPosition = window.pageYOffset;
})
//tu zapisuje scrolla przy kliknięciu
function Zapisuj_scroll(zapisany){
  console.log(zapisany);
  localStorage.setItem('myapp-current-top', zapisany);
}


const Wyswietl_Gry = ({gry: Wszystkie_Gry ,filterItems}) => {
  const [SearchTerm, setSearchTerm] = useState('')
  // tu orzy wyswietlaniu pobiera poprzedniego scrolla z local
  window.scrollTo(0, (localStorage.getItem('myapp-current-top')));
  return (
    <>
    
    <section className='Category'>
      <Display_Categories filterItems={filterItems} Zapisuj_scroll={Zapisuj_scroll}/> 
    </section>

    <section className='Filters1'>
    </section>

    <section className='Main' >
      <section className='All_Games'>
          <ul className='Ul_Games'>
            {Wszystkie_Gry.filter((pojedyncza_gra)=>{
              if (pojedyncza_gra.title.toLowerCase().includes(SearchTerm.toLowerCase())){
                const { id, title, img, price} = pojedyncza_gra;
                
                return (
                  <li  key={id}>
                  <Link to={`/${id}`}  onClick={() => Zapisuj_scroll(currentScrollPosition)}>
                    <div className='Game'>
                      <div className='div-zdj-przegladaj'>
                        <img src={img} className='zdj-przegladaj'></img>
                      </div>
                      <span className='title'>{title}</span>
                      <span className='price'>{price} zł</span>
                    </div> 
                    </Link>
                  </li>
              )
              }
            }).map((pojedyncza_gra)=>{
              const { id, title, img, price} = pojedyncza_gra;
              return (
                  <li  key={id}>
                  <Link to={`/${id}`}  onClick={() => Zapisuj_scroll(currentScrollPosition)}>
                    <div className='Game'>
                      <div className='div-zdj-przegladaj'>
                        <img src={img} className='zdj-przegladaj'></img>
                      </div>
                      <span className='title'>{title}</span>
                      <span className='price'>{price} zł</span>
                    </div> 
                    </Link>
                  </li>
              );
            })}
          </ul>
      </section>

      <section className='Filters'>
        <input type='text' placeholder='seach' onChange={event => {setSearchTerm(event.target.value)}}/>
        
      </section>

    </section>
  </>);
};

export default Wyswietl_Gry;

//zrobić aby zapisywac kategorie