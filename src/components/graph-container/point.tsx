import React, { Component } from "react";
import "./graph-container.css";
import { ITableItem } from "../pages/graph-page";



interface Props {
    tableRow: ITableItem,
    chartParams: any   
  }


export const Point = ({ tableRow, chartParams }: Props) => {

    let x = 100 + chartParams.oxn + (tableRow.Markup - 100) * chartParams.kx;
    let y = chartParams.oyn + chartParams.ly - tableRow.Profit * chartParams.ky;
    console.log ("tableRow.Price   ", tableRow.Price, "chartParams.ky", chartParams.ky )

    return (

        <div className="point"
            style={{ 
                left: x ,
                top: y
            
            }} ></div>


    )






}