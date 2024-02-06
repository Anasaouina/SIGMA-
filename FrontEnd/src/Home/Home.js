import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';
import Service from'./services/Service';
import Carousel from './Carousel/Carousel';
import Navs from './Navbar/Navs';
import Footer from './Footer/Footer';
function Home () {
    return(
     <Fragment >
        <Carousel />
        <Service />
        <Footer />
     </Fragment>
    );
}
export default Home;