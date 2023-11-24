import { api_video_trending } from "../apiUtils/apiVideoTrending";

const VideoService = {
  videos: () => api_video_trending.request("trending", "GET"),
};

export default VideoService;
