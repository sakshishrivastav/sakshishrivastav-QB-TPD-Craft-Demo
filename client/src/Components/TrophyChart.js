import Highcharts from 'highcharts';
import React, { useEffect } from 'react';

const TrophyChart = ({countries,series}) => {
    useEffect(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Olympic Games All Time Medals Recieved',
                align: 'left'
            },
            xAxis: {
                categories: countries,
                title: {
                    text: 'Country Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of medals received'
                },
                stackLabels: {
                    enabled: true
                }
            },
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series
        });
    }, []);

    return <div id="container"  />;
};

export default TrophyChart;
