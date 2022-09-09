
import './App.css';
import checklistLogo from './images/checklist.png';
import ListaDeTareas from './components/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='checklist-contenedor'>
        <img 
          src={checklistLogo}
          className='checklist-logo'
          alt='CheckList-background'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
