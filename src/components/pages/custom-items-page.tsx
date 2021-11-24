import React from "react";
import { Page } from "../page/page";
import DataService, { IItem } from "../../services/data-service";
import { ItemList } from "../item-list";
import AddItemForm from "../add-item-form";





const CustomItemsPage = () => {


    //for test later change hardcoded 
    const userId = 4;

    const { getUserCustomtItems } = DataService.getInstance();
    const [customItems, setCustomItems] = React.useState<IItem[]>([]);
    const [itemsLoading, setItemsLoading] = React.useState(true);
    const [successfullySubmitted, setSuccessfullySubmitted] = React.useState(
        false,
    );



    React.useEffect(() => {
        let cancelled = false;
        const doGetCustomItems = async () => {
            const customItems = await getUserCustomtItems(userId);
            if (!cancelled) {
                setCustomItems(customItems);
                setItemsLoading(false);
            }
        };
        doGetCustomItems();
        return () => {
            cancelled = true;
        };
    }, [getUserCustomtItems, userId]);

    // todo send _submitResult function to form
    const submitResult = (result: boolean) => {
        setSuccessfullySubmitted(result ? true : false);
    }

    const alertCloseclick = () => {
        setSuccessfullySubmitted(false);
    }

    const onDeleteCustomItem = (id: number) => {

        console.log("delete----id---------");
        console.log(id);

    }

    const onHideItem = (id: number) => {

        console.log("hide----id---------");
        console.log(id);

    }



    return (
        <Page>

            {/*<!-- Hero --> */}
            <div className="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
                <div className="container z-2">
                    <div className="row mb-4 justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">

                            <h1 className="display-3 mb-4">Custom Items</h1>

                            <div className="row justify-content-center">

                                <div className="col-lg-10">
                                    <div className="mb-6">
                                        <ItemList data={customItems}
                                            onDelete={onDeleteCustomItem}
                                            onHide={onHideItem} />
                                            
                                        {successfullySubmitted && (
                                            <div className="alert alert-success alert-dismissible shadow-soft fade show" role="alert">
                                                <span className="alert-inner--icon"><span className="far fa-thumbs-up"></span></span>
                                                <span className="alert-inner--text"><strong>Well done!</strong> Your item was successful added.</span>
                                                <button type="button" className="close" data-dismiss="alert" onClick={alertCloseclick}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                        )}
                                        <AddItemForm _userId={userId} _submitResult={submitResult} _submited={successfullySubmitted} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- End of Hero -->   */}

        </Page>
    );
};
export default CustomItemsPage;
