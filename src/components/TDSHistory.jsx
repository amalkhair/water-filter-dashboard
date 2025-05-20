export default function TDSHistory() {
    const history = [
        { time: '2:10 pm', value: '87 mg/L' },
        { time: '2:08 pm', value: '90 mg/L' },
        { time: '2:05 pm', value: '95 mg/L' },
        { time: '2:00 pm', value: '100 mg/L' },
    ]

    return (
        <div className="card tds-history">
            <h3 className="tds-subtext">TDS History</h3>
            <ul>
                {history.map((entry, idx) => (
                    <li key={idx} className="tds-history-item">
                        <span>{entry.time}</span>
                        <span>{entry.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// import { useEffect, useState } from 'react'
//
// export default function TDSHistory() {
//     const [history, setHistory] = useState([])
//
//     useEffect(() => {
//         fetch('/api/monitoring_data')
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data && data.length > 0) {
//
//                     const formattedHistory = data.map(entry => {
//                         const time = new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                         return {
//                             time,
//                             value: `${entry.tds_value} mg/L`
//                         }
//                     })
//                     setHistory(formattedHistory.reverse()) // Reverse to show newest first, if you want
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching TDS history:', error)
//             })
//     }, [])
//
//     return (
//         <div className="card tds-history">
//             <h3 className="tds-subtext">TDS History</h3>
//             <ul>
//                 {history.length > 0 ? (
//                     history.map((entry, idx) => (
//                         <li key={idx} className="tds-history-item">
//                             <span>{entry.time}</span>
//                             <span>{entry.value}</span>
//                         </li>
//                     ))
//                 ) : (
//                     <li>Loading history...</li>
//                 )}
//             </ul>
//         </div>
//     )
// }
