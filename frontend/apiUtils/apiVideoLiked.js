const API_VIDEO_LIKED = "https://655f6570879575426b454270.mockapi.io/VideoLiked";

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Các tùy chọn yêu cầu chung
const requestOptions = {
  redirect: "follow",
};

// Common API utility using Fetch
export const api_video_trending = {
  request: async (endpoint, method = "GET", data, customConfig = {}) => {
    const options = {
      ...requestOptions,
      method,
      headers: {
        "Content-Type": "application/json",
        ...customConfig.headers, // tùy chỉnh
      },
      ...customConfig,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${API_VIDEO_TRENDING}${endpoint}`, options);
      return handleResponse(response);
    } catch (error) {
      console.error(error);
      throw new Error("Error making API request");
    }
  },
};
