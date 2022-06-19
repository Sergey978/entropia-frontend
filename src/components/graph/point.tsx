import React, { Component } from "react";
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

    const scroll = (id: number) => {
        const section = document.querySelector( ".table-success");
        console.log(section);
       section?.scrollIntoView();
      };

    const onClickPointHandle =(evt: React.MouseEvent<HTMLTableRowElement, MouseEvent>)=>{
        evt.preventDefault();
         let rowIndex =parseInt(evt.currentTarget.id); 
         graphContext!.updateTable(rowIndex);
         scroll(rowIndex);
       }

       



    return (

        <div            
            id = { tableRow.Quantity.toString()}
            onClick = {onClickPointHandle}

            className={tableRow.IsSelected? "point-selected" : "point"}
            style={{
                left: x,
                top: y

            }} ></div>


    )


}