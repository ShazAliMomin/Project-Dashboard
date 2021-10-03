import './Information.css';

const Information = ({name, owner, location, type}) => {
    return (
        <div className="infoBox">
            <h3 className="info">Project Information</h3>
            <p className="i">- Name: {name}</p>
            <p className="i">- Owner: {owner}</p>
            <p className="i">- Location: {location}</p>
            <p className="i">- Type of Work: {type}</p>
        </div>
    )
}

export default Information
