import React, { Component } from "react";
import "./graph.css";
import { ITableRow } from "../../context/graph-context";



interface Props {
    tableRow: ITableRow,
    chartParams: any
}


export const Point = ({ tableRow, chartParams }: Props) => {

    let x = 100 + chartParams.oxn + (tableRow.Markup - 100) * chartParams.kx;
    let y = chartParams.oyn + chartParams.ly - tableRow.Profit * chartParams.ky;


    return (

        <div            
            id = {"point-" + tableRow.Quantity}
            className="point"
            style={{
                left: x,
                top: y

            }} ></div>


    )


}