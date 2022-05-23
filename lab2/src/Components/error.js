import {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Error extends Component {

    error = () => {
        return (
            <div className={'container'}>
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-3"><span className="text-danger">OOps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for does not exist.
                        </p>
                        <NavLink to={'/'}
                                 className={'btn btn-primary'}>
                            <label className={'bi me-2'}> Go Home </label>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            this.error()
        );
    }
}