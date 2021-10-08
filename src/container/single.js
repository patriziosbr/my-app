import React, { Component} from 'react';
import '../container/single.css';

class Single extends Component {

    render(){
        let miao = false;
        console.log(miao);
        const seriesObj = this.props.location.state.show;  //path to the specific series
        console.log(seriesObj);
        return(
  
            <div>
                <h1> {seriesObj.name} </h1>
                <p>{seriesObj.type}</p>
                {
                    seriesObj.image == null && <img className="cover" src='https://www.white.film/wp-content/uploads/woocommerce-placeholder.png' alt="miao" />
                }
                {
                    seriesObj.image && <img className="cover" src={ seriesObj.image.medium } alt={seriesObj.name}/>
                }
                
            </div>
 
        )
    }
}

export default Single;