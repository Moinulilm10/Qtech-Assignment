// src/hooks/useFetch.js
import { useEffect, useState } from "react";
import axiosClient from "../utility/axiosClient";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;
    setLoading(true);

    axiosClient
      .get(endpoint)
      .then((res) => {
        if (!cancel) {
          setData(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancel) {
          setError(err.message || "Something went wrong");
        }
      })
      .finally(() => {
        if (!cancel) setLoading(false);
      });

    return () => {
      cancel = true;
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
