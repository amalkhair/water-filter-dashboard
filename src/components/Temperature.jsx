import { useEffect, useState } from 'react'

export default function Temperature() {
    const [temperature, setTemperature] = useState(null)

    useEffect(() => {
        fetch('/api/monitoring_data')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const latest = data[data.length - 1]
                    setTemperature(latest.temperature)
                }
            })
            .catch((error) => {
                console.error('Error fetching temperature data:', error)
            })
    }, [])

    return (
        <div className="card temp-container">
            <div style={{ fontSize: '2rem', color: '#1d4ed8' }}></div>
            <div>
                <h3 className="tds-subtext">Water Temperature</h3>
                <div className="temp-value">
                    {temperature !== null ? `${temperature}°C` : 'Loading...'}
                </div>
            </div>
        </div>
    )
}
