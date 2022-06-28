import React, { Component, useEffect } from "react";
import "./graph.css";
import { ITableRow } from "../../context/graph-context";
import { DataContext } from "../../context/graph-context"



interface Props {
    tableRow: ITableRow,
    chartParams: any
}


export const Point = ({ tableRow, chartParams }: Props) => {

    const graphContext = React.useContext(DataContext);

    let x = 100 + chartParams.oxn + (tableRow.Markup - 100) * chartParams.kx;
    let y = chartParams.oyn + chartParams.ly - tableRow.Profit * chartParams.ky;

    

    const onClickPointHandle =(evt: React.MouseEvent<HTMLTableRowElement, MouseEvent>)=>{
        evt.preventDefault();
         let rowIndex =parseInt(evt.currentTarget.id); 
         graphContext?.setScrollTo("table");
         graphContext!.updateTable(rowIndex);
         
       }

   


    return (

        <div            
            id = { tableRow.Quantity.toString()}
            onClick = {onClickPointHandle}
            data-toggle="tooltip" data-placement="top" title={
                "Markup " + tableRow.Markup.toFixed(2)+ "; " +  
                "Quantity "+ tableRow.Quantity  + "; " +
                "Profit " + tableRow.Profit.toFixed(2)}

            className={tableRow.IsSelected? "point-selected" : "point"}
            style={{
                left: x,
                top: y

            }} ></div>


    )


}