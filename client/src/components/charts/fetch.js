import React, { Component } from 'react';
import './fetch.css';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';
import axios from 'axios';
class fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    }
  }
  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }
  componentDidMount(){
    const getData = () => {
      const url_data = window.location.pathname;
      const coin_id=url_data.substring(5,url_data.length);
      console.log("coin_id",coin_id);   
      axios.get(`/api/${coin_id}`)
        .then((response) => {        
          var posts = response.data;
          console.log('Data has been received for chart!!',posts);
         // this.setState({ posts: response.data });
          //console.log('Data has been received for chart!!',posts);
          const sortedData = [];
          let count = 0;             
          for (var i = 0; i < 1; i++){
          //console.log("posts",posts[i]);
          for(var j=0;j<response.data.chart_timestamps.length;j++){
            var utcSeconds = response.data.chart_timestamps[j];
            var d = new Date(0);
            d.setUTCSeconds(utcSeconds);
            d=d.toDateString();
            var y=response.data.chart_closes[j];
            //console.log("y",y);
            var getPrice=y.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' });      
            sortedData.push({
            d: d,
            p: getPrice,
            x: count, //previous days
            y: y // numerical price
            });
            count++;
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          })
         console.log("data",this.state.data);
      }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();
}
 render() {
    return (

      <div className='container'>
        <div className="Main">
          <h4>Detail of coin</h4>
       <div id="quote-header">
           <div className="position">
                <div id="graph">
                    <div id="graph-area">
                      <div className='row'>
          <h1>30 Day Price Chart</h1>
        </div>
        <div className='row'>
          { !this.state.fetchingData ?
          <InfoBox data={this.state.data} />
          : null }
        </div>
        <div className='row'>
          <div className='popup'>
            {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
          </div>
        </div>
        <div className='row'>
          <div className='chart'>
            { !this.state.fetchingData ?
              <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
              : null }
          </div>
        </div>        
      </div>
                <canvas id="canvas"></canvas>
                    </div>
                </div>
           </div>
           <div id="quote-summary">
            <div className="left-summary-table">
            <table className="table">
            <tbody>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Previous Close</span>
                    </td>
                    <td className="table-data-value">
            <span></span>  {/* previous close value */}
                    </td>
                </tr>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Open</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Start Date</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Open</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
            <div className="right-summary-table">
            <table className="table">
            <tbody>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Previous Close</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Open</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Start Date</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
                <tr className="table-data-row">
                    <td className="table-data">
                    <span>Open</span>
                    </td>
                    <td className="table-data-value">
                      <span></span>  {/* previous close value */}
                    </td>
                </tr>
            </tbody>
            </table>
            </div>            
           </div>
       </div>
      </div>       

    );
  }
}

export default fetch;
