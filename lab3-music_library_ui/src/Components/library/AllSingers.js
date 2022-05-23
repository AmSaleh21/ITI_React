import {useEffect, useState} from "react";
import SingerCard from "./SingerCard";


let AllSingers = () => {
    let [singers, setSingers] = useState([]);

    const error = (err) => {
        return (
            <div className={'alert alert-error'}>
                <p className={'h3'}>{`oOps, ${err} happened, try again later`}</p>
            </div>
        )
    }

    useEffect(() => {
        fetch('http://localhost:5200/artists')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSingers(data)
            })
            .catch((err) => {
                error(err)
            })
    }, [])

    const renderSingers = () => {
        if(singers.length > 0){
            return singers.map((singer) => {
                return (
                    <SingerCard key={singer.id} singer={singer}></SingerCard>
                )
            })
        }else{
            setTimeout(()=>{
                return (
                    <div className={'container alert  alert-danger text-center'}>no data</div>
                )
            },1000)
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            {renderSingers()}
        </div>
    )

}

export default AllSingers;