
import React, { useState } from 'react'
import DATA from './API.json'
import "./App.css";

const Search = () => {
  const [filter, setFilter] = useState('');
  const SearchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch = DATA.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  });
  const onClickHandler=()=>{
    window.alert('Print Successful');
  }
  return (
    <section className='py-4 container'>
      <h1 className="heading">React Sports Search</h1>
      <div className="searchitems">
        <input type="text" className='app__input' placeholder='Sports Name' value={filter} onChange={SearchText.bind(this)} />
        <input className="app__submit" type="submit" value="Search" />
      </div>
      <div className="spanElements">
        <div><span> Search results for -</span></div>
        <div><span>Count - </span></div>
      </div>
      
      <div className="col-md-14">
        <div className="row">
          {dataSearch.map((item, index) => {
            return (
              <>
                <div className="col-12" key={item.id}>
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="print-container">
                        <h4 className="card-title">{item.label}</h4>
                        <button type="submit" onClick={onClickHandler}>Print</button>
                      </div>
                      
                      <p className="card-para">{item.description}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Search;
