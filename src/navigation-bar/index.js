import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
    //const {currentUser} = useSelector(state => state.users);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

    if (active === 'login') {
        return null;
    } else {
        return (
            <>
                {['md'].map((expand) => (
                    <Navbar key={expand}
                            expand={expand}
                            className="wd-nav-bar-bg-font">
                        <Container fluid>
                            <Navbar.Brand href="/"
                                          style={{"color" : "#ffc300"}}>
                                CoinChat
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end">
                                <Offcanvas.Header closeButton
                                                  className="wd-nav-bar-bg-font"
                                                  style={{"color" : "#ffc300"}}>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        CoinChat
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-start flex-grow-1 pe-3 my-auto">
                                        <Nav.Link>
                                            <Link to="/"
                                                  className={`wd-nav-bar ${active === '' ? 'active' : ''}`}>
                                                Home
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="profile"
                                                  className={`wd-nav-bar ${active === 'profile' || active === 'edit-profile' ? 'active' : ''}`}>
                                                Profile
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="search"
                                                  className={`wd-nav-bar ${active === 'search' ? 'active' : ''}`}>
                                                Search
                                            </Link>
                                        </Nav.Link>
                                        <NavDropdown
                                            title="Dropdown"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <form className="d-flex">
                                        <button className={'bg-transparent border-0'}>
                                            <i style={{'color' : '#ffc300'}}
                                               className={'bi-caret-down-fill pe-2'}></i>
                                            <img className={'rounded-circle border'}
                                                 height={48} width={48}
                                                 src="/images/profile-picture.jpg" alt=""/>
                                        </button>
                                    </form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
            // <nav className="navbar navbar-expand-lg wd-nav-bar-bg-font">
            //     <div className="container-fluid">
            //         <a className="navbar-brand"
            //            style={{"color" : "#ffc300"}}
            //            href="/">CoinChat</a>
            //
            //         <button className="navbar-toggler wd-navBar"
            //                 type="button"
            //                 aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"/>
            //         </button>
            //
            //         <div className="collapse navbar-collapse">
            //             <ul className="navbar-nav me-auto">
            //                 <li className="nav-item">
            //                     <Link
            //                         to="/"
            //                         className={
            //                         `nav-link
            //                         text-decoration-none
            //                         wd-nav-bar
            //                         me-2
            //                          ${active === '' ? 'active' : ''}`}>
            //                         <span className="nav-link">
            //                             Home
            //                         </span>
            //                     </Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link
            //                         to="profile"
            //                         className={
            //                         `nav-link
            //                         text-decoration-none
            //                         wd-nav-bar
            //                         me-2
            //                     ${active === 'profile' || active === 'edit-profile' ? 'active' : ''}`}>
            //                         <span className="nav-link">
            //                             Profile
            //                         </span>
            //                     </Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link to={'/search'} className={
            //                         `nav-link
            //                         text-decoration-none
            //                         wd-nav-bar
            //                     ${active === 'search' ? 'active' : ''}`}>
            //                         <span className="nav-link">
            //                             Search
            //                         </span>
            //                     </Link>
            //                 </li>
            //             </ul>
            //             <form className="d-flex">
            //                 <button className={'bg-transparent border-0'}>
            //                     <i style={{'color' : '#ffc300'}}
            //                        className={'bi-caret-down-fill pe-2'}></i>
            //                     <img className={'rounded-circle border'}
            //                          height={48} width={48}
            //                          src="/images/profile-picture.jpg" alt=""/>
            //                 </button>
            //             </form>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}
export default NavigationBar