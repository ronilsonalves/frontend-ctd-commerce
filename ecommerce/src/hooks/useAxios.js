import { useState, useEffect } from "react";

import api from '../service/API';

const useAxios = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        function loadApiData() {
            try {
                const restApi = api.get(url)
                    .then((response) => {
                        console.log(response.data)
                        setData(response.data)
                    });
            } catch (error) {
                console.log(error)
            }
        }
        loadApiData();
    }, [url]);
    return data;
}

export default useAxios;