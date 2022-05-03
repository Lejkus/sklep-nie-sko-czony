import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./data"
import './ProductDetail.css'
import { useState, useEffect } from 'react'; 
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    const [people,setPeople] = useState(productsData);
    const [index,setIndex] = useState(0);
    let lastIndex = 0;
    
    window.scrollTo(0, 0);


    useEffect(()=>{ 
        if(index < 0){
          setIndex(lastIndex)
        }
        if(index > lastIndex){
          setIndex(0)
        }
      },[index,people])
      
      
    return (
        <div className="calosc">
          <div className="tytuldiv">
             <h1 className="tytul_glowny">{thisProduct.title}</h1>
          </div>
          <div className="flex">
            <div className="section-center">
            {Object.keys(thisProduct.zdjecia).map(function(key, personIndex) {
                //console.log(thisProduct.zdjecia[key])
                lastIndex = personIndex  
                let position = 'nextSlide'
          
                if(personIndex === index){
                  position = 'activeSlide'
                }
      
                if(personIndex === index -1 || index === 0 && personIndex === people.length -1){
                  position = 'lastSlide'
                }


                return (
                    <article className={position} key={personIndex}>
                      <img src={thisProduct.zdjecia[key]} alt={personIndex}/>
                    </article>
                  );
            })}
                <div className="buttony">
                    <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                    </button>
                    <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                    </button>
                </div>
            </div>
          </div>
            <div className="sticky">
              <div className="Dane">
                  <a>{thisProduct.price}</a><div className="kreska"></div>
                  <a>{thisProduct.developer}</a><div className="kreska"></div>
                  <a>{thisProduct.Data_Wyd}</a><div className="kreska"></div>
                </div>
            </div>
                
            
            <section className="Opis_Glowny"><h2>{thisProduct.opis_glowny}</h2></section>
            <section className='Opis'>
            {Object.keys(thisProduct.opis).map(function(key, personIndex){
              if (personIndex % 2 === 0){
                return (
                  <>
                  <h1>{thisProduct.opis[key]}<br></br></h1>
                  </>
                );
              }
              if (personIndex % 2 === 1){
                return (
                  <>
                  <a>{thisProduct.opis[key]}<br></br></a>
                  </>
                );
              }
              
            })}
              
            </section>
        </div>
    )
}

export default ProductDetail
