import React, { Component } from 'react'
import Bar from './Bar.js'

export default class ProgressBar extends Component {
    
      render() {
        const { porceINSS, porceIRPR, porceSalario } = this.props;
    
        return (
          <div>
              <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
              }}
              >
              <Bar value={porceINSS} color="#e67e22" />
              <Bar value={porceIRPR} color="#c0392b" />
              <Bar value={porceSalario} color="#16a085" />
            </div>
            <br/>
          </div>
        );
      }
}
