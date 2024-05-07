import logo from './logo.svg';
import './App.css';
import { Card, CardContent, Grid } from '@mui/material';
import CardDetails from './components/CardDetails';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {

  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);

  async function postData() {
    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "limit": 10,
        "offset": offset
      }), // body data type must match "Content-Type" header
    });
    const jobList = (await response.json())?.jdList;
    const filteredList = jobList.filter((item) => item.companyName && item.jobDetailsFromCompany && item.jobRole && item.location && item.logoUrl && item.maxExp && item.maxJdSalary && item.minExp && item.minJdSalary)
    console.log("JO ------ ", filteredList)
    setJobs([...jobs, ...filteredList]);
    setOffset(offset+10);
    // return response.json(); // parses JSON response into native JavaScript objects
  };

  postData();

  const arr = [{}, {}, {}, {}, {}]
  return (
    <div className="App">
      <header className="App-header">
        <InfiniteScroll
          dataLength={10} //This is important field to render the next data
          next={postData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid container spacing={3} style={{ padding: 20, width: "85%"}}>
            {jobs.map((item) => (
              <Grid item xs={4}>
                <CardDetails jobDetails={item}/>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </header>
    </div>
  );
}

export default App;
