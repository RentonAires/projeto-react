import AlertMessage from '../AletMenssage/AlertMessage'
import './Card.css'


export default function Card({trip, user}) {
    
    return (
        <>
        <li className='trip-card'>
            <AlertMessage user={user.nome}/>

            <img src={trip.img} alt={trip.alt} />
           
            <h2> {trip.tituloDaViagem} </h2>
            <h3> {trip.descricaoDaViagem}</h3>
            <a href={trip.linkDaViagem}>Link</a>

        </li>
        </>
    )
}