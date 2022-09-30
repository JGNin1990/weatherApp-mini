import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({
    loading: false,
    value: {},
    error: "",
  });

  useEffect(() => {
    setData((pre) => ({ ...pre, loading: true }));

    // navigator.geolocation.getCurrentPosition((ps) => {
    //   setLat(ps.coords.latitude);
    //   setLong(ps.coords.longitude);
    // });

    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData((pre) => ({ ...pre, loading: false, value: d }));
      })
      .catch((err) => {
        console.log(err);
        setData((pre) => ({
          loading: false,
          value: null,
          error: "Something was wrongs",
        }));
      });
  }, [url]);
  return [data];
};

export default useFetch;
