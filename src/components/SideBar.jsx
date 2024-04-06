import React from 'react';
import image from '../assets/images/Logo-soundBox.svg';
import imageHover from '../assets/images/Logo-soundBox-hover.svg';
import foto from '../assets/images/simbolequalizer_white.svg';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastMovieInDb from './LastMovieInDb';
import LastMovieDetail from './LastMovieDetail';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    {/* CONTENIDO DE LA BARRA LATERAL CON TODOS LOS LINKS */}
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="SOUNDBOX"/>
                        <img className="w-100-hover" src={imageHover} alt="SOUNDBOX"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <img className="equalizer" src={foto}></img>
                        <span>Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-headphones"></i>
                        <span>Categories</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieDetail">
                        <i className="fas fa-guitar"></i>
                        <span>Products</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-user"></i>
                        <span>Users</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />      {/* CONTENIDO DEL HOME */}
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />          {/* CONTENIDO DEL BOTÓN 'PAGES' */}
                </Route>
                <Route path="/LastMovieDetail">
                    <LastMovieDetail />       {/* CONTENIDO DEL BOTÓN 'CHARTS' */}
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />    {/* CONTENIDO DEL BOTÓN 'TABLES' */}
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;