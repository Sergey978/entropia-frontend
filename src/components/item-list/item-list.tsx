import React from 'react'
import { IItem } from '../../services/data-service'


interface Props {
  data: IItem[];

}

  
export const ItemList = ({ data }: Props) => (

  <ul>
  
      {
        data.map((item) => (
          <li key={item.itemId}   >
            {item.itemName}:"   "{item.price}
          </li>

        ))
     

    }

  </ul>

);


