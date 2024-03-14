import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Homepage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  return (
    <div className="App">
    <Navbar/>

    {/* Quand je vais sur cette route, ça renvoie telle page-compo  */}
    <Routes> 
      <Route path="/" element={<Homepage/>}/>
      <Route path="/projects" element={<ProjectListPage/>}/>
      <Route path="/projects/:projectId" element={<ProjectDetailsPage/>}/>
      <Route path="/projects/edit/:projectId" element={<EditProjectPage/>}/>
      <Route path="/task/edit/:taskId" element={<EditTaskPage/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
