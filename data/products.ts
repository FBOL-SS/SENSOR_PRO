export type SensorProduct = {
  handle: string;
  name: string;
  oem: string;
  type: string;
  price: string;
  cost: string;
  stock: number;
  availability: string;
  image: string;
  description: string;
  tags: string[];
  brands: string[];
  compatibility: {
    brand: string;
    models: {
      model: string;
      years: string;
    }[];
  }[];
};

export const products: SensorProduct[] = [
  {
    "handle": "28164-23720",
    "name": "Mass Air Flow Sensor 28164-23720",
    "oem": "28164-23720",
    "type": "Sensor MAF",
    "price": "$38.07",
    "cost": "$23.07",
    "stock": 100,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Mass Air Flow Sensor (MAF) for Hyundai and Kia vehicles. OEM: 28164-23720. Compatible with Hyundai Elantra (2003-2006), Tiburon (2003-2006), Tucson (2005-2009); Kia Rio (2006-2010), Rio5 (2006-2010), Spectra (2004-2009), Spectra5 (2005-2009).",
    "tags": [
      "MAF Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tiburon",
      "Tucson",
      "Rio",
      "Spectra"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2003-2006"
          },
          {
            "model": "Tiburon",
            "years": "2003-2006"
          },
          {
            "model": "Tucson",
            "years": "2005-2009"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2006-2010"
          },
          {
            "model": "Rio5",
            "years": "2006-2010"
          },
          {
            "model": "Spectra",
            "years": "2004-2009"
          },
          {
            "model": "Spectra5",
            "years": "2005-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-23700",
    "name": "Camshaft Position Sensor 39350-23700",
    "oem": "39350-23700",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-23700. Compatible with Hyundai Sonata (2006-2010), Tucson (2005-2009); Kia Optima (2006-2010), Rondo (2007-2010).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Tucson",
      "Optima",
      "Rondo"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Tucson",
            "years": "2005-2009"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Rondo",
            "years": "2007-2010"
          }
        ]
      }
    ]
  },
  {
    "handle": "39300-22600",
    "name": "Manifold Absolute Pressure Sensor 39300-22600",
    "oem": "39300-22600",
    "type": "Sensor MAP",
    "price": "$10.30",
    "cost": "$6.24",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Manifold Absolute Pressure Sensor (MAP) for Hyundai and Kia vehicles. OEM: 39300-22600. Compatible with Hyundai Elantra (2001-2012), Accent (2001-2012), Tiburon (2003-2008); Kia Rio (2006-2010).",
    "tags": [
      "MAP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Accent",
      "Tiburon",
      "Rio"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2001-2012"
          },
          {
            "model": "Accent",
            "years": "2001-2012"
          },
          {
            "model": "Tiburon",
            "years": "2003-2008"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2006-2010"
          }
        ]
      }
    ]
  },
  {
    "handle": "96420-4A600",
    "name": "Vehicle Speed Sensor 96420-4A600",
    "oem": "96420-4A600",
    "type": "Sensor VSS / Velocidad",
    "price": "$6.76",
    "cost": "$4.10",
    "stock": 27,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Vehicle Speed Sensor (VSS) for Hyundai and Kia vehicles. OEM: 96420-4A600. Compatible with Hyundai Accent (2002-2017), Elantra (2003-2016), Sonata (1999-2005), Tiburon (2003-2008), Tucson (2005-2009), Getz (2002-2011), i30 (2007-2012); Kia Rio (2006-2014), Soul (2010-2014), Optima (2001-2010), Spectra (2004-2009), Forte (2010-2016), Picanto (2004-2011), Carens (2010-2013).",
    "tags": [
      "VSS Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Elantra",
      "Sonata",
      "Tiburon",
      "Tucson",
      "Getz",
      "i30",
      "Rio",
      "Soul",
      "Optima",
      "Spectra",
      "Forte",
      "Picanto",
      "Carens"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2002-2017"
          },
          {
            "model": "Elantra",
            "years": "2003-2016"
          },
          {
            "model": "Sonata",
            "years": "1999-2005"
          },
          {
            "model": "Tiburon",
            "years": "2003-2008"
          },
          {
            "model": "Tucson",
            "years": "2005-2009"
          },
          {
            "model": "Getz",
            "years": "2002-2011"
          },
          {
            "model": "i30",
            "years": "2007-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2006-2014"
          },
          {
            "model": "Soul",
            "years": "2010-2014"
          },
          {
            "model": "Optima",
            "years": "2001-2010"
          },
          {
            "model": "Spectra",
            "years": "2004-2009"
          },
          {
            "model": "Forte",
            "years": "2010-2016"
          },
          {
            "model": "Picanto",
            "years": "2004-2011"
          },
          {
            "model": "Carens",
            "years": "2010-2013"
          }
        ]
      }
    ]
  },
  {
    "handle": "39180-23500",
    "name": "Camshaft Position Sensor 39180-23500",
    "oem": "39180-23500",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39180-23500. Compatible with Hyundai Elantra (2007-2010), Sonata (2006-2010); Kia Optima (2006-2010), Rondo (2007-2010).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Sonata",
      "Optima",
      "Rondo"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2007-2010"
          },
          {
            "model": "Sonata",
            "years": "2006-2010"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Rondo",
            "years": "2007-2010"
          }
        ]
      }
    ]
  },
  {
    "handle": "39250-23900",
    "name": "Camshaft Position Sensor 39250-23900",
    "oem": "39250-23900",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39250-23900. Compatible with Hyundai Accent (2006-2011), Elantra (2007-2012); Kia Rio (2006-2011), Spectra (2004-2009).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Elantra",
      "Rio",
      "Spectra"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2006-2011"
          },
          {
            "model": "Elantra",
            "years": "2007-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2006-2011"
          },
          {
            "model": "Spectra",
            "years": "2004-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "35170-26910",
    "name": "Throttle Position Sensor 35170-26910",
    "oem": "35170-26910",
    "type": "Sensor TPS",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Throttle Position Sensor (TPS) for Hyundai and Kia vehicles. OEM: 35170-26910. Compatible with Hyundai Sonata (2006-2010), Santa Fe (2006-2009), Tucson (2005-2009); Kia Optima (2006-2010), Sportage (2005-2010).",
    "tags": [
      "TPS Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Tucson",
      "Optima",
      "Sportage"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2009"
          },
          {
            "model": "Tucson",
            "years": "2005-2009"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Sportage",
            "years": "2005-2010"
          }
        ]
      }
    ]
  },
  {
    "handle": "39220-38020",
    "name": "Water Temperature Sensor 39220-38020",
    "oem": "39220-38020",
    "type": "Sensor WTS / Temperatura",
    "price": "$8.05",
    "cost": "$4.88",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Water Temperature Sensor (WTS) for Hyundai and Kia vehicles. OEM: 39220-38020. Compatible with Hyundai Accent (2000-2006), Elantra (2000-2006), Getz (2002-2009); Kia Rio (2001-2005), Spectra (2004-2006), Cerato (2004-2009).",
    "tags": [
      "WTS Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Elantra",
      "Getz",
      "Rio",
      "Spectra",
      "Cerato"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2000-2006"
          },
          {
            "model": "Elantra",
            "years": "2000-2006"
          },
          {
            "model": "Getz",
            "years": "2002-2009"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2001-2005"
          },
          {
            "model": "Spectra",
            "years": "2004-2006"
          },
          {
            "model": "Cerato",
            "years": "2004-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "42620-39200",
    "name": "Vehicle Speed Sensor 42620-39200",
    "oem": "42620-39200",
    "type": "Sensor VSS / Velocidad",
    "price": "$11.58",
    "cost": "$7.02",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Vehicle Speed Sensor (VSS) for Hyundai and Kia vehicles. OEM: 42620-39200. Compatible with Hyundai Elantra (2007-2012), Tucson (2005-2009), Sonata (2006-2010); Kia Spectra (2004-2009), Sportage (2005-2010), Optima (2006-2010).",
    "tags": [
      "VSS Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Sonata",
      "Spectra",
      "Sportage",
      "Optima"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2007-2012"
          },
          {
            "model": "Tucson",
            "years": "2005-2009"
          },
          {
            "model": "Sonata",
            "years": "2006-2010"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Spectra",
            "years": "2004-2009"
          },
          {
            "model": "Sportage",
            "years": "2005-2010"
          },
          {
            "model": "Optima",
            "years": "2006-2010"
          }
        ]
      }
    ]
  },
  {
    "handle": "42621-39052",
    "name": "Vehicle Speed Sensor 42621-39052",
    "oem": "42621-39052",
    "type": "Sensor VSS / Velocidad",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Vehicle Speed Sensor (VSS) for Hyundai and Kia vehicles. OEM: 42621-39052. Compatible with Hyundai Sonata (2006-2010), Santa Fe (2006-2012); Kia Optima (2006-2010), Sorento (2006-2009).",
    "tags": [
      "VSS Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Sorento",
            "years": "2006-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "39300-2B100",
    "name": "Camshaft Position Sensor 39300-2B100",
    "oem": "39300-2B100",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.58",
    "cost": "$7.02",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39300-2B100. Compatible with Hyundai Elantra (2011-2016), Tucson (2010-2015); Kia Forte (2010-2016), Soul (2012-2016).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2011-2016"
          },
          {
            "model": "Tucson",
            "years": "2010-2015"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2010-2016"
          },
          {
            "model": "Soul",
            "years": "2012-2016"
          }
        ]
      }
    ]
  },
  {
    "handle": "39220-38030",
    "name": "Water Temperature Sensor 39220-38030",
    "oem": "39220-38030",
    "type": "Sensor WTS / Temperatura",
    "price": "$8.05",
    "cost": "$4.88",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Water Temperature Sensor (WTS) for Hyundai and Kia vehicles. OEM: 39220-38030. Compatible with Hyundai Accent (2000-2006), Elantra (2000-2006), Getz (2002-2009); Kia Rio (2001-2005), Spectra (2004-2006), Cerato (2004-2009).",
    "tags": [
      "WTS Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Elantra",
      "Getz",
      "Rio",
      "Spectra",
      "Cerato"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2000-2006"
          },
          {
            "model": "Elantra",
            "years": "2000-2006"
          },
          {
            "model": "Getz",
            "years": "2002-2009"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2001-2005"
          },
          {
            "model": "Spectra",
            "years": "2004-2006"
          },
          {
            "model": "Cerato",
            "years": "2004-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-23910",
    "name": "Camshaft Position Sensor 39350-23910",
    "oem": "39350-23910",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-23910. Compatible with Hyundai Sonata (2006-2010), Santa Fe (2006-2012); Kia Optima (2006-2010), Sorento (2006-2012).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "94750-37100",
    "name": "Oil Pressure Sensor 94750-37100",
    "oem": "94750-37100",
    "type": "Sensor Automotriz",
    "price": "$8.05",
    "cost": "$4.88",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Oil Pressure Sensor for Hyundai and Kia vehicles. OEM: 94750-37100. Compatible with Hyundai Accent (2000-2011), Elantra (2000-2012); Kia Rio (2001-2011), Spectra (2004-2009).",
    "tags": [
      "Oil Pressure Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Elantra",
      "Rio",
      "Spectra"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2000-2011"
          },
          {
            "model": "Elantra",
            "years": "2000-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2001-2011"
          },
          {
            "model": "Spectra",
            "years": "2004-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "39300-2B000",
    "name": "Camshaft Position Sensor 39300-2B000",
    "oem": "39300-2B000",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$10.30",
    "cost": "$6.24",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39300-2B000. Compatible with Hyundai Accent (2012-2017), Veloster (2012-2017); Kia Rio (2012-2017), Soul (2012-2017).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Veloster",
      "Rio",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2012-2017"
          },
          {
            "model": "Veloster",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2012-2017"
          },
          {
            "model": "Soul",
            "years": "2012-2017"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-2B030",
    "name": "Camshaft Position Sensor 39350-2B030",
    "oem": "39350-2B030",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$10.30",
    "cost": "$6.24",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-2B030. Compatible with Hyundai Elantra (2011-2016), Tucson (2010-2015); Kia Forte (2010-2016), Soul (2012-2016).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2011-2016"
          },
          {
            "model": "Tucson",
            "years": "2010-2015"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2010-2016"
          },
          {
            "model": "Soul",
            "years": "2012-2016"
          }
        ]
      }
    ]
  },
  {
    "handle": "39250-2B000",
    "name": "Camshaft Position Sensor 39250-2B000",
    "oem": "39250-2B000",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39250-2B000. Compatible with Hyundai Accent (2012-2017), Veloster (2012-2017); Kia Rio (2012-2017), Soul (2012-2017).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Veloster",
      "Rio",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2012-2017"
          },
          {
            "model": "Veloster",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2012-2017"
          },
          {
            "model": "Soul",
            "years": "2012-2017"
          }
        ]
      }
    ]
  },
  {
    "handle": "39320-3C200",
    "name": "Crankshaft Position Sensor 39320-3C200",
    "oem": "39320-3C200",
    "type": "Sensor CKP / Cigüeñal",
    "price": "$18.66",
    "cost": "$11.31",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Crankshaft Position Sensor (CKP) for Hyundai and Kia vehicles. OEM: 39320-3C200. Compatible with Hyundai Sonata (2006-2014), Santa Fe (2006-2012); Kia Optima (2006-2013), Sorento (2006-2012).",
    "tags": [
      "CKP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2014"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2013"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39318-3C500",
    "name": "Crankshaft Position Sensor 39318-3C500",
    "oem": "39318-3C500",
    "type": "Sensor CKP / Cigüeñal",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Crankshaft Position Sensor (CKP) for Hyundai and Kia vehicles. OEM: 39318-3C500. Compatible with Hyundai Genesis (2008-2014), Equus (2010-2016); Kia Borrego (2008-2012).",
    "tags": [
      "CKP Sensor",
      "Hyundai",
      "Kia",
      "Genesis",
      "Equus",
      "Borrego"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Genesis",
            "years": "2008-2014"
          },
          {
            "model": "Equus",
            "years": "2010-2016"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Borrego",
            "years": "2008-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39318-3C510",
    "name": "Crankshaft Position Sensor 39318-3C510",
    "oem": "39318-3C510",
    "type": "Sensor CKP / Cigüeñal",
    "price": "$14.49",
    "cost": "$8.78",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Crankshaft Position Sensor (CKP) for Hyundai and Kia vehicles. OEM: 39318-3C510. Compatible with Hyundai Genesis (2008-2014), Equus (2010-2016), Veracruz (2007-2012); Kia Borrego (2008-2012).",
    "tags": [
      "CKP Sensor",
      "Hyundai",
      "Kia",
      "Genesis",
      "Equus",
      "Veracruz",
      "Borrego"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Genesis",
            "years": "2008-2014"
          },
          {
            "model": "Equus",
            "years": "2010-2016"
          },
          {
            "model": "Veracruz",
            "years": "2007-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Borrego",
            "years": "2008-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39220-3C010",
    "name": "Water Temperature Sensor 39220-3C010",
    "oem": "39220-3C010",
    "type": "Sensor WTS / Temperatura",
    "price": "$8.05",
    "cost": "$4.88",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Water Temperature Sensor (WTS) for Hyundai and Kia vehicles. OEM: 39220-3C010. Compatible with Hyundai Sonata (2006-2010), Santa Fe (2006-2012), Azera (2006-2011); Kia Optima (2006-2010), Sorento (2006-2009).",
    "tags": [
      "WTS Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Azera",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          },
          {
            "model": "Azera",
            "years": "2006-2011"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Sorento",
            "years": "2006-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "39320-3C300",
    "name": "Crankshaft Position Sensor 39320-3C300",
    "oem": "39320-3C300",
    "type": "Sensor CKP / Cigüeñal",
    "price": "$18.99",
    "cost": "$11.51",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Crankshaft Position Sensor (CKP) for Hyundai and Kia vehicles. OEM: 39320-3C300. Compatible with Hyundai Sonata (2006-2014), Santa Fe (2006-2012); Kia Optima (2006-2013), Sorento (2006-2012).",
    "tags": [
      "CKP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2014"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2013"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39250-2B020",
    "name": "Camshaft Position Sensor 39250-2B020",
    "oem": "39250-2B020",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39250-2B020. Compatible with Hyundai Accent (2012-2017), Veloster (2012-2017); Kia Rio (2012-2017), Soul (2012-2017).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Veloster",
      "Rio",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2012-2017"
          },
          {
            "model": "Veloster",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2012-2017"
          },
          {
            "model": "Soul",
            "years": "2012-2017"
          }
        ]
      }
    ]
  },
  {
    "handle": "39180-2B030",
    "name": "Camshaft Position Sensor 39180-2B030",
    "oem": "39180-2B030",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$10.30",
    "cost": "$6.24",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39180-2B030. Compatible with Hyundai Elantra (2011-2016), Tucson (2010-2015); Kia Forte (2010-2016), Soul (2012-2016).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2011-2016"
          },
          {
            "model": "Tucson",
            "years": "2010-2015"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2010-2016"
          },
          {
            "model": "Soul",
            "years": "2012-2016"
          }
        ]
      }
    ]
  },
  {
    "handle": "39220-38010",
    "name": "Water Temperature Sensor 39220-38010",
    "oem": "39220-38010",
    "type": "Sensor WTS / Temperatura",
    "price": "$9.01",
    "cost": "$5.46",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Water Temperature Sensor (WTS) for Hyundai and Kia vehicles. OEM: 39220-38010. Compatible with Hyundai Accent (1995-2000), Elantra (1996-2000), Lantra (1995-2000); Kia Sephia (1998-2001), Mentor (1998-2001).",
    "tags": [
      "WTS Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Elantra",
      "Lantra",
      "Sephia",
      "Mentor"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "1995-2000"
          },
          {
            "model": "Elantra",
            "years": "1996-2000"
          },
          {
            "model": "Lantra",
            "years": "1995-2000"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Sephia",
            "years": "1998-2001"
          },
          {
            "model": "Mentor",
            "years": "1998-2001"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-25010",
    "name": "Camshaft Position Sensor 39350-25010",
    "oem": "39350-25010",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-25010. Compatible with Hyundai Sonata (2006-2010), Santa Fe (2006-2012); Kia Optima (2006-2010), Sorento (2006-2012).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39180-25300",
    "name": "Camshaft Position Sensor 39180-25300",
    "oem": "39180-25300",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39180-25300. Compatible with Hyundai Elantra (2007-2010), Sonata (2006-2010); Kia Optima (2006-2010), Rondo (2007-2010).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Sonata",
      "Optima",
      "Rondo"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2007-2010"
          },
          {
            "model": "Sonata",
            "years": "2006-2010"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Rondo",
            "years": "2007-2010"
          }
        ]
      }
    ]
  },
  {
    "handle": "46517-39500",
    "name": "Vehicle Speed Sensor 46517-39500",
    "oem": "46517-39500",
    "type": "Sensor VSS / Velocidad",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Vehicle Speed Sensor (VSS) for Hyundai and Kia vehicles. OEM: 46517-39500. Compatible with Hyundai Sonata (1999-2005), XG350 (2002-2005), Santa Fe (2001-2006); Kia Optima (2001-2006).",
    "tags": [
      "VSS Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "XG350",
      "Santa Fe",
      "Optima"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "1999-2005"
          },
          {
            "model": "XG350",
            "years": "2002-2005"
          },
          {
            "model": "Santa Fe",
            "years": "2001-2006"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2001-2006"
          }
        ]
      }
    ]
  },
  {
    "handle": "39250-2E000",
    "name": "Camshaft Position Sensor 39250-2E000",
    "oem": "39250-2E000",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39250-2E000. Compatible with Hyundai Elantra (2011-2016), Tucson (2010-2015); Kia Forte (2010-2016), Soul (2012-2016).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2011-2016"
          },
          {
            "model": "Tucson",
            "years": "2010-2015"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2010-2016"
          },
          {
            "model": "Soul",
            "years": "2012-2016"
          }
        ]
      }
    ]
  },
  {
    "handle": "46510-39800",
    "name": "Vehicle Speed Sensor 46510-39800",
    "oem": "46510-39800",
    "type": "Sensor VSS / Velocidad",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Vehicle Speed Sensor (VSS) for Hyundai and Kia vehicles. OEM: 46510-39800. Compatible with Hyundai Sonata (2006-2010), Azera (2006-2011); Kia Optima (2006-2010), Amanti (2004-2009).",
    "tags": [
      "VSS Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Azera",
      "Optima",
      "Amanti"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2010"
          },
          {
            "model": "Azera",
            "years": "2006-2011"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2010"
          },
          {
            "model": "Amanti",
            "years": "2004-2009"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-2E200",
    "name": "Camshaft Position Sensor 39350-2E200",
    "oem": "39350-2E200",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$14.49",
    "cost": "$8.78",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-2E200. Compatible with Hyundai Elantra (2011-2016), Tucson (2010-2015); Kia Forte (2010-2016), Soul (2012-2016).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2011-2016"
          },
          {
            "model": "Tucson",
            "years": "2010-2015"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2010-2016"
          },
          {
            "model": "Soul",
            "years": "2012-2016"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-3F000",
    "name": "Camshaft Position Sensor 39350-3F000",
    "oem": "39350-3F000",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-3F000. Compatible with Hyundai Sonata (2006-2014), Santa Fe (2006-2012); Kia Optima (2006-2013), Sorento (2006-2012).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2014"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2013"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39250-03A0",
    "name": "Camshaft Position Sensor 39250-03A0",
    "oem": "39250-03A0",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39250-03A0. Compatible with Hyundai Accent (2012-2017), Veloster (2012-2017); Kia Rio (2012-2017), Soul (2012-2017).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Veloster",
      "Rio",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2012-2017"
          },
          {
            "model": "Veloster",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2012-2017"
          },
          {
            "model": "Soul",
            "years": "2012-2017"
          }
        ]
      }
    ]
  },
  {
    "handle": "39180-03A0",
    "name": "Camshaft Position Sensor 39180-03A0",
    "oem": "39180-03A0",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39180-03A0. Compatible with Hyundai Accent (2012-2017), Veloster (2012-2017); Kia Rio (2012-2017), Soul (2012-2017).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Accent",
      "Veloster",
      "Rio",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Accent",
            "years": "2012-2017"
          },
          {
            "model": "Veloster",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Rio",
            "years": "2012-2017"
          },
          {
            "model": "Soul",
            "years": "2012-2017"
          }
        ]
      }
    ]
  },
  {
    "handle": "39250-2M327",
    "name": "Camshaft Position Sensor 39250-2M327",
    "oem": "39250-2M327",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$11.27",
    "cost": "$6.83",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39250-2M327. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39300-2M325",
    "name": "Manifold Absolute Pressure Sensor 39300-2M325",
    "oem": "39300-2M325",
    "type": "Sensor MAP",
    "price": "$17.70",
    "cost": "$10.73",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Manifold Absolute Pressure Sensor (MAP) for Hyundai and Kia vehicles. OEM: 39300-2M325. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "MAP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39180-2M612",
    "name": "Camshaft Position Sensor 39180-2M612",
    "oem": "39180-2M612",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$14.49",
    "cost": "$8.78",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39180-2M612. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39220-2M425",
    "name": "Water Temperature Sensor 39220-2M425",
    "oem": "39220-2M425",
    "type": "Sensor WTS / Temperatura",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Water Temperature Sensor (WTS) for Hyundai and Kia vehicles. OEM: 39220-2M425. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018), Veloster (2012-2017); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "WTS Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Veloster",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          },
          {
            "model": "Veloster",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39220-2M417",
    "name": "Water Temperature Sensor 39220-2M417",
    "oem": "39220-2M417",
    "type": "Sensor WTS / Temperatura",
    "price": "$12.23",
    "cost": "$7.41",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Water Temperature Sensor (WTS) for Hyundai and Kia vehicles. OEM: 39220-2M417. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018), i30 (2012-2017); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "WTS Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "i30",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          },
          {
            "model": "i30",
            "years": "2012-2017"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-2M327",
    "name": "Camshaft Position Sensor 39350-2M327",
    "oem": "39350-2M327",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$15.44",
    "cost": "$9.36",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-2M327. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-2M400",
    "name": "Camshaft Position Sensor 39350-2M400",
    "oem": "39350-2M400",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$15.44",
    "cost": "$9.36",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-2M400. Compatible with Hyundai Elantra (2014-2018), Tucson (2014-2018); Kia Forte (2014-2018), Soul (2014-2018).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Elantra",
      "Tucson",
      "Forte",
      "Soul"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Elantra",
            "years": "2014-2018"
          },
          {
            "model": "Tucson",
            "years": "2014-2018"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Forte",
            "years": "2014-2018"
          },
          {
            "model": "Soul",
            "years": "2014-2018"
          }
        ]
      }
    ]
  },
  {
    "handle": "39350-2G000",
    "name": "Camshaft Position Sensor 39350-2G000",
    "oem": "39350-2G000",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$14.49",
    "cost": "$8.78",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39350-2G000. Compatible with Hyundai Sonata (2006-2014), Santa Fe (2006-2012); Kia Optima (2006-2013), Sorento (2006-2012).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2014"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2013"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  },
  {
    "handle": "39180-2G000",
    "name": "Camshaft Position Sensor 39180-2G000",
    "oem": "39180-2G000",
    "type": "Sensor CMP / Árbol de Levas",
    "price": "$12.56",
    "cost": "$7.61",
    "stock": 50,
    "availability": "Disponible",
    "image": "/sensor-blue.svg",
    "description": "Camshaft Position Sensor (CMP) for Hyundai and Kia vehicles. OEM: 39180-2G000. Compatible with Hyundai Sonata (2006-2014), Santa Fe (2006-2012); Kia Optima (2006-2013), Sorento (2006-2012).",
    "tags": [
      "CMP Sensor",
      "Hyundai",
      "Kia",
      "Sonata",
      "Santa Fe",
      "Optima",
      "Sorento"
    ],
    "brands": [
      "Hyundai",
      "Kia"
    ],
    "compatibility": [
      {
        "brand": "Hyundai",
        "models": [
          {
            "model": "Sonata",
            "years": "2006-2014"
          },
          {
            "model": "Santa Fe",
            "years": "2006-2012"
          }
        ]
      },
      {
        "brand": "Kia",
        "models": [
          {
            "model": "Optima",
            "years": "2006-2013"
          },
          {
            "model": "Sorento",
            "years": "2006-2012"
          }
        ]
      }
    ]
  }
];

export const categories = [
  { name: "Cigüeñal", label: "Sensores CKP", icon: "⚙️" },
  { name: "Árbol de levas", label: "Sensores CMP", icon: "🔧" },
  { name: "MAF", label: "Flujo de aire", icon: "💨" },
  { name: "MAP", label: "Presión absoluta", icon: "📈" },
  { name: "Velocidad", label: "Sensores VSS", icon: "🏁" },
  { name: "TPS", label: "Aceleración", icon: "⚡" },
  { name: "Temperatura", label: "Coolant / WTS", icon: "🌡️" },
  { name: "Hyundai / Kia", label: "Compatibilidad asiática", icon: "🚗" }
];

export const inventorySummary = {
  totalProducts: products.length,
  totalUnits: products.reduce((sum, product) => sum + product.stock, 0),
  availableProducts: products.filter((product) => product.stock > 0).length
};
