import React, { useEffect, useState } from "react";
import { API } from "../Utils/Constants";
import Carousel from "./Carousel";
import NavBar from "./NavBar";
import TopRestaurants from "./TopRestaurants";

const AllRestaurant = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(API);
      const data = await res.json();
      setApiData(data);
      console.log(apiData.data.cards[0].card.card.imageGridCards.info);
    }

    getData();
  }, []);
  return (
    <div>
      <NavBar />

      {
        <>
          <Carousel
            data={
              apiData && apiData.data.cards[0].card.card.imageGridCards.info
            }
          />
          <hr className="w-[80vw] mx-auto mt-5 mb-10" />
          <TopRestaurants
            data={
              apiData
                ? apiData.data.cards[1].card.card.gridElements.infoWithStyle
                    .restaurants
                : []
            }
          />
          <hr className="w-[80vw] mx-auto mt-5 mb-10" />
          {/* <ResInCity
            data={
              apiData
                ? apiData.data.cards[4].card.card.gridElements.infoWithStyle
                    .restaurants
                : []
            }
          /> */}
        </>
      }
    </div>
  );
};

export default AllRestaurant;
