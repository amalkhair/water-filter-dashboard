import { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

export default function TDSChart() {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('api/monitoring_data')
                const data = await response.json()

                // Map the data to fit Recharts format
                const formattedData = data.map((item, index) => ({
                    name: item.time_registration || `Point ${index + 1}`,
                    value: item.tds_value
                }))

                setChartData(formattedData)
            } catch (error) {
                console.error('Error fetching TDS chart data:', error)
            }
        }

        fetchChartData()

        const interval = setInterval(fetchChartData, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="card">
            <h3 className="tds-subtext">TDS Level Over Time</h3>
            <div style={{ width: '100%', height: 150 }}>
                <ResponsiveContainer>
                    <LineChart data={chartData}>
                        <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={2} />
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
