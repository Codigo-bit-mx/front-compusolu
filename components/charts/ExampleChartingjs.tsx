import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';


interface Props {
  options: { 
       chart: { id: string },
       xaxis?: { categories: number[]}
  }
  series: { name: string, data: number[] }[]
  type?: string
  width: number
}

const ExampleChartingjs = (props: any) => {
    
    const [Chart, setChart] = useState<any>()
    const hasType = typeof props.type !== "undefined";
  
   useEffect(() => { 
    import("react-apexcharts").then((mod) => {
        setChart(() => mod.default);
          });
    })

    return hasType && Chart && <Chart {...props} />;
}

export default ExampleChartingjs 

