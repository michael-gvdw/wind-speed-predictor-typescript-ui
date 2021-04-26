import axios from 'axios'

// types
import { WindData } from './App'

const BASE_WIND_URL = "https://wind-speed-predictor-api.herokuapp.com"

export const fetchWindData = async (date: number): Promise<WindData> => {
    const { data } = await axios.get(`${BASE_WIND_URL}/wind-speed-data/${date}`)
    return data
}

// export const fetchSevenDaysInAdvance = async (date: number): Promise<WindData[]> => {
//     const { data } axios.get()
// }