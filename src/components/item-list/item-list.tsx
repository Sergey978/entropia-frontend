import React, { MouseEventHandler } from 'react'
import { IItem } from '../../services/data-service';
import "./item-list.css"



interface Props {
  data: IItem[];
  onDelete?: (itemId: number) => void;
  onHide: (itemId: number) => void;
  _deleted?: boolean;

}


export const ItemList = ({ data, onDelete, onHide, _deleted }: Props) => (

  <table className="table table-hover shadow-inset rounded">
    <tbody>
      <tr>
        <th className="border-0" scope="col" >Name</th>
        <th className="border-0" scope="col" >Cost</th>
        <th className="border-0" scope="col" ></th>
      </tr>

      {
        data.map((item) => (
          <tr key={item.itemId}>
            <td key={item.itemId + "_1"} className={!item.selected ? "selected" : ""}>{item.itemName}</td>
            <td key={item.itemId + "_2"} >{item.cost}</td>
            <td key={item.itemId + "_3"} className="items-button">
              {onDelete && <button className="btn btn-sm  btn-outline-danger float-right"
                disabled={_deleted}
                onClick={() => { onDelete(item.itemId) }}>
                <i className="far fa-lg fa-trash-alt"></i>
              </button>
              }
              <button className="btn btn-sm  btn-outline-secondary float-right"
                onClick={() => { onHide(item.itemId) }}>
                <i className="far fa-lg fa-eye-slash"></i>
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>

);


