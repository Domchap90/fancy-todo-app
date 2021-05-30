const UNSPLASH_URL = `https://api.unsplash.com/search/photos?query=street-photography&page=1&per_page=5&client_id=${process.env.REACT_APP_UNSPLASH_IMAGE_API_KEY}`;

export const getImages = async() => {
    const response = await fetch(UNSPLASH_URL);
    console.log('Image Response = ', response)
    const json = await response.json();
    console.log('json = ', json.results);

    return json.results;
}

const unsplashImageAPI = {
    getImages
};

export default unsplashImageAPI;