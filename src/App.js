import logo from './logo.svg';
import './App.css';
import { Card, CardContent, Grid } from '@mui/material';
import CardDetails from './components/CardDetails';

function App() {

  const arr = [{}, {}, {}, {}, {}]
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={3} style={{ padding: 20, width: "85%"}}>
          {arr.map((item) => (
            <Grid item xs={4}>
              <CardDetails />
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
