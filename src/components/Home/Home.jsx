import React, { useState, useEffect } from 'react'
import img1 from '../../assets/images/preston.profile2.jpeg';
import img2 from '../../assets/images/sketchbag.jpeg';
import img3 from '../../assets/images/MindsetBlueprintLogo.png';

const Home = () => {

    const images = [img1, img2, img3, img1, img2, img3]

    const [count, setCount] = useState(0);
    const mousedOver = true;

    useEffect(() => {
        // set an interval timer if we are currently moused over
        if (mousedOver && count >= 0) {
            const timer = setInterval(() => {
                // cycle prevCount using mod instead of checking for hard-coded length
                setCount((prevCount) => (prevCount + 1) % images.length);
            }, 5000);
            // automatically clear timer the next time this effect is fired or
            // the component is unmounted
            return () => clearInterval(timer);
        } else {
            // otherwise (not moused over), reset the counter
            setCount(0);
        }
        // the dependency on mousedOver means that this effect is fired
        // every time mousedOver changes
    }, [count]);
    // console.log(count)

    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ height: "500px" }}>
                    <div className="carousel-item active">
                        <img className="img-fluid" alt='' src={images[count]} style={{ width: "100%", height: "500px" }}></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" onClick={() => {
                    if (count > 0) {
                        setCount((prevCount) => (prevCount - 1) % images.length)
                    } else {
                        setCount(5)
                    }
                }
                }>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={() => setCount((nextCount) => (nextCount + 1) % images.length)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr className="featurette-divider" />

            <div className="container marketing">

                <div className="row">
                    <div className="col-lg-4 text-center">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et deleniti quibusdam quas at dolores, nemo, expedita aut alias placeat recusandae cumque assumenda, cupiditate deserunt rem. Placeat vel iusto accusamus!</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tenetur culpa expedita alias recusandae! Beatae in laborum vitae, nesciunt magnam molestias, vel facilis necessitatibus consequuntur assumenda similique, accusamus nisi laboriosam.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus rerum cumque adipisci corporis, fuga reprehenderit esse fugiat rem doloremque deleniti commodi qui distinctio natus. Rerum eius deleniti architecto saepe.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                </div>
            </div>



            
        </div>
    )
}

export default Home;





