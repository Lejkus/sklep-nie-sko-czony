import React from "react"
import productsData from "./data"

function Display_Categories({filterItems , Zapisuj_scroll}){

    return(
        <>
        <div className='Kategorie4 active'>
        <div className='Kategoria' onClick={() => filterItems('all') || Zapisuj_scroll(0)}>Wszystkie</div>
        <div className='Kategoria' onClick={() => filterItems('akcja') || Zapisuj_scroll(0)}>akcji</div>
        <div className='Kategoria' onClick={() => filterItems('przygodowa') || Zapisuj_scroll(0)}>przygodowe</div>
        <div className='Kategoria' onClick={() => filterItems('rogue-lite') || Zapisuj_scroll(0)}>rogue-lite</div>
      </div>
      <div className='Kategorie4'>
        <div className='Kategoria' onClick={() => filterItems('all') || Zapisuj_scroll(0)}>Wszyfasdfasfdsfafasdstkie</div>
        <div className='Kategoria' onClick={() => filterItems('akcja') || Zapisuj_scroll(0)}>afdsfas</div>
        <div className='Kategoria' onClick={() => filterItems('przygodowa') || Zapisuj_scroll(0)}>przyfasdfasdfasfgodowe</div>
        <div className='Kategoria' onClick={() => filterItems('all') || Zapisuj_scroll(0)}>Wszysasdfasdddddddddddtkie</div>
      </div>  
        </>
    );
};

export default Display_Categories;