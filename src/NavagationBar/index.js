import {useLocation} from "react-router-dom";
import './index.css';

function NavigationBar() {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

    return (
        <nav className="navbar navbar-expand-lg wd-bg-navbar">
            <div className="container-fluid">
                <a className="navbar-brand"
                   style={{"color" : "#ffc300"}}
                   href="#">CoinChat</a>
                <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
                            <a className="nav-link"
                               style={active === 'home' ? null : {"color" : "#ffc300"}}
                               aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'profile' ? 'active' : ''}`}
                               style={active === 'profile' ? null : {"color" : "#ffc300"}}
                               href="#">
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'search' ? 'active' : ''}`}
                               style={active === 'search' ? null : {"color" : "#ffc300"}}
                               href="#">
                                Search
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className={'bg-transparent border-0'}>
                            <i style={{'color' : '#ffc300'}}
                               className={'bi-caret-down-fill pe-2'}></i>
                            <img className={'rounded-circle border'}
                                 height={48} width={48}
                                 src="/images/profile-picture.jpg" alt=""/>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar