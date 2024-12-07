import axios from 'axios'
import { useState } from 'react'

function useFetch() {
    const [data, setData] = useState(null)
    async function feching(url) {
        try {
            
            const res = await axios.get(url)
            const data = await res.data
            setData(data)
        } catch (error) {
            console.log(error);
        }

    
    }
  return [data, feching]
}

export default useFetch