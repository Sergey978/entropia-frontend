import React from "react";
import { IItem } from "../../services/data-service";
import { ItemList } from "../item-list";
import "./table-container.css";

interface Props {

  selectedItem?: IItem,
}

interface ITableItem {
  Quantity: number,
  Price: number,
  Profit: number,
  Tax: number,
  Markup: number
}

const TableContainer = ({ selectedItem }: Props) => {


  const [table, setTable] = React.useState<ITableItem[]>([]);

  React.useEffect(() => {
    let tableItems: Array<ITableItem> =[];

    const calcTable = () => {
      const maxParams = { y: 0, x: 0 };
      let j = 0;

      for (let i = selectedItem!.beginQuantity; i <= selectedItem!.quantity; i += selectedItem!.stepQuantity) {
        let sellingPrice = Math.round((i * selectedItem!.cost + selectedItem!.markup));
        let markup = sellingPrice - (selectedItem!.cost * i);
        let tax = 0.5 + markup * 99.5 / (1990 + markup);
        let profit = sellingPrice - (selectedItem!.cost * selectedItem!.purchasePrice * i / 100) - tax;
        
        tableItems[j] = {
          Quantity: i,
          Price: sellingPrice,
          Profit: profit,
          Tax: tax,
          Markup: (sellingPrice / (i * selectedItem!.cost) * 100)
        };
        j++;
      }

      setTable(tableItems);

    }

     if(selectedItem !== undefined) {console.log(selectedItem); calcTable()  ; } ;
  });


  return (
    <table className="table table-bordered table-striped table-wrapper-scroll-y my-custom-scrollbar">
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
        {table.map((row) => (
          <tr key={row.Quantity}>
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


export default TableContainer;