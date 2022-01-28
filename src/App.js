import Typography from '@mui/material/Typography';
import './App.css';
import Body from './components/Container/Body';

function App() {

  return (
    
    <div className="App">
      <Typography variant="h3" gutterBottom component="div" style={{fontWeight:'700'}}>
         Weather app
      </Typography>
      <Body/>
    </div>
  );
}

export default App;
