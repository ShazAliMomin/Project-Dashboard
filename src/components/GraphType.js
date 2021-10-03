import './GraphType.css';

const GraphType = () => {
    return (
        <div className="gType">
            <h3 className="t">Graph Type</h3>
            <div className="wrapper">
                <div>
                <p className="details">Total Cost (Line graph)</p>
                <p className="details">Total Cost by Cost Type (Bar graph)</p>
                <p className="details">Total Cost % (Pie graph)</p>
                </div>
            </div>
        </div>
    )
}

export default GraphType
