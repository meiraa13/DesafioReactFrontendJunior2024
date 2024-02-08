import "./styles.scss"

export function Filters(){


    return (
        <div className="div-filters">
            <p>1 item left!</p>
            <div className="div-buttons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <button>Clear Completed</button>
        </div>
    )
}