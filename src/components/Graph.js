import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import './Graph.css';
import Data from './db-small.json';

var project1 = Data.projects[0].budget;
var project2 = Data.projects[1].budget;
var project3 = Data.projects[2].budget;
var project4 = Data.projects[3].budget;
var project5 = Data.projects[4].budget;

var totalLabor = 0;
var totalEquipment = 0;
var totalMaterial = 0;

var project1A = Data.projects[0].actual;
var project2A = Data.projects[1].actual;
var project3A = Data.projects[2].actual;
var project4A = Data.projects[3].actual;
var project5A = Data.projects[4].actual;

var actualLabor = 0;
var actualEquipment = 0;
var actualMaterial = 0;

for(let i = 0; i < project5.length; i++) {
    totalLabor += project5[i].labor;
    totalEquipment += project5[i].equipment;
    totalMaterial += project5[i].material;
}

for(let i = 0; i < project5A.length; i++) {
    actualLabor += project5A[i].labor;
    actualEquipment += project5A[i].equipment;
    actualMaterial += project5A[i].material;
}

const Graph = () => {
    return (
        <div className='graph'>
            <Bar
            data={{
                labels: ['Labor', 'Equipment', 'Material'],
                datasets: [
                    {
                        label: 'Budget',
                        data: [totalLabor, totalEquipment, totalMaterial], 
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Actual',
                        data: [actualLabor, actualEquipment, actualMaterial],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}
            />   
        </div>
    )
}

export default Graph

