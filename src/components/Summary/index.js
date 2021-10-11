import React, { useState, useEffect} from 'react';

import { Grid } from '@material-ui/core';
import LineChart from '../Charts/LineChart';
import HighMaps from '../Charts/HighMaps';
import { getMapDataByCountryId } from '../../API';

export default function Summary({ report, selectedCountryId }) {
    const [mapData, setMapData] = useState({})

    useEffect(() => {
        if(selectedCountryId){
            getMapDataByCountryId(selectedCountryId)
            .then(res => 
             setMapData(res)
            )
            .catch(err => console.err(err))
        }
    }, [selectedCountryId])
    
    return (
        <div style={{marginTop: 10}}>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart data={report} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HighMaps mapData={mapData} />
                </Grid>
            </Grid>
        </div>
    )
}
