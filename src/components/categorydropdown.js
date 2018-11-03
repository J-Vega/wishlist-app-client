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
        return (
            <div className="category-dropdown-container">
                <ul>
                    <li>
                        Groceries
                    </li>
                    <li>
                        Presents
                    </li>
                    <li>
                        Other
                    </li>

                </ul>
            
            </div>
        );
    }
}