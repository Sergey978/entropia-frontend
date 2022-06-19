import React from "react";
import { IItem } from "../../services/data-service";
import "./table.css";
import { IPoint,  ITableRow } from '../../context/graph-context';
import { DataContext } from "../../context/graph-context"



const TableComponent = () => {

  const graphContext = React.useContext(DataContext);
  const onClickTableHandle =(evt: React.MouseEvent<HTMLTableRowElement, MouseEvent>)=>{
    evt.preventDefault();
     let rowIndex =parseInt(evt.currentTarget.id); 
     graphContext!.updateTable(rowIndex);
   }


  return (
    <table className="table table-bordered table-striped table-wrapper-scroll-y my-custom-scrollbar table-fixed">
      <thead>
        <tr>
          <th className="col-xs-2 text-center">Quantity</th>
          <th className="col-xs-3 text-center">Sell</th>
          <th className="col-xs-3 text-center">Profit</th>
          <th className="col-xs-2 text-center">Tax</th>
          <th className="col-xs-2 text-center">Markup</th>
        </tr>
      </thead>
      <tbody id="tbody">
        { graphContext?.table.map((row) => (
          <tr key={"row" + row.Quantity} id={"" + row.Quantity} onClick = {onClickTableHandle}
            className={row.IsSelected?"table-success":""}>
            <td className="col-xs-2 text-center">{row.Quantity}</td>
            <td className="col-xs-3 text-center">{row.Price}</td>
            <td className="col-xs-3 text-center">{row.Profit.toFixed(2)}</td>
            <td className="col-xs-2 text-center">{row.Tax.toFixed(2)}</td>
            <td className="col-xs-2 text-center">{row.Markup.toFixed(2)}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
  )
};


export default TableComponent;