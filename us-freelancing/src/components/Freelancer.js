
import {Image} from 'react-bootstrap'



export const Freelancer = ({ freelancer, showDetails  }) => {
    const {name,image} = freelancer


    return (
        <div onClick={() => showDetails(freelancer)}>
            <Image className="image" src={image} alt="freelancer" rounded />
            <h2>{name}</h2>
        </div>
        
    )
}


