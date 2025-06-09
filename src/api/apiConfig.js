const apiConfig = {
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  originalImage: (imgPath) => `${process.env.REACT_APP_IMAGE_ORIGINAL_URL}${imgPath}`,
  w500Image: (imgPath) => `${process.env.REACT_APP_IMAGE_URL}${imgPath}`,
};

export default apiConfig;