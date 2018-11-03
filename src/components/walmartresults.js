import React from "react";
import { connect } from "react-redux";

import ProductListing from "./productlisting";

export class WalmartResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
          name: "Gift",
          price: "100"
      }]
    }
  }
  // renderProducts() {
  //   return this.state.products.map((product,index) => {
  //     console.log(product);
  //     return <Product name={product} />;
  //   });
  // }
  // render() {
  //   return (
  //     <div className='product-container'>
  //       {this.renderProducts()}
  //     </div>
  //   );
  // }

  render(){
    const product = this.state.products.map((productArray, index) =>
        <div key={index}>
          <ProductListing {...productArray} />
        </div>
    );
    return (
      <div>
        {product}
      </div>
    )
  }
}

const mapStateToProps = state => ({
   products: state.products,
  // loading: state.products.loading,
  // error: state.products.error
});


export default connect(mapStateToProps)(WalmartResults);