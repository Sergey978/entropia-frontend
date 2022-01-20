
export interface IItem {
    itemId: number;
    itemName: string;
    cost: number, // price for one item PED
    purchasePrice: number, // price in %  
    markup: number, //PED
    beginQuantity: number,
    quantity: number,
    stepQuantity: number,
    selected: boolean; 

};


export interface IUser {
    userId: number,
    userName: string,
    standartItems: IItem[],
    customItems: IItem[]
};

export interface PostUserCustomItem {
    userId: number;
    itemName: string;
    itemCost: number;
}

// Singleton
export default class DataService {
    users: IUser[] = [
        {
            userId: 3,
            userName: "Bob",
            standartItems: [

                {
                    itemId: 1,
                    itemName: "Muscle Oil",
                    cost: 0.03,
                    purchasePrice: 100.7,                    
                    markup: 2,
                    beginQuantity: 200,
                    quantity: 500,
                    stepQuantity: 5,
                    selected: true,
                  
                },
            ],
            customItems:
                [
                    {
                        itemId: 2,
                        itemName: "Pancreas Oil",
                        cost: 0.03,
                        purchasePrice: 100.4,                        
                        markup: 2,
                        beginQuantity: 200,
                        quantity: 500,
                        stepQuantity: 5,
                        selected: true,
                       

                    },


                ]
        },
        {
            userId: 4,
            userName: "Mark",
            standartItems: [

                {
                    itemId: 3,
                    itemName: "Muscle Oil",
                    cost: 0.03,
                    purchasePrice: 100.7,                  
                    markup: 2,
                    beginQuantity: 200,
                    quantity: 500,
                    stepQuantity: 5,
                    selected: true,
                   


                },

            ],
            customItems:
                [
                    {
                        itemId: 4,
                        itemName: "Pancreas Oil",
                        cost: 0.5,
                        purchasePrice: 100.4,                        
                        markup: 2,
                        beginQuantity: 300,
                        quantity: 500,
                        stepQuantity: 5,
                        selected: true,
                     

                    },
                    {
                        itemId: 5,
                        itemName: "Thyroid Oil",
                        cost: 0.3,
                        purchasePrice: 100.4,                        
                        markup: 2,
                        beginQuantity: 400,
                        quantity: 500,
                        stepQuantity: 5,
                        selected: true,
                      
                    },


                ]
        },
        {
            userId: 5,
            userName: "Jane",
            standartItems: [
                {
                    itemId: 6,
                    itemName: "Adrenal Oil",
                    cost: 0.2,
                    purchasePrice: 100.99,                    
                    markup: 2,
                    beginQuantity: 200,
                    quantity: 500,
                    stepQuantity: 5,
                    selected: true,
                  

                },
                {
                    itemId: 7,
                    itemName: "Lysterium ignot",
                    cost: 0.03,
                    purchasePrice: 104.44,                    
                    markup: 2,
                    beginQuantity: 200,
                    quantity: 500,
                    stepQuantity: 5,
                    selected: true,
                  

                },
            ],
            customItems:
                [ ]
        },
    ]

    private static instance: DataService;

    private constructor() { };

    public static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService();
        }

        return DataService.instance;
    }
    wait = async (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    getUserCustomtItems = async (userId: number): Promise<IItem[]> => {
        await this.wait(500);
        //const results = questions.filter((q) => q.questionId === questionId);
        const result = this.users.filter((user) => user.userId === userId)[0];

        const { customItems } = result;
        return customItems;
    };


    getUserStandartItems = async (userId: number): Promise<IItem[]> => {
        await this.wait(500);
        //const results = questions.filter((q) => q.questionId === questionId);
        const result = this.users.filter((user) => user.userId === userId)[0];

        const { standartItems } = result;
        return standartItems;
    };

    deleteCustomItem = async (userId: number, itemId: number): Promise<IItem> => {
        await this.wait(300);
        const user = this.users.filter((user) => user.userId === userId)[0];
        const deletedCustomItem = user.customItems.filter((item) => item.itemId === itemId)[0];
        user.customItems = user.customItems.filter((item) => item.itemId !== itemId);

        return deletedCustomItem;

    }

    hideCustomItem = async (userId: number, itemId: number): Promise<IItem> => {
        await this.wait(300);
        //  objIndex = myArray.findIndex((obj => obj.id == 1));
        const user = this.users.filter((user) => user.userId === userId)[0];
        const customItemIndex = user.customItems.findIndex(item => item.itemId === itemId);
        const currentSelected = user.customItems[customItemIndex].selected;
        user.customItems[customItemIndex].selected = !currentSelected;
        return user.customItems[customItemIndex];
    }


    hideStandartItem = async (userId: number, itemId: number): Promise<IItem> => {
        await this.wait(300);
        //  objIndex = myArray.findIndex((obj => obj.id == 1));
        const user = this.users.filter((user) => user.userId === userId)[0];
        const standartItemIndex = user.standartItems.findIndex(item => item.itemId === itemId);
        const currentSelected = user.standartItems[standartItemIndex].selected;
        user.standartItems[standartItemIndex].selected = !currentSelected;
        return user.customItems[standartItemIndex];
    }



    addUserCustomItem = async (
        customItem: PostUserCustomItem): Promise<IItem | undefined> => {
        await this.wait(500);
        const user = this.users.filter((user) => user.userId === customItem.userId)[0];
        const maxId = Math.max.apply(Math, user.customItems.map(function (item) { return item.itemId; }));
        const newId = maxId + 1;
        const newCustomItem: IItem = {
            itemId: newId,
            itemName: customItem.itemName,
            cost: customItem.itemCost,
            purchasePrice: 100,           
            markup: 2,
            beginQuantity: 200,
            quantity: 500,
            stepQuantity: 5,
            selected: true,
           

        };

        user.customItems.push(newCustomItem);


        return newCustomItem;
    }

    changeUserItem = async( userId: number, changedItem: IItem) => {

        
        const user = this.users.filter((user) => user.userId === userId)[0];
        //find index in standart and custom items
        const standartItemIndex = user.standartItems.findIndex(item => item.itemId === changedItem.itemId);
        const customItemIndex = user.customItems.findIndex(item => item.itemId === changedItem.itemId);

        if(standartItemIndex) {
            user.standartItems[standartItemIndex] = changedItem;
        }
        else if(customItemIndex){
            user.customItems[customItemIndex] = changedItem;
        }

    }



}




    // export const getStandartItems = async (): Promise<IItem[]> => {
    //     await wait(500);
    //     return standartItems;
    // };




    // const standartItems: IItem[] = [
    //     {
    //         itemId: 1,
    //         itemName: "Muscle Oil",
    //         cost: 0.03,
    //         price: 100.7,
    //         selected: true

    //     },
    //     {
    //         itemId: 2,
    //         itemName: "Eye Oil",
    //         cost: 0.05,
    //         price: 100.99,
    //         selected: true
    //     },
    //     {
    //         itemId: 3,
    //         itemName: "Adrenal Oil",
    //         cost: 0.2,
    //         price: 100.99,
    //         selected: true
    //     },
    //     {
    //         itemId: 4,
    //         itemName: "Lysterium ignot",
    //         cost: 0.03,
    //         price: 104.44,
    //         selected: true
    //     },

    // ];


    // const CustomItems: IItem[] = [
    //     {
    //         itemId: 1,
    //         itemName: "Pancreas Oil",
    //         cost: 0.03,
    //         price: 100.4,
    //         selected: true
    //     },

    //     {
    //         itemId: 2,
    //         itemName: "Thyroid Oil",
    //         cost: 0.05,
    //         price: 100.5,
    //         selected: true
    //     },
    //     {
    //         itemId: 3,
    //         itemName: "Iron ingot",
    //         cost: 0.2,
    //         price: 102.82,
    //         selected: true
    //     },
    //     {
    //         itemId: 4,
    //         itemName: "Cumbriz ignot",
    //         cost: 0.03,
    //         price: 102.4,
    //         selected: true
    //     },

    // ];


    //simulation network qury
