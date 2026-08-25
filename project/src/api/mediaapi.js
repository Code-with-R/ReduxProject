import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY


export const fetchPhotos = async (query) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query: query,
            page: 1,
            per_page: 20,
        },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}`}
    })

    return res.data;

}

export const fetchVideo = async (query) => {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: {
            query: query,
            per_page: 20,
        },
        headers: { Authorization:PEXELS_KEY}
    })
    return res.data;
}

  
