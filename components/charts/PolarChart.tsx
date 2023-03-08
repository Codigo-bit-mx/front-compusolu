import React, { useEffect, useState } from 'react'

// interface Props {
//     series: number []
//     options: {
//         chart:{
//             type: string,
//             width: number
//             height: number
//         },
//         stroke: {
//             colors: string []
//         }, 
//         fill: {
//             opacity: number
//         }, 
//         responsive: {
//             breakpoint: number
//             options: {
//                 chart: {
//                     width: number
//                     height: number
//                 }
//                 legend: {
//                     position: string
//                 }
//             }
//         }[]
//     }
//     type: string
// }


const PolarChart = (props: any) => {
    const [Chart, setChart] = useState<any>()
    const hasType = typeof props.options.chart.type !== "undefined";
    
    useEffect(() => { 
        import("react-apexcharts").then((mod) => {
            setChart(() => mod.default);
              });
        })

 return hasType && Chart && <Chart {...props} />;

}

export default PolarChart