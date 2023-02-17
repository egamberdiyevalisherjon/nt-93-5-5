import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let unmounted = false;

    async function getData() {
      try {
        setLoading(true);

        let { data } = await axios.get(url);

        if (unmounted) return;

        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (unmounted) return;
        setLoading(false);
        setData(null);
        setErrors([...errors, error]);
        setIsError(true);
      }
    }

    getData();

    return () => {
      unmounted = true;
    };
  }, [axios, setData, setLoading]);

  return { data, loading, errors, isError };
}
export default useFetch;
