import React from 'react'

import "./categorydropdown.css";

export default class CategoryDropdown extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        categories: []
      }
      
     
    }

    render(){
        return true;
        // return (
        //     <div className="category-dropdown-container">
        //         <button>Add to wishlist</button> 
        //             {/* //Drop down of caegories */}

            
        //     </div>
        //     <button>Presents</button> 
        //     <button>Groceries</button> 
        //     <button>Events</button> 
        //     <button>Other</button> 
        // );
    }
}