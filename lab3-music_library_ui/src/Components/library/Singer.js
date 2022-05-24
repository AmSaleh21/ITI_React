import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Image} from "primereact/image";

import './style.css'

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
                return (
                    <div key={album.albumId}>
                        <div className={'d-flex d-flex-row mx-2'}>
                            <Image imageClassName={'rounded img-fluid'} width={'150'}
                                   alt={`album img`} src={`/images/albums/${album.cover}.jpg`} preview></Image>
                        </div>
                        <div className={'text-center'}>
                            <label className={'my-2'}>
                                {`${album.title}: $${album.price}`}
                            </label>
                        </div>
                    </div>
                )})
        } else {
            return (error('no albums found'))
        }
    }

    let renderSinger = () => {
        if (singer.id) {
            return (<div>
                <div className={'d-flex align-items-center justify-content-center text-center row'}>
                    <div className={'d-flex-column col-sm-12 col-lg-6 col-md-6 order-1 order-lg-0 order-md-0'}>
                        <p className={'h3'}>
                            {singer.name}
                        </p>
                        <p>
                            {singer.bio}
                        </p>
                    </div>
                    <div className={'col-sm-12 col-lg-6 col-md-6 order-0 order-lg-1 order-md-1'}>
                        <Image preview className={'rounded img-fluid'} name={`${singer.name} image`} width={'350'}
                               alt={`${singer.name}`} src={`/images/covers/${singer.cover}.jpg`}></Image>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-wrap p-5 m-5 ">
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