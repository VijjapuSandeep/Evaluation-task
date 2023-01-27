import '../App.css';

const Data = ({ findList, searchText }) => {
    
    if (findList.length === 0) 

    return (
        <h3 style={{ color: 'red' }}>No Matching Record Found!</h3>
    );

    return (
        <div className='container'>
            <div className='spanElements'>
                <span>Search Results for : {searchText}</span>
                <span className="count">Count : {findList.length} </span>
            </div>
            {               
                findList.map((event) => {
                    return (
                        <div className="col-12" key={event.id}>
                            <div className="card">
                                <img className="card-img-top" src={event.image} alt="" />
                                <div className='card-body'>
                                    <div className='print-container'>
                                        <h4 className='card-title'>{event.label}</h4>
                                        <button type='submit' onClick={window.print}>Print</button>
                                    </div>
                                    <p className='card-para'>{event.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Data;