import { useState, useEffect } from "react";

import api from '../service/API';

const useAxios = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
            try {
                 api.get(url)
                    .then((response) => {
                        setData(response.data)
                    });
            } catch (error) {
                console.log(error)
            }
    }, [url]);
    return data;
}

export default useAxios;