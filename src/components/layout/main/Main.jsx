import { UsersList } from "../../users/users-list/UsersList";
import {Routes,Route} from 'react-router-dom';
import { User } from "../../users/user/User";


export function Main(){
    return(
        <div className="main-content">
            <Routes>
                <Route path='/users-list' element={<UsersList/>} />
                <Route path='/users/:id' element={<User/>} />
            </Routes>
        </div>
    );
}