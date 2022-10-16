import axios from "axios";

const apiUrl = 'http://localhost:3000';

export function getAllUsers(){
    return axios.get( apiUrl+'/Users');
}

export function getUserById(id){
    return axios.get( apiUrl+'/Users/'+id);
}