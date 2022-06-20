import React, { useState, useEffect, useRef } from 'react';
import DataService, { IItem } from "../services/data-service";

export type DataContextType = {
  items: IItem[],
  setItems: (items: IItem[]) => void,
  selectedItem: IItem,
  setSelectedItem: (newSelectedItem: IItem) => void,
  table: ITableRow[],
  updateTable: (tableRow: number) => void,
  userItemsLoading: boolean,
  scrollTo: string,
  setScrollTo: (scrolling: string ) => void

}


export interface IPoint {
  x: number,
  y: number
}


export type ITableRow = {
  Quantity: number,
  Price: number,
  Profit: number,
  Tax: number,
  Markup: number,
  IsSelected: boolean
}

interface ChildenProps {
  children?: React.ReactNode;
}

export const DataContext = React.createContext<DataContextType | null>(null);

const GraphDataProvider: React.FC<ChildenProps> = ({ children }) => {
  const temp_userId = 4;
  const [items, setItems] = React.useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<IItem>(
    {
      itemId: 0,
      itemName: "",
      cost: 0, // price for one item PED
      purchasePrice: 0, // price in %  
      markup: 0, //PED
      beginQuantity: 0,
      quantity: 0,
      stepQuantity: 0,
      selected: false,
    });
  const [table, setTable] = React.useState<ITableRow[]>([]);
  const [userItemsLoading, setUserItemsLoading] = useState(true);
  const [scrollTo, setScrollTo]= useState<string>("");
  const { getUserStandartItems, getUserCustomtItems } = DataService.getInstance();

  
  


  useEffect(() => {
    let cancelled = false;
    const doGetItems = async () => {
      if (!cancelled) {
        const items = [...await getUserStandartItems(temp_userId), ...await getUserCustomtItems(temp_userId)]
        setItems(items)
        setSelectedItem(items[0])
        setUserItemsLoading(false);
      }
    };
    doGetItems();
    return () => {
      cancelled = true;
    };
  }, [getUserStandartItems, getUserCustomtItems]);

// function for calculation and populate table
  const calcTable = () => {

    const tableRows: ITableRow[] = [];

    if (selectedItem.beginQuantity !== 0 && selectedItem.quantity !== 0 && selectedItem.stepQuantity !== 0) {
      for (let i = selectedItem.beginQuantity; i <= selectedItem.quantity; i += selectedItem.stepQuantity) {
        let sellingPrice = Math.round((i * selectedItem.cost + selectedItem.markup));
        let markup = sellingPrice - (selectedItem.cost * i);
        let tax = 0.5 + markup * 99.5 / (1990 + markup);
        let profit = sellingPrice - (selectedItem.cost * selectedItem.purchasePrice * i / 100) - tax;

        tableRows.push({
          Quantity: i,
          Price: sellingPrice,
          Profit: profit,
          Tax: tax,
          Markup: (sellingPrice / (i * selectedItem.cost) * 100),
          IsSelected: false
        });
      }
    }
    setTable([...tableRows]);
  }

  useEffect(() => {
    calcTable();
  }, [selectedItem])


  //changing values in user's item
  const updateItem = (changedItem: IItem) => {
    const itemIndex = items.findIndex(item => item.itemId === changedItem.itemId);
    items[itemIndex] = changedItem;
    setItems(items);
  }

  

  //change row status for selected row
  // without spread array table  doesn't work !!!!
  const updateTable = (rowIndex: number) => {   
    table.filter((tableRow: ITableRow) => {
      if (tableRow.Quantity === rowIndex) {       
        tableRow.IsSelected = true;      
      }
      else tableRow.IsSelected = false;
    })
     setTable([...table])    
  }

  return (
    <DataContext.Provider value={{
      items, setItems, selectedItem,
      setSelectedItem, table, updateTable, userItemsLoading,
      scrollTo, setScrollTo, 
      
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default GraphDataProvider;