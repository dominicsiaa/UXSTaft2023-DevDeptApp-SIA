import axios from 'axios'
const baseUrl = 'https://api.thecatapi.com/v1/images'

const getRandomCat = () => {
    const response = axios.get(`${baseUrl}/search?has_breeds=1&api_key=live_IEUdwUb5bSc4poeJdnUgSw3EOK0Mou0cyofACHCDrwcna1Y8YhyvycBND2ghRnxa`)
    return response.then(response => response.data)
}

export default { 
    getRandomCat
}