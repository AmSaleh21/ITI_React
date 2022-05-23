import {NavLink} from "react-router-dom";
import {Button} from "primereact/button";

let cover = () => {
    return (
        <div className={'container'}>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1>Musicania</h1>
                    <NavLink to={"/artists"} className={'btn'}>
                        <Button className={'p-button p-button-lg p-button-rounded p-button-outlined'} label={'START...'}></Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default cover;