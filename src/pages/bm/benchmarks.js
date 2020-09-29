import React from "react"
import JSONDataReader from "../benchmarks/site/en/reader_performance.json"
import JSONDataRetriever from "../benchmarks/site/en/retriever_performance.json"
import Layout from "../../components/layout/layout";

import { Chart } from "react-google-charts";

import "./benchmarking.scss";

const BenchMarks = () => {

    let dataReader = new Array(JSONDataReader.columns);
    for (let i=0; i<JSONDataReader.data.length; i++) {
        dataReader[i+1] = [JSONDataReader.data[i].model, JSONDataReader.data[i].accuracy, JSONDataReader.data[i].time];
    } 

    let dataRetriever = new Array(JSONDataRetriever.columns);
    for (let i=0; i<JSONDataRetriever.data.length; i++) {
        dataRetriever[i+1] = [JSONDataRetriever.data[i].model, JSONDataRetriever.data[i].recall, JSONDataRetriever.data[i].index_time, JSONDataRetriever.data[i].query_time];
    } 

    return (
        <Layout>
            <section1 className="benchmarking">
            <div>
            <h1>Haystack Benchmarking</h1>
            <h2>{JSONDataReader.title}</h2>
            <Chart
                width={1000}
                height={600}
                chartType={JSONDataReader.chart_type}
                loader={<div>Loading Chart</div>}
                data={dataReader}
                options={{
                subTitle: JSONDataReader.subtitle,
                bars: JSONDataReader.bars
                }}
            />
            <h2>{JSONDataRetriever.title}</h2>
            <Chart
                width={1000}
                height={600}
                chartType={JSONDataReader.chart_type}
                loader={<div>Loading Chart</div>}
                data={dataRetriever}
                options={{
                    subtitle: JSONDataRetriever.subtitle,
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
            </div>
            </section1>
        </Layout>
  );

};
  

export default BenchMarks