import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";

const cardStyle = {
    margin:'1.5rem'
};

export function UserCard( {user} )
{
    if (!user) {
        return <h2>No User!</h2>
    }
    return(
        <div className="User-card-wrapper" style={cardStyle}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                <div>
                    <strong>Email: </strong><span>{user.email}</span>                
                </div>
                <div>
                    <strong>Phone: </strong><span>{user.phone}</span>                  
                </div>
                <div>
                   <strong>Active: </strong><span>{user.isActive.toString()}</span>
                </div>
                </Card.Text>
                <Link to={'/users/' + user.id}>View profile</Link>
            </Card.Body>
    </Card>
        </div>
    );
}