import React, { useState } from "react"
import Layout from "../../components/layout/layout";
import { graphql } from "gatsby"
import { useMobileScreen } from "../../hooks";

import { Chart } from "react-google-charts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import "./benchmarking.scss";

import SEO from "../../components/seo"
import thumbnail from "../../images/haystack_logo_blue_banner_social.png"; 

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const BenchMarks = ({data}) => {

  const screenWidth = useMobileScreen();
  let graphWidth = 1200;
  let graphHeight = 600;
  console.log(screenWidth);
  if(screenWidth <= 1000) {
    graphWidth = "100%";
  }

  // Parse versions from path
  const findVersion = (str) => {
    const regx = /versions\/([v\d.]*)/;
    const match = str.match(regx);
    return match
      ? match[1]
        ? match[1]
        : str.includes("latest")
        ? "latest"
        : match[1]
      : "";
  };

  const versions = new Set();
  const n_docs = [1000, 10000, 100000, 500000];

  // Maps in order to connect version with loaded data
  let titleReader = new Map();
  let descReader = new Map();
  let chartTypeReader = new Map();
  let mapDataReader = new Map();
  let subTitelReader = new Map();
  let barsReader = new Map();

  let titleRetriever = new Map();
  let descRetriever = new Map();
  let chartTypeRetriever = new Map();
  let mapDataRetriever = new Map();
  let subTitelRetriever = new Map();
  let barsRetriever = new Map();
  let seriesS0Retriever = new Map();
  let seriesS1Retriever = new Map();
  let seriesS2Retriever = new Map();
  let labelRetriever = new Map();
  let time_sideRetriever = new Map();
  let time_labelRetriever = new Map();

  let titleMap = new Map();
  let descMap = new Map();
  let chartTypeMap = new Map();
  let subTitleMap = new Map();
  let axisXMap = new Map();
  let axisYMap = new Map();
  let mapDataMap = new Map();

  let titleSpeed = new Map();
  let descSpeed = new Map();
  let chartTypeSpeed = new Map();
  let mapDataSpeed = new Map();
  let subTitleSpeed = new Map();
  let axisXSpeed = new Map();
  let axisYSpeed = new Map();

  data.allFile.edges.forEach(({ node }) => {

    const fileAbsolutePath = node.absolutePath;
    const version = findVersion(fileAbsolutePath);

    // released: no -> not show , yes -> show
    // when env is latest ignore released
    if (version !== '') {
      versions.add(version);
    }

    let fileObject = null;
    if(node.childPerformanceJson) {

      fileObject = node.childPerformanceJson;

      if(fileAbsolutePath.includes("reader")) {

        titleReader[version] = fileObject.title;
        descReader[version] = fileObject.description;
        chartTypeReader[version] = fileObject.chart_type;
        let dataReader = new Array(fileObject.columns);
        for (let i=0; i<fileObject.data.length; i++) {
          dataReader[i+1] = [fileObject.data[i].Model, fileObject.data[i].F1, fileObject.data[i].Speed];
        } 
        mapDataReader[version] = dataReader;
        subTitelReader[version] = fileObject.subtitle;
        barsReader[version] = fileObject.bars;

      } else if(fileAbsolutePath.includes("retriever")) {

        titleRetriever[version] = fileObject.title;
        descRetriever[version] = fileObject.description;
        chartTypeRetriever[version] = fileObject.chart_type;
        let dataRetriever = new Array(fileObject.columns);
        for (let i=0; i<fileObject.data.length; i++) {
            dataRetriever[i+1] = [fileObject.data[i].model, fileObject.data[i].map, fileObject.data[i].index_speed, fileObject.data[i].query_speed];
        } 
        mapDataRetriever[version] = dataRetriever;
        subTitelRetriever[version] = fileObject.subtitle;
        barsRetriever[version] = fileObject.bars;
        seriesS0Retriever[version] = fileObject.series.s0;
        seriesS1Retriever[version] = fileObject.series.s1;
        seriesS2Retriever[version] = fileObject.series.s2;
        labelRetriever[version] = fileObject.axes.label;
        time_sideRetriever[version] = fileObject.axes.time_side; 
        time_labelRetriever[version] = fileObject.axes.time_label;

      }
    } else if (node.childMapJson) {
      fileObject = node.childMapJson;
      titleMap[version] = fileObject.title;
      descMap[version] = fileObject.description;
      chartTypeMap[version] = fileObject.chart_type;
      subTitleMap[version] = fileObject.subtitle;
      axisXMap[version] = fileObject.axis[0].x;
      axisYMap[version] = fileObject.axis[0].y;
      let dataRetrieverMap = new Array(fileObject.columns);
      for(let z=0; z<n_docs.length; z++) {
        dataRetrieverMap[z+1] = new Array(fileObject.columns.length);
        dataRetrieverMap[z+1][0] = n_docs[z];
        for(let j=1; j<fileObject.columns.length; j++) {
          for (let i=1; i<fileObject.data.length; i++) {
            if(fileObject.columns[j] === fileObject.data[i].model && n_docs[z] === fileObject.data[i].n_docs)
            dataRetrieverMap[z+1][j] = fileObject.data[i].map;
          }
        }
      }
      mapDataMap[version] = dataRetrieverMap;

    } else if (node.childSpeedJson) {

      fileObject = node.childSpeedJson;
      titleSpeed[version] = fileObject.title;
      descSpeed[version] = fileObject.description;
      chartTypeSpeed[version] = fileObject.chart_type;
      let dataRetrieverSpeed = new Array(fileObject.columns);
      for(let z=0; z<n_docs.length; z++) {
        dataRetrieverSpeed[z+1] = new Array(fileObject.columns.length);
        dataRetrieverSpeed[z+1][0] = n_docs[z];
        for(let j=1; j<fileObject.columns.length; j++) {
          for (let i=1; i<fileObject.data.length; i++) {
            if(fileObject.columns[j] === fileObject.data[i].model && n_docs[z] === fileObject.data[i].n_docs)
            dataRetrieverSpeed[z+1][j] = fileObject.data[i].query_speed;
          }
        }
      }
      mapDataSpeed[version] = dataRetrieverSpeed;
      subTitleSpeed[version] = fileObject.subtitle;
      axisXSpeed[version] = fileObject.axis[0].x;
      axisYSpeed[version] = fileObject.axis[0].y;

    }

  });

    const [showReaderDesc, setShowReaderDesc] = useState(true);
    const [showRetrieverDesc, setShowRetrieverDesc] = useState(true);
    const [showLineChart1Desc, setLineChart1Desc] = useState(true);
    const [showLineChart2Desc, setLineChart2Desc] = useState(true);

    const handleChange = (event) => {
      setSelectedVersion(event.target.value);
    };

    function createMarkup(desc) { return {__html: desc}; };

    const arrayVersions = Array.from(versions);
    const [selectedVersion, setSelectedVersion] = React.useState([arrayVersions[0]]);

    return (
        <Layout>
            <SEO title="Haystack Benchmarks" image={thumbnail} pathname="/bm/benchmarks" />
            <section1 className="benchmarking">
            <div className="benchmarking-content">
            <h1>
              Haystack Benchmarking - Version: 
              <FormControl variant="outlined" className="version-formcontrol" >
              <Select
                labelId="simple-select-outlined-label"
                id="simple-select-outlined"
                value={selectedVersion}
                onChange={handleChange}
                input={<Input />}
              >
                {arrayVersions.map((version) => (
                  <MenuItem key={version} value={version} className="menuitem-formcontrol" >
                    {version}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </h1>
            <div>
            </div>
            <button className="h-button" onKeyDown={() => {setShowReaderDesc(!showReaderDesc);}}
                    onMouseDown={(e) => { e.stopPropagation(); setShowReaderDesc(!showReaderDesc);}}>
              <h2>{titleReader[selectedVersion]} {showReaderDesc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showReaderDesc && (
              <div dangerouslySetInnerHTML={createMarkup(descReader[selectedVersion])} className="desc-details"></div>
            )}
            <Chart
                width={graphWidth}
                height={graphHeight}
                chartType={chartTypeReader[selectedVersion]}
                loader={<div>Loading Chart</div>}
                data={mapDataReader[selectedVersion]}
                options={{
                colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                subTitle: subTitelReader[selectedVersion],
                bars: barsReader[selectedVersion],
                legend: "bottom"
                }}
            />

            <button className="h-button" onKeyDown={() => {setShowRetrieverDesc(!showRetrieverDesc);}}
                    onMouseDown={(e) => { e.stopPropagation(); setShowRetrieverDesc(!showRetrieverDesc);}}>
            <h2>{titleRetriever[selectedVersion]} {showRetrieverDesc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showRetrieverDesc && (
              <div dangerouslySetInnerHTML={createMarkup(descRetriever[selectedVersion])} className="desc-details"></div>
            )}
            <Chart
                width={graphWidth}
                height={graphHeight}
                chartType={chartTypeRetriever[selectedVersion]}
                loader={<div>Loading Chart</div>}
                data={mapDataRetriever[selectedVersion]}
                options={{
                    subtitle: subTitelRetriever[selectedVersion],
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                    bars: barsRetriever[selectedVersion], // Required for Material Bar Charts.
                      series: {
                        0: { axis: seriesS0Retriever[selectedVersion] }, // Bind series 0 to an axis named 'distance'.
                        1: { axis: seriesS1Retriever[selectedVersion] }, // Bind series 1 to an axis named 'brightness'.
                        2: { axis: seriesS2Retriever[selectedVersion] } // Bind series 1 to an axis named 'brightness'.
                      },
                      axes: {
                        x: {
                          map: {label: labelRetriever[selectedVersion]}, // Bottom x-axis.
                          time: {side: time_sideRetriever[selectedVersion], label: time_labelRetriever[selectedVersion]} // Top x-axis.
                        }
                      },
                      legend: "bottom"
                }}
            />

            <button className="h-button" onKeyDown={() => {setLineChart1Desc(!showLineChart1Desc);}}
                    onMouseDown={(e) => { e.stopPropagation(); setLineChart1Desc(!showLineChart1Desc);}}>
            <h2>{titleMap[selectedVersion]} {showLineChart1Desc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showLineChart1Desc && (
              <div dangerouslySetInnerHTML={createMarkup(descMap[selectedVersion])} className="desc-details"></div>
            )}
            <Chart
                width={graphWidth}
                height={graphHeight}
                chartType={chartTypeMap[selectedVersion]}
                loader={<div>Loading Chart</div>}
                data={mapDataMap[selectedVersion]}
                options={{
                    subtitle: subTitleMap[selectedVersion],
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                    hAxis: {
                      title: axisXMap[selectedVersion]
                    },
                    vAxis: {
                      title: axisYMap[selectedVersion]
                    },
                    pointSize: 5,
                    legend: "bottom"
                }}
            />

            <button className="h-button" onKeyDown={() => {setLineChart2Desc(!showLineChart2Desc);}}
                    onMouseDown={(e) => { e.stopPropagation(); setLineChart2Desc(!showLineChart2Desc);}}>
            <h2>{titleSpeed[selectedVersion]} {showLineChart2Desc ? (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/>) : (<FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>)}</h2>
            </button>
            {showLineChart2Desc && (
              <div dangerouslySetInnerHTML={createMarkup(descSpeed[selectedVersion])} className="desc-details"></div>
            )}
            <Chart
                width={graphWidth}
                height={graphHeight}
                chartType={chartTypeSpeed[selectedVersion]}
                loader={<div>Loading Chart</div>}
                data={mapDataSpeed[selectedVersion]}
                options={{
                    subtitle: subTitleSpeed[selectedVersion],
                    colors: ['#22BA99', '#63C7CA', '#49B0E4', '#FBB14B'],
                    hAxis: {
                      title: axisXSpeed[selectedVersion]
                    },
                    vAxis: {
                      title: axisYSpeed[selectedVersion]
                    },
                    pointSize: 5,
                    legend: "bottom"
                }}
            />

            </div>
            </section1>
        </Layout>
  );

};

export const query = graphql`
  query BenchmarkQuery {
    allFile(filter: {absolutePath: {regex: "/(?:benchmarks)/"}}) {
      edges {
        node {
          absolutePath
          childMapJson {
            axis {
              y
              x
            }
            chart_type
            columns
            data {
              map
              n_docs
              model
            }
            description
            id
            title
            subtitle
          }
          childSpeedJson {
            axis {
              x
              y
            }
            chart_type
            columns
            data {
              model
              n_docs
              query_speed
            }
            description
            subtitle
            title
          }
          childPerformanceJson {
            axes {
              label
              time_label
              time_side
            }
            bars
            chart_type
            columns
            data {
              F1
              Model
              index_speed
              Speed
              model
              n_docs
              query_speed
              map
            }
            description
            series {
              s0
              s1
              s2
            }
            subtitle
            title
          }
        }
      }
    }
  }
  `
  

export default BenchMarks