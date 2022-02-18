import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Product = (props) => {
    const location = useLocation();
    const product = location.state.product;
    const [image, setImage] = useState(product.primaryImage)

    console.log('image', image);
    console.log(product)
    
    return (
        <div>
            <div className="container mt-5 d-flex flex-wrap">
                <Link to="/products"><button className="btn btn-secondary mb-3">Back to Products</button></Link>
                <div className="row">
                    <div className="col-6">
                        <img style={{ width: "100%" }} src={image} alt={product.img} />
                        <div className="d-flex flex-row" key={product.id}> 
                            {product.secondaryImages.map((img, i) => {
                                return (
                                        <div className="mx-2 mt-2">
                                            <img style={{ width: "5rem" }} src={img} onClick={() => setImage(img)} />
                                        </div>               
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-6">
                        <h1>{product.title}</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unde maxime consectetur corrupti at quia. Recusandae illum quae eveniet, voluptates aperiam fugit commodi veniam beatae saepe quidem? Placeat, id similique!</p>
                        <hr></hr>
                        <h3><strong>{product.cost}</strong></h3>
                        <hr></hr>
                        <button className="btn btn-primary">Add to Cart</button>
                        <hr></hr>
                        <h6 className=" p-3 mb-2 bg-dark text-light">Specifications</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda suscipit perspiciatis et reprehenderit mollitia voluptate eius aspernatur, perferendis est sunt eos blanditiis error voluptatum labore modi! Delectus, iusto dolore!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;