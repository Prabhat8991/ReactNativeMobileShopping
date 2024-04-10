import axios from 'axios';

const URL = 'https://api.restful-api.dev/objects'

export async function getDevices() {
    const response = await axios.get(URL)
    return response.data.map(item => ({
        id: item.id,
        name: item.name
    }))
}