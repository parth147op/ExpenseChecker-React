import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
  const charDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]
  for(const expense of props.expenses){
    const expenseMonth = expense.date.getMonth();
    charDataPoints[expenseMonth].value+=expense.amount;
  }
  const dataPointValues = charDataPoints.map(dataPoint=>dataPoint.value);
  const TotalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {charDataPoints.map((datapoint)=>(
        <ChartBar key={datapoint.label} value={datapoint.value} maxVal={TotalMaximum} label={datapoint.label}/>
      ))}
    </div>
  )
}

export default Chart