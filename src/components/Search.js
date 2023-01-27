
import '../App.css';
import React, { useState } from 'react';
import Data from './Data';
import axios from "axios";

const Search = () => {
    const [search, setSearch] = useState("");
    const [Text, setText] = useState("");
    const [data, setData] = useState(null);
    let findList = null;

    const callBack = () => {
        if (data !== null) {
            findList = data.filter((event) => {
                return event.label === Text
            });

            return (
                <Data findList={findList} searchText={Text}></Data>
            )
        }
    }

    const onClickHandler = event => {
        setSearch(event.target.value);
    };

    const onClickHandler1 = () => {
        setText(search);
        axios.get('https://run.mocky.io/v3/4b705c6d-e874-4cb5-8214-262416a7118f').then((s) => {
            setData(s.data);
        });
    };

    return (
        <div className='container'>
            <h1 className='heading'>React Sports Search</h1>
            <div className='searchitems'>
                <input type="search" className="input" placeholder="Search here" onChange={onClickHandler} />
                <button className="submit" onClick={onClickHandler1}>Search</button>
            </div>
            <div className='heading'>
                {
                    Text === "" ? 
                        <p>Please enter keyword in search area to get output</p>
                     : callBack()
                }
            </div>    
        </div>    
    );
}

export default Search;