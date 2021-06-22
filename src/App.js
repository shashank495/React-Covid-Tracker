import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    covidData();
  }, []);

  const covidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualRes = await res.json();
      // console.log(actualRes.statewise[0]);
      setData(actualRes.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-container">
        <h4 className="live">🔴 LIVE</h4>
        <h1 className="heading">LIVE COVID-19 TRACKER</h1>
        <div className="container">
          <div className="card one">
            <h1 className="title">country</h1>
            <h2 className="data">india</h2>
          </div>
          <div className="card two">
            <h1 className="title">OVERALL cases</h1>
            <h2 className="data">{data.confirmed}</h2>
          </div>
          <div className="card three">
            <h1 className="title">active cases</h1>
            <h2 className="data">{data.active}</h2>
          </div>
          <div className="card four">
            <h1 className="title">recovered</h1>
            <h2 className="data">{data.recovered}</h2>
          </div>
          <div className="card five">
            <h1 className="title">deaths</h1>
            <h2 className="data">{data.deaths}</h2>
          </div>
          <div className="card six">
            <h1 className="title">updated on</h1>
            <h2 className="data">{data.lastupdatedtime}</h2>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-content">Design & Developed By @Shashank Pandey</div>
      </footer>
    </>
  );
}

export default App;
