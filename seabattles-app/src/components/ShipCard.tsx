import { FC } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './ShipCard.css'

interface Props {
    id: number
    name: string
    weapon: string
    armoring: string
    year: number
    displacement: number
    length: number
    speed: number
    status: string
    image_src: string
}

const ShipCard: FC<Props> = ({ id, name, image_src }) => (
    <Card className = "d-inline-block">
        <Card.Img className="card-img-top" src={image_src || 'https://dostavka.phali-hinkali.ru/murino/api2/images/placeholder_1000x.jpg'} alt = {name} />
        <Card.Body>                
            <div className="card-title">
                <Card.Title><div className="gText">{name}</div></Card.Title>
            </div>
            <div className = "execBtn">
            <Link className="link" to={`/bmstu-frontend/seabattles/${id}`}><Button className="cardButton" variant="primary"><div className="buttonShip">Перейти на страницу описания корабля</div></Button></Link>
                <a className = "add" href='#'>
                    <img src="https://png2.cleanpng.com/sh/fc453c00f280aa50dbe32611776eaeb0/L0KzQYm4UsA4N5hAhJH0aYP2gLBuTfNweKpxfdh9LXzsc7b1kBUueJD3jNNrbHWwfrb7lB9zc15sitN5aHnmg376gBFtaZNxReJ1dYOwc7r5gBxmNZCyiAhwLYDxd37wgB9vNZd3fdc2ZHB6fr32gfQuOWU6T6Y2NXOzcYaBVBFmP5Znfao3NUm3RIW5UMEyPWU5Sao6OEi1SYa1kP5o/kisspng-copyleft-license-portable-network-graphics-scalabl-plus-circle-o-svg-png-icon-free-download-14574-5c0a587ae7ebe8.59444201154418188295.png" alt="Добавить в корзину" height = "33rem"/>
                </a>
            </div>
        </Card.Body>
    </Card>
)
   
export default ShipCard;