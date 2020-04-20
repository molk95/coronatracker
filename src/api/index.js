import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const res = await axios.get(url);
    const updatedData = {
      confirmed:res.data.confirmed,
      recovered:res.data.recovered,
      deaths:res.data.deaths,
      lastUpdte:res.data.lastUpdate,
    }
    // res.data
    return updatedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const res = await axios.get(`${url}/daily`)
    return res.data
  } catch (error) {
    
  }
}
