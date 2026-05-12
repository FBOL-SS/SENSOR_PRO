export type SensorProduct = {
  handle: string;
  name: string;
  oem: string;
  type: string;
  price: string;
  image: string;
  description: string;
  brands: string[];
  compatibility: {
    brand: string;
    models: {
      model: string;
      years: string;
      engine?: string;
    }[];
  }[];
};

export const products: SensorProduct[] = [
  {
    handle: "28164-23720",
    name: "Sensor MAF 28164-23720",
    oem: "28164-23720",
    type: "Sensor MAF / Flujo de Aire",
    price: "$38.00",
    image: "/sensor-placeholder.svg",
    description: "Sensor de flujo de aire compatible con aplicaciones Hyundai y Kia. Ideal para talleres, refaccionarias y distribuidores.",
    brands: ["Hyundai", "Kia"],
    compatibility: [
      {
        brand: "Hyundai",
        models: [
          { model: "Elantra", years: "2003-2006", engine: "2.0L" },
          { model: "Tiburon", years: "2003-2006", engine: "2.0L" },
          { model: "Tucson", years: "2005-2009", engine: "2.0L" }
        ]
      },
      {
        brand: "Kia",
        models: [
          { model: "Rio", years: "2006-2010", engine: "1.6L" },
          { model: "Spectra", years: "2004-2009", engine: "2.0L" },
          { model: "Spectra5", years: "2005-2009", engine: "2.0L" }
        ]
      }
    ]
  },
  {
    handle: "39350-23910",
    name: "Sensor de Árbol de Levas 39350-23910",
    oem: "39350-23910",
    type: "Sensor CMP / Árbol de Levas",
    price: "$26.00",
    image: "/sensor-placeholder.svg",
    description: "Sensor de posición de árbol de levas para aplicaciones seleccionadas Hyundai y Kia.",
    brands: ["Hyundai", "Kia"],
    compatibility: [
      {
        brand: "Hyundai",
        models: [
          { model: "Accent", years: "2006-2011", engine: "1.6L" },
          { model: "Elantra", years: "2007-2010", engine: "2.0L" }
        ]
      },
      {
        brand: "Kia",
        models: [
          { model: "Rio", years: "2006-2011", engine: "1.6L" },
          { model: "Soul", years: "2010-2011", engine: "2.0L" }
        ]
      }
    ]
  },
  {
    handle: "39180-2B000",
    name: "Sensor de Cigüeñal 39180-2B000",
    oem: "39180-2B000",
    type: "Sensor CKP / Cigüeñal",
    price: "$29.00",
    image: "/sensor-placeholder.svg",
    description: "Sensor de posición de cigüeñal para diagnóstico y reemplazo en motores seleccionados.",
    brands: ["Hyundai", "Kia"],
    compatibility: [
      {
        brand: "Hyundai",
        models: [
          { model: "Accent", years: "2012-2017", engine: "1.6L" },
          { model: "Elantra", years: "2011-2016", engine: "1.8L" }
        ]
      },
      {
        brand: "Kia",
        models: [
          { model: "Rio", years: "2012-2017", engine: "1.6L" },
          { model: "Forte", years: "2014-2016", engine: "1.8L" }
        ]
      }
    ]
  }
];

export const categories = [
  "Sensor de Cigüeñal",
  "Sensor de Árbol de Levas",
  "Sensor ABS",
  "Sensor de Oxígeno",
  "Sensor MAP",
  "Sensor MAF",
  "Sensor TPS",
  "Sensor de Temperatura"
];
