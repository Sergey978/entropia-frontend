
export interface IItem {
    itemId: number;
    itemName: string;
    cost: number;
    price: number;
    
};


const StandartItems: IItem[] = [
    {
        itemId: 1,
        itemName: "Muscle Oil",
        cost: 0.03,
        price: 100.7,
       
    },
    {
        itemId: 2,
        itemName: "Eye Oil",
        cost: 0.05,
        price: 100.99
    },
    {
        itemId: 3,
        itemName: "Adrenal Oil",
        cost: 0.2,
        price: 100.99
    },
    {
        itemId: 4,
        itemName: "Lysterium ignot",
        cost: 0.03,
        price: 104.44
    },

];


const CustomItems: IItem[] = [
    {
        itemId: 1,
        itemName: "Pancreas Oil",
        cost: 0.03,
        price: 100.4,
    },
      
    {
        itemId: 2,
        itemName: "Thyroid Oil",
        cost: 0.05,
        price: 100.5
    },
    {
        itemId: 3,
        itemName: "Iron ingot",
        cost: 0.2,
        price: 102.82
    },
    {
        itemId: 4,
        itemName: "Cumbriz ignot",
        cost: 0.03,
        price: 102.4
    },

];


//simulation network qury
const wait = async (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

export const getStandartItems = async (): Promise<IItem[]> => {
    await wait(500);
    return StandartItems;
  };

  
export const getCustomtItems = async (): Promise<IItem[]> => {
    await wait(500);
    return CustomItems;
  };
  
  