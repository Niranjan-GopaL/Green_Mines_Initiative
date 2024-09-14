import { Chart as ChartJS, CategoryScale, LinearScale, BarElement,  PointElement, Title, Tooltip, Legend, ArcElement , LineElement } from 'chart.js';
import React, { useRef, useEffect } from 'react';
import { Bar, Pie, Bubble, Chart } from 'react-chartjs-2';
import faker from 'faker';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);
  

const options = {
    plugins: {
      title: {
        display: true,
        text: 'Total Carbon Emmision by Sector',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
};
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
const data_1 = {
    labels,
    datasets: [
      {
        label: 'Coal Processing',
        data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Transportation',
        data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Ventilation Systems',
        data: labels.map(() => faker.datatype.number({ min: 300, max: 1000 })),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
};

const data_2 = {
    labels: ['Methane Release', 'Coal Processing', 'Excavation & Drilling', 'Power Generation & Consumption', 'Ventilation Systems', 'Transportation '],
    datasets: [
      {
        label: 'Emmision ( in million tonnes )',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  export const options_3 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  const data_3 = {
    datasets: [
      {
        label: 'Coal Processing',
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
          r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Excavation & Drilling',
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
          r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };  


const data_4 = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Transportation',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 500, max: 1000 })),
    },
    {
      type: 'bar',
      label: 'Coal Processing',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: 800, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Excavation & Drilling',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
    },
  ],
};


function triggerTooltip(chart) {
  const tooltip = chart?.tooltip;

  if (!tooltip) {
    return;
  }

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}


const DataVisualization = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      const chart = chartRef.current?.chartInstance;
  
      if (chart) {
        triggerTooltip(chart);
      }
    }, []);

return (
    <div>
      <h2>Emission Data Visualization</h2>

      <Bar options={options} data={data_1} />
      <div style={{ height: '200px' }}></div>
      
      
      <Pie data={data_2} />
      <div style={{ height: '200px' }}></div>

      <Bubble options={options_3} data={data_3} />
       <div style={{ height: '200px' }}></div>
    
      <Chart ref={chartRef} type='bar' data={data_4} />
    </div>
  );
};

export default DataVisualization;