import React from 'react';
import { useEffect, useState } from 'react';
import { getCountry, getReportByCountry } from './API';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

useEffect(() => {
  getCountry()
    .then(res =>{
      // console.log({res});
      setCountries(res.data);

      setSelectedCountryId('vn');
    })
}, []);
  
const handleOnChange = (e) =>{
  setSelectedCountryId(e.target.value);
}

  useEffect(() =>{
    if(selectedCountryId){
  const { Slug } = countries.find(country => country.ISO2.toLowerCase() ===  selectedCountryId);

  getReportByCountry(Slug)
    .then(res =>{
        res.data.pop();
        setReport(res.data)
    });
  }
  },[countries, selectedCountryId])

  return (
  <React.Fragment>
    <CountrySelector 
    countries={countries}
    handleOnChange={handleOnChange}
    value={selectedCountryId}
    />
    <Highlight report={report} />
    <Summary report={report}/>
  </React.Fragment>
  );
}

export default App;
