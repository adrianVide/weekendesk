import React, { useState } from "react";
import "./styles.css";

const HotelCard = ({ hotel, onOffer }) => {
  const [hotelModal, setHotelModal] = useState(false);
  return (
    <>
      <div className='hotel-card' onClick={() => setHotelModal(true)}>
        <img
          src={hotel.mainImage.url}
          alt=" random imgee"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16 ">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 hover:border-gray-100">
            <div className="flex items-baseline">
              {onOffer && (
                <span className="weekendesk-bg text-white text-xs p-2 inline-block rounded uppercase font-semibold tracking-wide">
                  On Offer!
                </span>
              )}

              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {hotel.weekend[0].price.nbRooms} Rooms &bull;{" "}
                {hotel.weekend[0].price.nights} Nights
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {hotel.label}
            </h4>

            <div className="mt-1 weekendesk-color">
              {hotel.weekend[0].price.sellPrice}
              <span className="weekendesk-color text-sm"> € </span>
            </div>
            {onOffer && (
              <div className="mt-1 text-gray-500">
                was {hotel.weekend[0].price.refPrice}
                <span className="text-gray-500 text-sm"> € </span>
              </div>
            )}

            {hotel.review && (
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  {hotel.review?.average} ratings{" "}
                </span>
                <span className="text-sm text-gray-600">
                  (based on {hotel.review?.count} ratings)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {hotelModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{hotel.label}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setHotelModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-5">
                      <ul className="program">
                        {hotel.weekend[0]?.programIntro.map((activity, index) => {
                          return <li key={index}>{activity}</li>;
                        })}
                      </ul>
                      <ul className="facilities">
                        {hotel.facility?.map((facility, index) => {
                          return (
                            <li key={index}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="#ff285a"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {facility}
                            </li>
                          );
                        })}{" "}
                      </ul>{" "}
                    </div>
                    <div className="tags">
                      {hotel.weekend[0]?.topTheme.map((tag, index) => {
                        return (
                          <span
                            key={index}
                            className="weekendesk-bg text-white text-xs p-2 inline-block rounded uppercase font-semibold tracking-wide"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setHotelModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default HotelCard;
