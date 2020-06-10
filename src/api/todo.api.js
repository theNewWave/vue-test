import axios from "axios";
import {API_HANDLER} from "../config";

export default {    
    get_todo_from_db(payload){
        const username = "prej"
        const password = "X4taLdr"
        var basicAuth = 'Basic ' + btoa(username + ':' + password);
        axios.defaults.headers.common["authorization"] = basicAuth
        return axios.post(API_HANDLER.database_api+"todo/read-todo.php", JSON.stringify(payload))
    },
    insert_todo_into_db(payload){
        const username = "prej"
        const password = "X4taLdr"
        var basicAuth = 'Basic ' + btoa(username + ':' + password);
        axios.defaults.headers.common["authorization"] = basicAuth
        return axios.post(API_HANDLER.database_api+"todo/insert-todo.php", JSON.stringify(payload))
    },

}