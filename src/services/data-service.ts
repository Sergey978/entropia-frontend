
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

const users: IUser[] = [
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
const wait = async (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// export const getStandartItems = async (): Promise<IItem[]> => {
//     await wait(500);
//     return standartItems;
// };


export const getUserCustomtItems = async (userId: number): Promise<IItem[]> => {
    await wait(500);
    //const results = questions.filter((q) => q.questionId === questionId);
    const result = users.filter((user) => user.userId === userId )[0];
    const {customItems } = result;  
    return customItems;
};

