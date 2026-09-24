import React from 'react';
import './stockList.css'; 
import { Link } from 'react-router-dom'

const Stocklist = () => { 
    const stocks = [
        {name : 'AXA', price : 3.215, pchange : 0.63},
        {name : 'VRD', price : 15.843, pchange : 3.87},
        {name : 'PQQ', price : 1.990, pchange : 1.12},
    ]
  return (
    <>
        {
            stocks.map((stock,index)=>(
                <Link className='link' >
                    <div key={index} className='stock-container'>
                        <p>{stock.name}</p>
                        <p>{stock.price}</p>
                        <p>{stock.pchange}</p>
                    </div>
                </Link>
            ))
        }
    </>
  )
}

export default Stocklist