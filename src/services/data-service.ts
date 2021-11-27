
export interface IItem {
    itemId: number;
    itemName: string;
    cost: number;
    price: number;
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
                    price: 100.7,
                    selected: true

                },
            ],
            customItems:
                [
                    {
                        itemId: 1,
                        itemName: "Pancreas Oil",
                        cost: 0.03,
                        price: 100.4,
                        selected: true
                    },


                ]
        },
        {
            userId: 4,
            userName: "Mark",
            standartItems: [

                {
                    itemId: 1,
                    itemName: "Muscle Oil",
                    cost: 0.03,
                    price: 100.7,
                    selected: true

                },
                {
                    itemId: 2,
                    itemName: "Eye Oil",
                    cost: 0.05,
                    price: 100.99,
                    selected: true
                },
            ],
            customItems:
                [
                    {
                        itemId: 2,
                        itemName: "Pancreas Oil",
                        cost: 0.03,
                        price: 100.4,
                        selected: true
                    },
                    {
                        itemId: 3,
                        itemName: "Pancreas Oil",
                        cost: 0.03,
                        price: 100.4,
                        selected: true
                    },

                    {
                        itemId: 4,
                        itemName: "Thyroid Oil",
                        cost: 0.05,
                        price: 100.5,
                        selected: true
                    },
                    {
                        itemId: 5,
                        itemName: "Iron ingot",
                        cost: 0.2,
                        price: 102.82,
                        selected: true
                    },


                ]
        },
        {
            userId: 5,
            userName: "Jane",
            standartItems: [
                {
                    itemId: 3,
                    itemName: "Adrenal Oil",
                    cost: 0.2,
                    price: 100.99,
                    selected: true
                },
                {
                    itemId: 4,
                    itemName: "Lysterium ignot",
                    cost: 0.03,
                    price: 104.44,
                    selected: true
                },
            ],
            customItems:
                [

                ]
        },

        {
            userId: 6,
            userName: "Peter",
            standartItems: [

            ],
            customItems:
                [

                    {
                        itemId: 2,
                        itemName: "Pancreas Oil",
                        cost: 0.03,
                        price: 100.4,
                        selected: true
                    },
                    {
                        itemId: 3,
                        itemName: "Pancreas Oil",
                        cost: 0.03,
                        price: 100.4,
                        selected: true
                    },

                    {
                        itemId: 4,
                        itemName: "Thyroid Oil",
                        cost: 0.05,
                        price: 100.5,
                        selected: true
                    },
                    {
                        itemId: 5,
                        itemName: "Iron ingot",
                        cost: 0.2,
                        price: 102.82,
                        selected: true
                    },

                ]
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

    deleteCustomItem = async(userId: number, itemId: number): Promise<IItem> => {
        await this.wait(300);
        const user = this.users.filter((user) => user.userId === userId)[0];
        const deletedCustomItem = user.customItems.filter((item) => item.itemId === itemId)[0];
        user.customItems = user.customItems.filter((item) => item.itemId !== itemId);
        
        return deletedCustomItem;

    }

    hideCustomItem = async (userId: number, itemId: number) =>{
        await this.wait(300);
      //  objIndex = myArray.findIndex((obj => obj.id == 1));
        const user = this.users.filter((user) => user.userId === userId)[0];
        const customItemIndex = user.customItems.findIndex(item => item.itemId == itemId);
        const currentSelected = user.customItems[customItemIndex].selected;
        user.customItems[customItemIndex].selected = !currentSelected;
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
            price: 100,
            selected: true
        };

        user.customItems.push(newCustomItem);

       
        return newCustomItem;
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
