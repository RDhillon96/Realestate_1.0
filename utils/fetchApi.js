import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi= async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e9e32e3f4cmsh2d2e9165d860dd5p10b6dajsn8b5072efb506',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

 return data;
}