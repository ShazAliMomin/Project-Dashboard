import Header from './components/Header.js';
import Graph from './components/Graph.js';
import ProjectTab from './components/Project.js';
import Information from './components/Information.js';
import GraphType from './components/GraphType.js';
import DailyWeeklyMonthly from './components/DailyWeeklyMonthly.js';
import Footer from './components/Footer.js';
import './App.css'
import Data from './db-small.json';

var project = Data.projects[4];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Sidebar">
        <ProjectTab />
        <div className="graphs">
          <Graph />
        </div>  
      </div>
      <div className="Sidebar">
        <Information name={project.projectName} owner={project.owner} location={project.location.name} type={project.typeOfWork} />
        <GraphType />
        <DailyWeeklyMonthly />
      </div>
      <Footer />
    </div>
  );
}

export default App;