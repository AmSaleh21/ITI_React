import {Card} from "primereact/card";
import {NavLink} from "react-router-dom";

const SingerCard = ({singer}) => {
    return (
        <Card title={singer.name} subTitle={`genres - ${singer.genre}`} style={{ width: '25em' }}
              className={'text-center'} >
            <NavLink to={`/artists/${singer.id}`} className={'btn'}>
                <img className={'rounded img-fluid'} name={`${singer.name} image`}
                     alt={`${singer.name}`} src={`/images/covers/${singer.cover}.jpg`}></img>
            </NavLink>
        </Card>
    )
}

export default SingerCard;