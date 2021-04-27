import { React, useState, useRef, useCallback } from "react";
import { useHotelsFetch } from "../useHotelsFetch";
import HotelCard from "./HotelCard";
import Loader from "./Loader";
import "./styles.css";


const Hotels = (props) => {
  const observer = useRef();
  const [timesFetched, setTimesFetched] = useState(1);
  const { hotels, isLoading } = useHotelsFetch(timesFetched);

  const lastHotelRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTimesFetched((prevTimesFetched) => prevTimesFetched + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <div className="bg-gray-100">
      <img id='logo' src="wtest.png" alt='logo' />
      <div className="grid-cols-1 md:grid-cols-3 grid gap-5 md:gap-8 container mx-auto p-4 md:p-8 ">
        {hotels.map((hotel, index) => {
          const onOffer =
            hotel.weekend[0].price?.refPrice >
            hotel.weekend[0].price?.sellPrice;

          if (hotels.length === index + 1) {
            return (
              <div ref={lastHotelRef} key={index}>
                <HotelCard hotel={hotel}  onOffer={onOffer} />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <HotelCard hotel={hotel} onOffer={onOffer} />
              </div>
            );
          }
        })}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Hotels;
