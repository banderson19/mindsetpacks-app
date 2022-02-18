import React from 'react'
import { Link } from 'react-router-dom';

import bag1 from '../../assets/images/bag1.jpeg';
import bag1_1 from '../../assets/images/bag1-1.jpeg';
import bag1_2 from '../../assets/images/bag1-2.jpeg';
import bag1_3 from '../../assets/images/bag1-3.jpeg';
import bag1_4 from '../../assets/images/bag1-4.jpeg';
import bag1_5 from '../../assets/images/bag1-5.jpeg';

import bag2 from '../../assets/images/bag2.jpeg';
import bag2_1 from '../../assets/images/bag2-1.jpeg';
import bag2_2 from '../../assets/images/bag2-2.jpeg';
import bag2_3 from '../../assets/images/bag2-3.jpeg';
import bag2_4 from '../../assets/images/bag2-4.jpeg';

import bag3 from '../../assets/images/bag3.jpeg';
import bag3_1 from '../../assets/images/bag3-1.jpeg';
import bag3_2 from '../../assets/images/bag3-2.jpeg';

import bag4 from '../../assets/images/bag4.jpeg';
import bag4_1 from '../../assets/images/bag4-1.jpeg';

import bag5 from '../../assets/images/bag5.jpeg';
import bag5_1 from '../../assets/images/bag5-1.jpeg';
import bag5_2 from '../../assets/images/bag5-2.jpeg';
import bag5_3 from '../../assets/images/bag5-3.jpeg';
import bag5_4 from '../../assets/images/bag5-4.jpeg';

import bag6 from '../../assets/images/bag6.jpeg';
import bag6_1 from '../../assets/images/bag6-1.jpeg';

import leatherpatch1 from '../../assets/images/leatherpatch1.jpeg';
import leatherpatch2 from '../../assets/images/leatherpatch2.jpeg';
import leatherpatch3 from '../../assets/images/leatherpatch3.jpeg';


const Products = () => {

  const products = [
    {
      id: 1,
      title: 'bag 1',
      primaryImage: bag1,
      secondaryImages: [bag1, bag1_1, bag1_2, bag1_3, bag1_4, bag1_5],
      cost: "$100.00"
    },
    {
      id: 2,
      title: 'bag 2',
      primaryImage: bag2,
      secondaryImages: [bag2, bag2_1, bag2_2, bag1_3, bag2_4],
      cost: "$150.00"
    },
    {
      id: 3,
      title: 'bag 3',
      primaryImage: bag3,
      secondaryImages: [bag3, bag3_1, bag3_2],
      cost: "$200.00"
    },
    {
      id: 4,
      title: 'bag 4',
      primaryImage: bag4,
      secondaryImages: [bag4, bag4_1],
      cost: "$200.00"
    },
    {
      id: 5,
      title: 'bag 5',
      primaryImage: bag5,
      secondaryImages: [bag5, bag5_1, bag5_2, bag5_3, bag5_4],
      cost: "$200.00"
    },
    {
      id: 6,
      title: 'bag 6',
      primaryImage: bag6,
      secondaryImages: [bag6, bag6_1],
      cost: "$200.00"
    },
    {
      id: 7,
      title: 'leather patch 1',
      primaryImage: leatherpatch1,
      secondaryImages: [null],
      cost: "$10.00"
    },
    {
      id: 8,
      title: 'leather patch 2',
      primaryImage: leatherpatch2,
      secondaryImages: [null],
      cost: "$10.00"
    },
    {
      id: 9,
      title: 'leather patch 3',
      primaryImage: leatherpatch3,
      secondaryImages: [null],
      cost: "$10.00"
    }

  ]
  console.log(products)
  return (
    <div>
      <h1 className="text-center">ProductPage</h1>
      <div className="container">
        <div className="row justify-content-center">
          {products.map((product, i) => {
            return (
              <div className="col-3 mb-5 mx-5 py-2 border border-dark" key={product.id} >
                <div className="text-center">
                  <img className="card-img-top" style={{ width: "15.625rem" }} src={product.primaryImage} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">cost: {product.cost}</p>
                  </div>
                  <Link to={`/products/${product.id}`} state={{ product: product }}><button className="btn btn-primary">View Details</button></Link>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Products;