import { useState, useEffect } from "react";

import apiGit from '../service/APIGIT';

const useAPIGIT =  (user) =>{
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        function loadApiDataUser() {
            try {
                apiGit.get(user)
                    .then((response) => {
                        setDataUser(response.data)
                    });
            } catch (error) {
                console.log(error)
            }
        }
        loadApiDataUser();
    }, [user]);
    return dataUser;
}

export default useAPIGIT;