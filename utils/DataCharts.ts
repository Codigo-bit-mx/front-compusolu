
  export const spark1 = {
  series: [{
        data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }],
   options: {
    chart: {
        id: 'spark1',
        group: 'sparks',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        }
    }, 
      colors: ['#fff'],
      stroke: {
        curve: 'smooth', 
        width: 2
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 30
        }
      },
   }
   
    // tooltip: {
    //   x: {
    //     show: false
    //   },
    //   y: {
    //     title: {
    //       formatter: function formatter(val) {
    //         return '';
    //       }
    //     }
    //   }
    // }
  }
  
  export const spark2 = {
    series: [{
        data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    }],
    options:{
        chart: {
            id: 'spark2',
            group: 'sparks',
            type: 'line',
            height: 80,
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 2,
              opacity: 0.2,
            }
          },
          colors: ['#fff'],
          stroke: {
            curve: 'smooth', 
            width: 2
          },
          grid: {
            padding: {
              top: 20,
              bottom: 10,
              left: 30
            }
          },
          markers: {
            size: 0
          },
          tooltip: {
            x: {
              show: false
          }},
          y: {
            title: {
              formatter: function formatter(val: any) {
                return '';
              }
            }
          }
      }
    // }
  }
  
  export const spark3 = {
    series: [{
     data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    }],
    options:{
        chart: {
          id: 'spark3',
          group: 'sparks',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 30
          }
        },
        colors: ['#fff'],
    }

    // xaxis: {
    //   crosshairs: {
    //     width: 1
    //   },
    // },
    // tooltip: {
    //   x: {
    //     show: false
    //   },
    //   y: {
    //     title: {
    //       formatter: function formatter(val) {
    //         return '';
    //       }
    //     }
    //   }
    // }
  }
  
  export const spark4 = {
    series: [{
     data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
    }],
    options:{
        chart: {
          id: 'spark4',
          group: 'sparks',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 30
          }
        },
        colors: ['#fff'],
    }
    // xaxis: {
    //   crosshairs: {
    //     width: 1
    //   },
    // },
    // tooltip: {
    //   x: {
    //     show: false
    //   },
    //   y: {
    //     title: {
    //       formatter: function formatter(val) {
    //         return '';
    //       }
    //     }
    //   }
    // }
  }


 export const lineColumarea = {
  series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
 }],
  options: { 
    chart: {
    height: 350,
    type: 'line',
    stacked: false,
    zoom: {
      enabled: false
    },
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: false,
    intersect: false,
    y: {
      formatter: function (y: any ) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
  
      }
    }
   }, 
   legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
  }
}


var options = {
  series: [42, 47, 52, 58, 65],
  chart: {
  width: 380,
  type: 'polarArea'
},
labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
fill: {
  opacity: 1
},
stroke: {
  width: 1,
  colors: undefined
},
yaxis: {
  show: false
},
legend: {
  position: 'bottom'
},
plotOptions: {
  polarArea: {
    rings: {
      strokeWidth: 0
    },
    spokes: {
      strokeWidth: 0
    },
  }
},
theme: {
  monochrome: {
    enabled: true,
    shadeTo: 'light',
    shadeIntensity: 0.6
  }
}
};


export const lineGradient = {
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2]
    }
  ],
  options: {
    chart: {
      height: 550,
      type: "area",
      stacked: false,
      zoom: {
        enabled: false
      },
     
    },
    colors: ["red"],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: true,
        shade: 'light',
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    title: {
      
      align: 'left',
      style: {
        fontSize: '12px'
      }
    },
    // subtitle: {
    //   text: 'D1',
    //   floating: true,
    //   align: 'right',
    //   offsetY: 0,
    //   style: {
    //     fontSize: '16px'
    //   }
    // },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    },
  }
};

export const configBar = {
   series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
     options: {
      chart: {
         type: 'bar',
        //  height: 580,
         stacked: true,
         toolbar: {
          show: false
      }
      },
      colors: ['green'],
       plotOptions: {
        bar: {  
          borderRadius: 10,
           horizontal: true,
        }
      },
      title: {
        
        align: 'left',
        style: {
          fontSize: '12px'
        }
      },
      subtitle: {
        text: 'D1',
        floating: true,
        align: 'right',
        offsetY: 0,
        style: {
          fontSize: '16px'
        }
      },
      dataLabels: {
        enabled: false
        },
      xaxis: {
        categories: ['Energia', 'Nomina', 'Cementos', 'Utileria', 'Nomina', 'Servicios', 'Agua',
          'Gasto', 'Transporte', 'Insumos'],
      }
    }
};

export const configProcess = {
series: [76, 67, 61, 90],
options: {
  chart: {
    // height: 390,
    type: 'radialBar',
  },
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: ['#e21919', '#c62424', '#9e1e1e', '#711e1e'],
labels: ['Proceso1', 'Proceso2', 'Proceso3', 'Proceso4'],
legend: {
  show: true,
  floating: true,
  fontSize: '10px',
  position: 'left',
  offsetX: 0,
  offsetY: 0,
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName: any, opts: any) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
}
};


const generateData = (cant: number, minmax: {min: number, max: number}) => { 

  let date = []
  let i: number = 1
  
  for (i; i <= cant; i++) {
    let a = {
      x: `D${i}`, 
      y: Math.floor( Math.random() * (minmax.max - minmax.min) + minmax.min )
    }  
  date.push(a)
  }
 
 return date

}


export const optionsMapCalor = {
  series: [{
    name: 'Ene',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Feb',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Mar',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Abr',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'May',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Jun',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Jul',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Ago',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  },
  {
    name: 'Sep',
    data: generateData(20, {
      min: 0,
      max: 55
    })
  }
],
options: {
  chart: {
  height: 350,
  type: 'heatmap',
   toolbar: {
    show: false
   }
},
plotOptions: {
  heatmap: {
    shadeIntensity: 0.5,
    radius: 2,
    useFillColorAsStroke: false,
    colorScale: {
      ranges: [{
          from: 0,
          to: 5,
          name: 'Bajo',
          color: '#e21919'
        },
        {
          from: 6,
          to: 20,
          name: 'Medio',
          color: '#c62424'
        },
        {
          from: 21,
          to: 45,
          name: 'Alto',
          color: '#9e1e1e'
        },
        {
          from: 46,
          to: 55,
          name: 'Extremo',
          color: '#711e1e'
        }
      ]
    }
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: 3
},
title: {
 
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
}
};