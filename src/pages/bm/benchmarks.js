import React, { useState, useEffect } from "react"
import JSONDataReader from "../benchmarks/site/en/reader_performance.json"
import JSONDataRetriever from "../benchmarks/site/en/retriever_performance.json"
import JSONRetrieverMap from "../benchmarks/site/en/retriever_map.json"
import JSONRetrieverSpeed from "../benchmarks/site/en/retriever_speed.json"
import Layout from "../../components/layout/layout";

import { Chart } from "react-google-charts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import "./benchmarking.scss";

const BenchMarks = () => {

    const [showReaderDesc, setShowReaderDesc] = useState(false);
    const [showRetrieverDesc, setShowRetrieverDesc] = useState(false);
    const [showLineChart1Desc, setLineChart1Desc] = useState(false);
    const [showLineChart2Desc, setLineChart2Desc] = useState(false);

    let dataReader = new Array(JSONDataReader.columns);
    for (let i=0; i<JSONDataReader.data.length; i++) {
        dataReader[i+1] = [JSONDataReader.data[i].Model, JSONDataReader.data[i].F1, JSONDataReader.data[i].Speed];
    } 

    let dataRetriever = new Array(JSONDataRetriever.columns);
    for (let i=0; i<JSONDataRetriever.data.length; i++) {
        dataRetriever[i+1] = [JSONDataRetriever.data[i].model, JSONDataRetriever.data[i].recall, JSONDataRetriever.data[i].index_speed, JSONDataRetriever.data[i].query_speed];
    } 

    const n_docs = [1000, 10000, 100000, 500000];

    let dataRetrieverSpeed = new Array(JSONRetrieverSpeed.columns);
    for(let z=0; z<n_docs.length; z++) {
      dataRetrieverSpeed[z+1] = new Array(JSONRetrieverSpeed.columns.length);
      dataRetrieverSpeed[z+1][0] = n_docs[z];
      for(let j=1; j<JSONRetrieverSpeed.columns.length; j++) {
        for (let i=1; i<JSONRetrieverSpeed.data.length; i++) {
          if(JSONRetrieverSpeed.columns[j] === JSONRetrieverSpeed.data[i][0] && n_docs[z] == JSONRetrieverSpeed.data[i][1])
          dataRetrieverSpeed[z+1][j] = JSONRetrieverSpeed.data[i][2];
        }
      }
    }

    let dataRetrieverMap = new Array(JSONRetrieverMap.columns);
    for(let z=0; z<n_docs.length; z++) {
      dataRetrieverMap[z+1] = new Array(JSONRetrieverMap.columns.length);
      dataRetrieverMap[z+1][0] = n_docs[z];
      for(let j=1; j<JSONRetrieverMap.columns.length; j++) {
        for (let i=1; i<JSONRetrieverMap.data.length; i++) {
          if(JSONRetrieverMap.columns[j] === JSONRetrieverMap.data[i][0] && n_docs[z] == JSONRetrieverSpeed.data[i][1])
          dataRetrieverMap[z+1][j] = JSONRetrieverMap.data[i][2];
        }
      }
    }
    

    useEffect(()=>  {
      window.addEventListener("click", () => {
        setShowReaderDesc(false);
        setShowRetrieverDesc(false);
        setLineChart1Desc(false);
        setLineChart2Desc(false);
      })
    })

    return (
        <Layout>
            <section1 className="benchmarking">
            <div className="benchmarking-content">
            <h1>Haystack Benchmarking</h1>
            <button className="h-button" onKeyDown={() => {setShowReaderDesc(!showReaderDesc);}}
                    onClick={(e) => { e.stopPropagation(); setShowReaderDesc(!showReaderDesc);}}>
              <h2>{JSONDataReader.title} {showReaderDesc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showReaderDesc && (
              <div className="desc-details">{JSONDataReader.description}</div>
            )}
            <Chart
                width={1200}
                height={600}
                chartType={JSONDataReader.chart_type}
                loader={<div>Loading Chart</div>}
                data={dataReader}
                options={{
                colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                subTitle: JSONDataReader.subtitle,
                bars: JSONDataReader.bars
                }}
            />

            <button className="h-button" onKeyDown={() => {setShowRetrieverDesc(!showRetrieverDesc);}}
                    onClick={(e) => { e.stopPropagation(); setShowRetrieverDesc(!showRetrieverDesc);}}>
            <h2>{JSONDataRetriever.title} {showRetrieverDesc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showRetrieverDesc && (
              <div className="desc-details">{JSONDataRetriever.description}</div>
            )}
            <Chart
                width={1200}
                height={600}
                chartType={JSONDataReader.chart_type}
                loader={<div>Loading Chart</div>}
                data={dataRetriever}
                options={{
                    subtitle: JSONDataRetriever.subtitle,
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                    bars: JSONDataRetriever.bars, // Required for Material Bar Charts.
                      series: {
                        0: { axis: JSONDataRetriever.series.s0 }, // Bind series 0 to an axis named 'distance'.
                        1: { axis: JSONDataRetriever.series.s1}, // Bind series 1 to an axis named 'brightness'.
                        2: { axis: JSONDataRetriever.series.s2 } // Bind series 1 to an axis named 'brightness'.
                      },
                      axes: {
                        x: {
                          recall: {label: JSONDataRetriever.axes.label}, // Bottom x-axis.
                          time: {side: JSONDataRetriever.axes.time_side, label: JSONDataRetriever.axes.time_label} // Top x-axis.
                        }
                      }
                }}
            />

            <button className="h-button" onKeyDown={() => {setLineChart1Desc(!showLineChart1Desc);}}
                    onClick={(e) => { e.stopPropagation(); setLineChart1Desc(!showLineChart1Desc);}}>
            <h2>{JSONRetrieverMap.title} {showLineChart1Desc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showLineChart1Desc && (
              <div className="desc-details">{JSONRetrieverMap.description}</div>
            )}
            <Chart
                width={1200}
                height={600}
                chartType={JSONRetrieverMap.chart_type}
                loader={<div>Loading Chart</div>}
                data={dataRetrieverMap}
                options={{
                    subtitle: JSONRetrieverMap.subtitle,
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                }}
            />

            <button className="h-button" onKeyDown={() => {setLineChart2Desc(!showLineChart2Desc);}}
                    onClick={(e) => { e.stopPropagation(); setLineChart2Desc(!showLineChart2Desc);}}>
            <h2>{JSONRetrieverSpeed.title} {showLineChart2Desc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showLineChart2Desc && (
              <div className="desc-details">{JSONRetrieverSpeed.description}</div>
            )}
            <Chart
                width={1200}
                height={600}
                chartType={JSONRetrieverSpeed.chart_type}
                loader={<div>Loading Chart</div>}
                data={dataRetrieverSpeed}
                options={{
                    subtitle: JSONRetrieverSpeed.subtitle,
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                }}
            />

            </div>
            </section1>
        </Layout>
  );

};
  

export default BenchMarks