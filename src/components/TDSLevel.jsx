import { useEffect, useState } from 'react'

export default function TDSLevel() {
    const [tds, setTds] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/monitoring_data')

                const data = await response.json()

                if (data && data.length > 0) {
                    const latest = data[data.length - 1]
                    setTds(latest.tds_value)
                }
            } catch (error) {
                console.error('Error fetching TDS data:', error)
            }
        }

        fetchData()

        const interval = setInterval(fetchData, 5000)
        return () => clearInterval(interval)
    }, [])

    const getStatus = (tds) => {
        if (tds < 100) return 'SAFE TO DRINK'
        if (tds > 100) return 'NOT SAFE'
        return 'HIGH TDS'
    }

    return (
        <div className="card text-center">
            <h3 className="tds-subtext">Current TDS Level</h3>
            <div className="tds-circle">
                {tds !== null ? `${tds} ` : '...'}<span className="text-sm">mg/L</span>
            </div>
            <p className="tds-status">
                {tds !== null ? getStatus(tds) : 'Loading...'}
            </p>
        </div>
    )
}
