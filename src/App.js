import logo from './logo.svg';
import './App.css';
import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CardDetails from './components/CardDetails';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { grey } from '@mui/material/colors';

function App() {

  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [companyList, setCompanyList] = useState([]);
  const [locations, setLocations] = useState([]);
  const [tech, setTech] = useState([]);
  const [minPay, setMinPay] = useState([]);
  const remote = ['remote', 'on-site'];
  const minExpItems = [1,2,3,4,5,6,7,8,9,10];

  const [locValues, setLocvalues] = useState([]);
  const [compValues, setCompValues] = useState([]);
  const [roleVaues, setRoleValues] = useState([]);

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
    setJobs([...jobs, ...filteredList]);
    
    setOffset(offset + 10);
    if (jobList.length < 10) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    setCompanyList(jobs.map((item) => item.companyName))
    setLocations(Array.from(new Set(jobs.map((item) => item.location))))
    setTech(Array.from(new Set(jobs.map((item) => item.jobRole))))
    setMinPay(Array.from(new Set(jobs.map((item) => item.minJdSalary))))
  }, [jobs])

  useEffect(() => {
    if (!jobs) return;

    postData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='caption' style={{ color: grey[800] }}>Company</Typography>
            <Select
              labelId='s1'
              multiple
              value={compValues}
              onChange={(e) => setCompValues(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
              renderValue={(selected) => selected.join(', ')}
              style={{ width: 150, height: 40 }}
            >
              {companyList.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='caption' style={{ color: grey[800] }}>Min Experience</Typography>
            <Select
              style={{ width: 150, height: 40 }}
            >
              {minExpItems.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='caption' style={{ color: grey[800] }}>Location</Typography>
            <Select
              multiple
              value={locValues}
              onChange={(e) => setLocvalues(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
              renderValue={(selected) => selected.join(', ')}
              style={{ width: 150, height: 40 }}
            >
              {locations.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='caption' style={{ color: grey[800] }}>Remote/On-Site</Typography>
            <Select
              style={{ width: 150, height: 40 }}
            >
              {remote.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='caption' style={{ color: grey[800] }}>Role</Typography>
            <Select
              multiple
              value={roleVaues}
              onChange={(e) => setRoleValues(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
              renderValue={(selected) => selected.join(', ')}
              style={{ width: 150, height: 40 }}
            >
              {tech.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='caption' style={{ color: grey[800] }}>Min Pay</Typography>
            <Select
              style={{ width: 150, height: 40 }}
            >
              {minPay.map((item) => (
                <MenuItem value={item}>₹ {item} LPA</MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <InfiniteScroll
          dataLength={jobs.length} //This is important field to render the next data
          next={postData}
          hasMore={hasMore}
          style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: 20 }}
          loader={<h4>Loading...</h4>}
          endMessage={
            <Typography>You've reached to end</Typography>
          }
        >
          <Grid container spacing={3} style={{ width: "85%" }}>
            {jobs.map((item) => (
              <Grid item xs={12} md={4} sm={6}>
                <CardDetails jobDetails={item} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </header>
    </div>
  );
}

export default App;
