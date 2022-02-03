import React, { Component } from "react";
import "./graph-container.css";
import "./grid"
import Grid from "./grid";
import { ITableItem } from "../pages/graph-page";
import { Point } from "./point";

//chart drawing parameters
const chartParams = {
    ky: 1000, // Y axis scaling factor
    kx: 50, // X scaling factor , number pixels per one %

    oyn: 20, // Y chart offse from 0
    oxn: 50, //X chart offset from 0

    ly: 1900, // length of axis Y
    lx: 1900, // length of axis X

    stepX: 5, //step of grid X %
    stepY: 0.1 //step of grid Y  ped
};


interface Props {

    table: ITableItem[],

}


const GraphContainer = ({ table }: Props) => (

    // <!-- GraphConainer -->
    <div className="graph-container">
        <div className="graph" id="graph">


            <div className="horizontal-axis"
                style={{
                    width: chartParams.lx,
                    left: chartParams.oxn,
                    top: chartParams.oyn + chartParams.ly
                }}
            ></div>

            <div className="vertical-axis"
                style={{
                    height: chartParams.ly,
                    left: chartParams.oxn,
                    top: chartParams.oyn
                }}
            ></div>

            <Grid  {...chartParams} />

            {table.map((row) => (
              
              <Point tableRow = {row}  chartParams = {chartParams}   />

            ))
            }

        </div>
    </div>
    //  <!-- GraphConainer -->


);
export default GraphContainer;