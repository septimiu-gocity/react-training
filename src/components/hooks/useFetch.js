import { useState, useEffect } from "react";

const useFetch = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method,
                    headers: requestConfig.headers,
                    body: JSON.stringify(requestConfig.body),
                });

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err.message || "There is an error");
            }
        };
        fetchData();
    }, [requestConfig]);

    return {
        isLoading: isLoading,
        error: error,
        data: data,
    };
};

export default useFetch;
