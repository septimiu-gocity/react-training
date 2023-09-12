import { useState, useEffect } from "react";

const useQuery = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(requestConfig.url, {
                method: requestConfig.method,
                headers: requestConfig.headers,
                body: requestConfig.body,
            });

            const data = await res.json();

            setData(data);
        } catch (err) {
            setError(err.message || "There is an error");
        }
        setIsLoading(false);
    };
    return {
        isLoading: isLoading,
        error: error,
        data: data,
        fetchData: fetchData,
    };
};

export default useQuery;
