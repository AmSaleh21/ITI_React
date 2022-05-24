import {Card} from "primereact/card";
import {NavLink} from "react-router-dom";
import {Image} from "primereact/image";

import './style.css'

const SingerCard = ({singer}) => {
    return (
        <Card title={singer.name} subTitle={`genres - ${singer.genre}`} style={{ width: '25em' }}
              className={'text-center'} >
            <NavLink to={`/artists/${singer.id}`} className={'btn'}>
                <Image imageClassName={'rounded img-fluid'} name={`${singer.name} image`} width={'250'}
                     alt={`${singer.name}`} src={`/images/covers/${singer.cover}.jpg`} preview></Image>
            </NavLink>
        </Card>
    )
}

export default SingerCard;