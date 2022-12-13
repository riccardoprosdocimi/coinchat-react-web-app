import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Dropdown, DropdownButton} from "react-bootstrap";
import {logoutThunk} from "../services/users-thunks";
import {LinkContainer} from "react-router-bootstrap";

function NavigationBar() {
    const {currentUser} = useSelector(state => state.users);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutThunk());
        navigate('/')
    };

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
                                        <LinkContainer to="/">
                                            <Nav.Link className={`wd-nav-bar ${active === '' ? 'active' : ''}`}>
                                                Home
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="blog">
                                            <Nav.Link className={`wd-nav-bar ${active === 'blog' ? 'active' : ''}`}>
                                                Blog
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="profile">
                                            <Nav.Link className={`wd-nav-bar ${active === 'profile' || active === 'edit-profile' ? 'active' : ''}`}>
                                                Profile
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="search">
                                            <Nav.Link className={`wd-nav-bar ${active === 'search' ? 'active' : ''}`}>
                                                Search
                                            </Nav.Link>
                                        </LinkContainer>
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
                                    {
                                        !currentUser &&
                                        <Nav>
                                            <LinkContainer to="register">
                                                <Nav.Link className="wd-nav-bar">
                                                    Register
                                                </Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to="login">
                                                <Nav.Link className="wd-nav-bar">
                                                    Login
                                                </Nav.Link>
                                            </LinkContainer>
                                        </Nav>
                                    }
                                    {
                                        currentUser &&
                                        <DropdownButton
                                            className="wd-dropdown-btn"
                                            align="end"
                                            title={<img className="rounded-circle border"
                                                        height={30}
                                                        width={30}
                                                        src={currentUser && `/images/p${currentUser.avatar}.jpg`}
                                                        alt="user's avatar"/>}
                                            id="dropdown-menu-align-end">
                                            {
                                                currentUser.role === 'ADMIN' &&
                                                <LinkContainer to="edit-users">
                                                    <Dropdown.Item className={`wd-nav-bar ${active === 'edit-users' ? 'active' : ''}`}
                                                                   eventKey="1">
                                                        Edit users
                                                    </Dropdown.Item>
                                                </LinkContainer>
                                            }
                                            <LinkContainer to="blog">
                                                <Dropdown.Item className={`wd-nav-bar ${active === 'blog' ? 'active' : ''}`}
                                                               eventKey="2">
                                                    Blog
                                                </Dropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="">
                                                <Dropdown.Item eventKey="3">
                                                    Link 2
                                                </Dropdown.Item>
                                            </LinkContainer>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item eventKey="4"
                                                           onClick={handleLogout}>
                                                Logout
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    }
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