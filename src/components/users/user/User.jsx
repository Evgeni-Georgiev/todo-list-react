import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../core/services/UserService";
import { getAllUsers } from '../../../core/services/UserService';
import { UserCard } from "../user-card/UserCard";

export function User(){

    let params = useParams();
    const [user,setUser] = useState(null);
    const truser = null;
 
    useEffect(() => {
        getUserById(params.id).then(response=>{
        setUser(response.data)

    })
    },[params.id])



    return(
        <UserCard user={user}/>
    );
}



