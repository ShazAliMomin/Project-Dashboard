import './Project.css';
import Information from './Information';
import Data from './db-small.json';

var project1 = Data.projects[0];
var project2 = Data.projects[1];
var project3 = Data.projects[2];
var project4 = Data.projects[3];
var project5 = Data.projects[4];

const ProjectTab = () => {

    const sendInfo = (id) => {
        
        console.log(id);
    }

    return (
        <div className="projects">
            <div className="projectWrapper">
                <div className="projectSelection">
                    <h3 className="title">Projects</h3>
                    <ul>
                        <li className="projectTitle"><button onClick={() => { sendInfo(1) }}  className="buttons">{project1.projectName}</button></li>
                        <li className="projectTitle"><button onClick={() => { sendInfo(2) }} className="buttons">{project2.projectName}</button></li>
                        <li className="projectTitle"><button onClick={() => { sendInfo(3) }} className="buttons">{project3.projectName}</button></li>
                        <li className="projectTitle"><button onClick={() => { sendInfo(4) }} className="buttons">{project4.projectName}</button></li>
                        <li className="projectTitle"><button onClick={() => { sendInfo(5) }} className="buttons">{project5.projectName}</button></li>
                    </ul>
                </div>
                
            </div>
        </div>
        
    )
}

export default ProjectTab
