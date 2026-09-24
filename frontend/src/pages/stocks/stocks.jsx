import React from 'react'
import './stocks.css';
import Topnav from '../../components/topnav/topnav';
import Sidebar from '../../components/sidebar/sidebar';
import Stocklist from '../../components/stock-list/stockList';

const Stocks = () => {
  return (
    <main>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='topnav'>
            <Topnav></Topnav>
        </div>
        <div className='stocks'></div> 
        <div className='filter'></div>
        <div className='stock-list'>
          <Stocklist/>
        </div>
        <div className='stock-candle'></div>
        <div className='stock-nav'></div>
    </main>
  )
}

export default Stocks