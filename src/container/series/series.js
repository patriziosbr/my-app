import React, { Component} from 'react';
import SeriesList from '../../container/seriesList/seriesList.js';
import Loader from '../../components/loader/loader.js';
import Intro from '../../components/intro/index.js';



class Series extends Component {
    state = {
        series: [],
        seriesName: "",
        isFetching: false
    }
    // componentDidMount() {
    //     fetch('https://api.tvmaze.com/search/shows')
    //     .then(response =>  response.json())
    //     .then(json => this.setState({series:json})) //assegno a series la risposta dell'api
    // }
    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true});
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response =>  response.json())
        .then(json => this.setState({series:json, isFetching: false})) //assegno a series la risposta dell'api
    }
    render(){
        const {series, seriesName, isFetching} = this.state;
        return (
            <div>
                <Intro message="series list"/>
                <div>
                    <input 
                    value={seriesName} 
                    type="text"
                    onChange={this.onSeriesInputChange} />
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Search a serie</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>no series found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching &&  <SeriesList list={this.state.series} />
                }

               
            </div>
        )
    }
}
export default Series;

