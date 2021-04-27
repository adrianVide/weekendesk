import { useEffect, useState } from "react";
import axios from "axios";

export const useHotelsFetch = (amountToFetch) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `https://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&limit=${
        amountToFetch * 30
      }&fetchPageModel=false&locale=es_ES`,
    })
      .then((res) => {
        setTimeout(() => {
          setHotels((prevHotels) => {
            let hotelsArray = [
              ...new Set([...prevHotels, ...res.data.exactMatch]),
            ];
            return hotelsArray.filter(
              (v, i, a) => a.findIndex((t) => t.id === v.id) === i
            );
          });
          setIsLoading(false);
        }, Math.floor(Math.random() * 2000));
      })
      .catch((e) => {
        return e;
      });
  }, [amountToFetch]);

  return { hotels, isLoading };
};
