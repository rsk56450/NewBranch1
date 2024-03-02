import React from "react";
import { useSearchParams } from "react-router-dom";
import "react-redux";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const WatchingPart = () => {
  const [searchParams] = useSearchParams();
  const SugeestionList = useSelector((store) => store.app.sugesstionList);
  console.log("Sygesttion lis t =  ", SugeestionList);

  console.log("**************************");
  console.log("serach params  ", searchParams.get("v"));

  return (
    <div className="flex ">
      <iframe
        width="1460"
        height="515"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div>
        <div>
          {SugeestionList.map((i) => {
            return i.map((j) => {
              return <VideoCard info={j} />;
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchingPart;
