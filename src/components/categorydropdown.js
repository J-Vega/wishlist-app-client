import React from 'react'

import "./categorydropdown.css";

export default class CategoryDropdown extends React.Component{
    
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  handleClick(category){
    console.log("Adding item to category: " + category);
    // fetch('/Wishlist', {
    //   method: 'put',
    //   body: JSON.stringify(item)
    // })
    // .then(function(response) {
    //   console.log(response);
    //   return response.json();
    // })
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
              <ul>
                <li>
                  <button className="category-button" ref={(element) => {this.handleClick("Gifts")}}>
                    Gifts 
                  </button>
                </li>
                <li><button className="category-button"> Essentials </button></li>
                <li><button className="category-button"> Other </button></li>
                </ul>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}