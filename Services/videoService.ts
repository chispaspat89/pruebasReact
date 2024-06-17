import http from "../types/http-common";
import VideoData from "../types/video";


const getAll = () => {
    return http.get<Array<VideoData>>("/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBUq4PcV-oHsEtllqig3SWPtPYX2M-x--g");
  };


  const VideoService = {
    getAll,

  };


  export default VideoService;