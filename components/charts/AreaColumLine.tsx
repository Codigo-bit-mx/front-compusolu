import React, { useEffect, useState } from 'react'

interface Props {
    // options: {
    //     series: {
    //         name: string;
    //         type: string;
    //         data: number[];
    //     }[];
    //     chart: {
    //         height: number;
    //         type: string;
    //         stacked: boolean;
    //     };
    //     stroke: {
    //         width: number[];
    //         curve: string;
    //     };
    //     plotOptions: {
    //         bar: {
    //             columnWidth: string;
    //         };
    //     };
    //     fill: {
    //         ...;
    //     };
    //     ... 4 more ...;
    //     tooltip: {
    //         ...;
    //     };
    // }
}

export const AreaColumLine = ( props: any ) => {
    
    const [Chart, setChart] = useState<any>()
    const hasType = typeof props.options.chart?.type !== "undefined";
  
    useEffect(() => { 
    import("react-apexcharts").then((mod) => {
        setChart(() => mod.default);
          });
    })

    return hasType && Chart && <Chart {...props} />;
}


export default AreaColumLine