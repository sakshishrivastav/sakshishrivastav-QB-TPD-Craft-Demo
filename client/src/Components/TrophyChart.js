import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const TrophyChart = ({ countries, series }) => {
    const chartComponentRef = useRef();
    const chartOptions = {
        chart: {
            type: 'column'
        },
        series: series,
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
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
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
        accessibility: {enabled: false},
    }

    return <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        ref={chartComponentRef}
        options={chartOptions} />;
};

TrophyChart.propTypes = {
    countries: PropTypes.array.isRequired,
    series: PropTypes.array.isRequired,
}

export default TrophyChart;
