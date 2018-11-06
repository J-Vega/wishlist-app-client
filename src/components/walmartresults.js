import React from "react";
import { connect } from "react-redux";

import ProductListing from "./productlisting";
import CategoryDropdown from "./categorydropdown";
import "./walmartresults.css";
 
export class WalmartResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name:"Tent",
          price:"100",
          mediumImage:"https://dks.scene7.com/is/image/dkscdn/16FNSUFS7X6X463PRCAT_Orange"
        },

        {
          name:"Other Tent",
          price:"100",
          mediumImage:"https://target.scene7.com/is/image/Target/GUEST_8a5a3916-f05c-48ec-a348-1849e9a2980a?wid=488&hei=488&fmt=pjpeg"
        }
        
      ],
      loading: false,
      error: false
    }
  }

  // addProduct(name){
  //   this.setState({
  //     products: [...this.state.products,{name}]
  //   })
  // }

  render(){
    const products = this.state.items.map((productArray, index) =>
        <div key={index}>  
          <div className="name">{productArray.name}</div>
					<div className="price">$ {productArray.price}</div>
					<img className="image" src={productArray.mediumImage} alt={productArray.name}/>
          <CategoryDropdown/>
        </div>
    );
    return (
      <div className="product-results">
        <h3>Walmart Resultss</h3>

          {products}
          <div>
          
          </div>
      </div>
    )
  }
}

WalmartResults.defaultProps = {
  title: "Walmart Results"
};

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.loading,
  error: state.error
});


export default connect(mapStateToProps)(WalmartResults);

