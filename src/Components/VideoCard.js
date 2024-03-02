const VideoCard = ({ info }) => {
  // console.log("log in video card ", info.statistics.viewCount);

  const { url } = info?.snippet?.thumbnails?.high;

  return (
    <div className=" w-full shadow-xl p-5 m-2">
      <img src={url} className="h-[150px] w-[250px] rounded-lg" />
      <h2 className="font-bold pt-2">{info?.snippet?.title}</h2>
      <h2>{info.snippet.channelTitle}</h2>
      <h3>Views : {info?.statistics?.viewCount}</h3>
    </div>
  );
};

export const UpdatedVideoCard = () => {
  return (info) => {
    return (
      <div>
        <label className="bg-green-300 font-bold">tHIS IS UPDATED</label>
        {/* {console.log("UpdatedVideoCard exxxxxxxxxxx --------   ")} */}
        <VideoCard {...info} />
      </div>
    );
  };
};

export default VideoCard;
