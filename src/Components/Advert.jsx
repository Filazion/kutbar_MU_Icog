import React, { Component } from 'react';
import AdvertImage from '../Assets/pizzabanner-copy.png';

class Advert extends Component{
    state = { }
    render(){
        return(
            // start advert 
            <div class="col-lg-2">
                <img src={AdvertImage} alt="Advert" class="w-100" />
            </div>
            // end of advert
        );
    }
}

export default Advert