import React from 'react'
import { IItem } from '../../services/data-service'


interface Props {
  data: IItem[];

}


export const ItemList = ({ data }: Props) => (


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
            <td key={item.itemId + "_1"}>{item.itemName}</td>
            <td key={item.itemId + "_2"} >{item.price}</td>
            <td key={item.itemId + "_3"}>
            <span className="btn far fa-lg fa-trash-alt  btn-outline-danger float-right"></span>
              <span className="btn far fa-lg fa-edit btn-outline-success float-right" ></span>
              <span className="btn far fa-lg fa-eye-slash btn-outline-secondary float-right"></span>
              
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>

);


