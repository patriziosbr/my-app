import React from 'react';
import './seriesList.css'

const SeriesListItem = ({series})=> (
    <li > 
        {series.show.name}
    </li>
)

const SeriesList = (props) => {
    // console.log(props.list);
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