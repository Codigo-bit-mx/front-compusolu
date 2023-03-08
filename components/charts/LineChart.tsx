import React, {useState, useEffect} from 'react';

interface Props {    
  series: { data: number[] }[]
  options:{
    chart:{ 
        id: string, 
        group: string,
        type: string,
        height: number,
        sparkline: {enabled: boolean},
        dropShadow: {
           enabled: boolean,
           top: number,
           left: number,
           blur: number,
           opacity: number,
       }
   },
   colors: string[]
   stroke: { curve: string }
   grid: {
     padding: {
       top: number,
       bottom: number,
       left: number
     }
   },
   markers: {size: number}
  },
}

const LineChart = (props: Props) => {
    
    const [Chart, setChart] = useState<any>()
    const hasType = typeof props.options.chart.type !== "undefined";
  
   useEffect(() => { 
    import("react-apexcharts").then((mod) => {
        setChart(() => mod.default);
          });
    })

    return hasType && Chart && <Chart {...props} />;
}

export default LineChart 