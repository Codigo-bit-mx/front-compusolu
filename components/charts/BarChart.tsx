import React, { useEffect, useState } from 'react'


export const BarChart = ( props: any ) => {
    
    const [Chart, setChart] = useState<any>()
    const hasType = typeof props.options.chart?.type !== "undefined";
  
    useEffect(() => { 
    import("react-apexcharts").then((mod) => {
        setChart(() => mod.default);
          });
    })

    return hasType && Chart && <Chart {...props} />;
}


export default BarChart