import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import { join } from "path";
import fs from "fs";
import { Chart } from "react-google-charts";
import {
    getLatestVersion,
    getDocsVersions,
    getSlugsFromLocalBenchmarksFiles,
    getDirectoryBenchmarks,
    getVersionFromParams
  } from "lib/utils";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";


export default function LatestBenchmark({
  map,
  retriever_performance,
  reader_performance,
  retriever_speed
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(map)
  return (
    <div>
        <Head>
            <title>Haystack Benchmarks</title>
            <meta name="description" content="Haystack Benchmarks" />
            <link rel="icon" href="/images/HaystackIcon.png" />
        </Head>
        <Header />
        <Chart
                width={1200}
                height={600}
                chartType={reader_performance.chartType}
                loader={<div>Loading Chart</div>}
                data={reader_performance.dataReader}
                options={{
                colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                subTitle: reader_performance.subTitle,
                bars: reader_performance.bars,
                legend: "bottom",
                displayAnnotations: true,
                annotations: {
                  textStyle: {
                  // The color of the text.
                      color: '#000000',
                      fontSize: 15
                  },
              },
                }}
            />
        <Chart
                width={1200}
                height={600}
                chartType={retriever_performance.chartType}
                loader={<div>Loading Chart</div>}
                data={retriever_performance.dataRetriever}
                options={{
                    subtitle: retriever_performance.subTitle,
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                    bars: retriever_performance.bars, // Required for Material Bar Charts.
                      series: {
                        0: { axis: retriever_performance.seriesS0 }, // Bind series 0 to an axis named 'distance'.
                        1: { axis: retriever_performance.seriesS1 }, // Bind series 1 to an axis named 'brightness'.
                        2: { axis: retriever_performance.seriesS2 } // Bind series 1 to an axis named 'brightness'.
                      },
                      axes: {
                        x: {
                          map: {label: retriever_performance.label}, // Bottom x-axis.
                          time: {side: retriever_performance.time_side, label: retriever_performance.time_label} // Top x-axis.
                        }
                      },
                      legend: "bottom"
                }}
            />
        <Chart
                width={1200}
                height={600}
                chartType={map.chartType}
                loader={<div>Loading Chart</div>}
                data={map.dataRetriever}
                options={{
                    subtitle: map.subTitle,
                    colors: ['#22BA99', '#FBB14B', '#63C7CA', '#49B0E4'],
                    hAxis: {
                      title: map.axisX
                    },
                    vAxis: {
                      title: map.axisY
                    },
                    pointSize: 5,
                    legend: "bottom"
                }}
            />
        <Chart
                width={1200}
                height={600}
                chartType={retriever_speed.chartType}
                loader={<div>Loading Chart</div>}
                data={retriever_speed.dataRetrieverSpeed}
                options={{
                    subtitle: retriever_speed.subTitle,
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                    hAxis: {
                      title: retriever_speed.axisX
                    },
                    vAxis: {
                      title: retriever_speed.axisY
                    },
                    pointSize: 5,
                    legend: "bottom"
                }}
            />
        <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  // we want to get all versions, apart from the latest one
  let paths: any = [];
  const latestVersion = getLatestVersion();
  paths = [...paths, {params: { slug: [latestVersion] }}];
  const versions = getDocsVersions().filter((v) => v !== latestVersion);
  for (const version of versions) {
    paths = [
      ...paths,
      {
        params: { slug: [version] },
      }
    ];
  }
  
  return {
    paths: paths.flat(),
    fallback: false,
  };

};

type Props = {
  map: {
    title: string,
    desc: string,
    chartType: any,
    subTitle: string,
    axisX: string,
    axisY: string,
    dataRetriever: any[]
  },
  retriever_performance: {
    title: string,
    desc: string,
    chartType: any,
    dataRetriever: any[],
    subTitle: string,
    bars: string,
    seriesS0: string,
    seriesS1: string,
    seriesS2: string,
    label: string,
    time_side: string,
    time_label: string
  },
  reader_performance: {
    title: string,
    desc: string,
    chartType: any,
    dataReader: any[],
    subTitle: string,
    bars: string
  },
  retriever_speed: {
    title: string,
    desc: string,
    chartType: any,
    dataRetrieverSpeed: any[],
    subTitle: string,
    axisX: string,
    axisY: string
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  let map: any;
  let retriever_performance: any;
  let reader_performance: any;
  let retriever_speed: any;

  try {
    // Map folder
    let directory = getDirectoryBenchmarks(
      "map",
      getVersionFromParams(params.slug)
    );
    let filenames = [];
    let fileContent = null;
    if (!fs.existsSync(directory)) return [];
      filenames = fs.readdirSync(directory);
    
    for (const filename of filenames) {
      const fullPath = join(directory, filename);
      if (!fs.existsSync(directory) || !fs.existsSync(fullPath)) {
        return {
          notFound: true,
        };
      }
      fileContent = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      map = getRetrieverMapData(fileContent);
    }

    //Performance folder
    directory = getDirectoryBenchmarks(
      "performance",
      getVersionFromParams(params.slug)
    );
    if (!fs.existsSync(directory)) return [];
      filenames = fs.readdirSync(directory);
      
    for (const filename of filenames) {
      const fullPath = join(directory, filename);
      if (!fs.existsSync(directory) || !fs.existsSync(fullPath)) {
        return {
          notFound: true,
        };
      }
      fileContent = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      if(filename === "reader_performance.json") {
        reader_performance = getReaderPerformanceData(fileContent);
      } else if (filename === "retriever_performance.json") {
        retriever_performance = getRetrieverPerformanceData(fileContent);
      }
    }

    //Speed folder
    directory = getDirectoryBenchmarks(
      "speed",
      getVersionFromParams(params.slug)
    );
    if (!fs.existsSync(directory)) return [];
      filenames = fs.readdirSync(directory);
      
    for (const filename of filenames) {
      const fullPath = join(directory, filename);
      if (!fs.existsSync(directory) || !fs.existsSync(fullPath)) {
        return {
          notFound: true,
        };
      }
      fileContent = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      retriever_speed = getRetrieverSpeedData(fileContent);
    }
    return {
      props: {
        map,
        retriever_performance,
        reader_performance,
        retriever_speed
      }
    }

  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};

export function getRetrieverMapData(
  fileContent: any
) {
  const n_docs = [1000, 10000, 100000, 500000];
  const title: string = fileContent.title;
  const desc: string = fileContent.description;
  const chartType: any = fileContent.chart_type;
  const subTitle: string = fileContent.subtitle;
  const axisX: string = fileContent.axis[0].x;
  const axisY: string = fileContent.axis[0].y;
  const dataRetriever = new Array(fileContent.columns);
  for(let z=0; z<n_docs.length; z++) {
    dataRetriever[z+1] = new Array(fileContent.columns.length);
    dataRetriever[z+1][0] = n_docs[z];
    for(let j=1; j<fileContent.columns.length; j++) {
      for (let i=1; i<fileContent.data.length; i++) {
        if(fileContent.columns[j] === fileContent.data[i].model && n_docs[z] === fileContent.data[i].n_docs)
          dataRetriever[z+1][j] = fileContent.data[i].map;
      }
    }
  }
  return {
    title: title,
    desc: desc,
    chartType: chartType,
    subTitle: subTitle,
    axisX: axisX,
    axisY: axisY,
    dataRetriever: dataRetriever
  }
}

export function getRetrieverPerformanceData(
  fileContent: any
) {
  const title = fileContent.title;
  const desc = fileContent.description;
  const chartType = fileContent.chart_type;
  let dataRetriever = new Array(fileContent.columns);
  for (let i=0; i<fileContent.data.length; i++) {
    dataRetriever[i+1] = [fileContent.data[i].model, fileContent.data[i].map, fileContent.data[i].index_speed, fileContent.data[i].query_speed];
  } 
  const subTitle = fileContent.subtitle;
  const bars= fileContent.bars;
  const seriesS0= fileContent.series.s0;
  const seriesS1 = fileContent.series.s1;
  const seriesS2 = fileContent.series.s2;
  const label = fileContent.axes.label;
  const time_side = fileContent.axes.time_side; 
  const time_label = fileContent.axes.time_label;
  return {
    title: title,
    desc: desc,
    chartType: chartType,
    dataRetriever: dataRetriever,
    subTitle: subTitle,
    bars: bars,
    seriesS0: seriesS0,
    seriesS1: seriesS1,
    seriesS2: seriesS2,
    label: label,
    time_side: time_side,
    time_label: time_label
  }
}

export function getReaderPerformanceData(
  fileContent: any
) {
  const title = fileContent.title;
  const desc = fileContent.description;
  const chartType = fileContent.chart_type;
  let dataReader = new Array(fileContent.columns);
  for (let i=0; i<fileContent.data.length; i++) {
    dataReader[i+1] = [fileContent.data[i].Model, fileContent.data[i].F1, fileContent.data[i].Speed];
  } 
  const subTitle = fileContent.subtitle;
  const bars = fileContent.bars;
  return {
    title: title,
    desc: desc,
    chartType: chartType,
    dataReader: dataReader,
    subTitle: subTitle,
    bars: bars
  }
}

export function getRetrieverSpeedData(
  fileContent: any
) {
  const n_docs = [1000, 10000, 100000, 500000];
  const title= fileContent.title;
  const desc = fileContent.description;
  const chartType = fileContent.chart_type;
  let dataRetrieverSpeed = new Array(fileContent.columns);
  for(let z=0; z<n_docs.length; z++) {
    dataRetrieverSpeed[z+1] = new Array(fileContent.columns.length);
    dataRetrieverSpeed[z+1][0] = n_docs[z];
    for(let j=1; j<fileContent.columns.length; j++) {
      dataRetrieverSpeed[z+1][j] = 0;
      for (let i=1; i<fileContent.data.length; i++) {
        if(fileContent.columns[j] === fileContent.data[i].model && n_docs[z] === fileContent.data[i].n_docs)
          dataRetrieverSpeed[z+1][j] = fileContent.data[i].query_speed;
      }
    }
  }
  const subTitle = fileContent.subtitle;
  const axisX = fileContent.axis[0].x;
  const axisY = fileContent.axis[0].y;  
  return {
    title: title,
    desc: desc,
    chartType: chartType,
    dataRetrieverSpeed: dataRetrieverSpeed,
    subTitle: subTitle,
    axisX: axisX,
    axisY: axisY
  }
}