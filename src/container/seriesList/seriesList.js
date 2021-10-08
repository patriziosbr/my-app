// import React from 'react';
import './seriesList.css'
import {Link} from "react-router-dom";



const SeriesListItem = ({series})=> (
    <li> 
        <Link 
        to={{
            pathname: `serie/${series.show.id}`,
            state: series
        }}>
           {series.show.name}
        </Link>
    </li>
)

const SeriesList = (props) => {
    console.log(props.list);
    return(
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id}/>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;