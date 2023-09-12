import { useState } from "react";

const useMutation = (requestConfig) => {
    const [error, setError] = useState(null);

    const mutateData = async (passedData) => {
        try {
            await fetch(requestConfig.url, {
                method: requestConfig.method,
                headers: requestConfig.headers,
                body: JSON.stringify(passedData),
            });
        } catch (err) {
            setError(err.message || "There is an error");
        }
    };
    return {
        error: error,
        mutateData: mutateData,
    };
};

export default useMutation;
