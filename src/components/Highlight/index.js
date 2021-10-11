import React from 'react'

import { Grid } from '@material-ui/core'
import HighlightCard from './HighlightCard';

export default function Highlight({ report }) {
    const data = report && report.length ? report[report.length-1]: [];

    const summary = [
        {
            title: 'Confirmed',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Recovered',
            count: data.Recovered,
            type:'recovered'

        },
        {
            title: 'Deaths',
            count: data.Deaths,
            type: 'death'
        }
    ]

    return (
      <Grid container spacing ={3}>
          {
              summary.map(item => 
                <Grid item sm={4} xs={2} key={item.type}>
                     <HighlightCard title={item.title} count={item.count} type={item.type} />
                </Grid>
              )
          }
      </Grid>

    )
}
