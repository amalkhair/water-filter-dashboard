export default function TimeDisplay() {
    const now = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <div className="card text-center">
            <h3 className="tds-subtext">Current Time</h3>
            <div className="tds-circle">{now}</div>
        </div>
    )
}
