import { useEffect, useState } from "react"
import axios from "axios"

interface NetworkTraffic {
    id: number;
    name: string;
    type: string;
    value: string;
    group: string;
    color: string;
}

export const getTrafficNetwork = () => {
    const [data, setData] = useState<NetworkTraffic | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/v1/capture')
                setData(response.data)
            } catch (error) {
                console.error('There was a problem with the request:', error)
            }
        }

        fetchData()
    }, [])
}