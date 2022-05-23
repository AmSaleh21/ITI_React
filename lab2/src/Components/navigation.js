import {Component} from "react";
import {NavLink} from "react-router-dom";

export class Navigation extends Component {

    navigation = () => {
        return (
            <div className="container">
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <NavLink to={'/'}
                       className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <label className={'bi me-2'}> University ABY </label>
                    </NavLink>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className={'nav-item px-3'}>
                            <NavLink className={'nav-link px-2 link-primary'} to={'/students'}>students</NavLink>
                        </li>
                        <li className={'nav-item px-3'}>
                            <NavLink className={'nav-link px-2 link-primary'} to={'/about'}>about</NavLink>
                        </li>
                        <li className={'nav-item px-3'}>
                            <NavLink className={'nav-link px-2 link-danger'} to={'/error'}>error</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }

    render() {
        return (
            this.navigation()
        );
    }
}
