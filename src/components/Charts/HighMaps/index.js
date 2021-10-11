import React, { useState,useEffect, useRef} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';

highchartsMap(Highcharts);

const initOption ={
    chart: {
        height: '500',
    },
    title: {
        text: null
    },
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        min: 0,
        stops: [
            [0.2, '#FFC4AA'],
            [0.4, '#FF8A66'],
            [0.6, '#FF392B'],
            [0.8, '#B71525'],
            [1, '#7A0826'],
        ]
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticaAlign: 'bottom'
    },
    series: [
    {
        // mapData: {},
        name : 'Population',
        joinBy: ['hc-key','key']
     },
    ],
};

export default function HighMaps({ mapData }) {
    const [options, setOptions] = useState({});
    const chartRef = useRef(null);
    const [configLoaded, setConfigLoaded] = useState(false)

    console.log({ mapData});
    return null;

    useEffect(() => {
        if(mapData && Object.keys(mapData).length){
            console.log({mapData});
        const fakeData = mapData.features.map((feature, index) => ({
            key: feature.properties['hc-key'],
            value: index
        }));
        setOptions({
            ...initOption,
            title:{
                text: mapData.title
            },
            series:[
            {
                ...initOption.series[0],
                mapData: mapData,
                data: fakeData
            }
            ]
        });
        if(!configLoaded) setConfigLoaded((true));
        }
    }, [mapData, configLoaded]);


    useEffect(() =>{
        if(chartRef && chartRef.current){
            chartRef.current.chart.series[0].update({
                mapData
            })
        }
    },[mapData, configLoaded]);

    if(!configLoaded) return null;

    return (
        <HighchartsReact 
        highcharts ={Highcharts}
        options ={cloneDeep(options)}
        constructorType={'mapChart'}
        ref={chartRef}
        />
    )
}
