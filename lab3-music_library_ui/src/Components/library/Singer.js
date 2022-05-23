import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

let Singer = () => {

    let [singer, setSinger] = useState([]);
    let {id} = useParams();

    let error = (err) => {
        return (<div className={'alert alert-error'}>
            <p className={'h3'}>{`oOps, ${err} happened, try again later`}</p>
        </div>)
    }

    useEffect(() => {
        fetch(`http://localhost:5200/artists/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSinger(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id, singer])

    let renderAlbums = () => {
        if (singer.albums) {
            return singer.albums.map((album) => {
                return (<div>
                    <div className={'d-flex d-flex-row mx-2'}>
                        <img className={'rounded img-fluid'} style={{width: '15em'}}
                             alt={`album img`} src={`/images/albums/${album.cover}.jpg`}></img>
                    </div>
                    <div className={'text-center'}>
                        <label className={'my-2'}>
                            {`${album.title}: $${album.price}`}
                        </label>
                    </div>
                </div>)
            })
        } else {
            return (error('no albums found'))
        }
    }

    let renderSinger = () => {
        if (singer.id) {
            return (<div>
                <div className={'d-flex align-items-center justify-content-center text-center'}>
                    <div className={'d-flex-column'}>
                        <p className={'h3'}>
                            {singer.name}
                        </p>
                        <p>
                            {singer.bio}
                        </p>
                    </div>
                    <div className={'col-6'}>
                        <img className={'rounded img-fluid'} name={`${singer.name} image`} style={{width: '25em'}}
                             alt={`${singer.name}`} src={`/images/covers/${singer.cover}.jpg`}></img>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center p-5 m-5">
                    {renderAlbums()}
                </div>
            </div>)
        } else {
            error('no data')
        }
    }

    return (renderSinger())
}

export default Singer;