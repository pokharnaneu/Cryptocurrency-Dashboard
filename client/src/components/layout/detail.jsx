import React from 'react';

import './detail.css';

class detail extends React.Component {  
    constructor(props) {
        super(props);
}
  render() {   
    return (
      <div className="Main">
          <h4>Detail of coin</h4>
       <div id="quote-header">
           <div className="position">
                <div id="graph">
                    <div id="graph-area">
                        {/* graph here */}
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

export default detail;