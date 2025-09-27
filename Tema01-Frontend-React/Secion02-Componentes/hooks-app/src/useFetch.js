import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la petición");
                }
                return response.json();
            })
            .then(setData)
            .catch(setError)
            .finally(() => {
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
}
