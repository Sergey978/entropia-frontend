import React from "react";
import { Page } from "../page/page";
import { getUserCustomtItems, IItem } from "../../services/data-service";
import { ItemList } from "../item-list";

const CustomItemsPage = () => {


    //for test later change hardcoded 
    const userId = 4;



    const [customItems, setCustomItems] = React.useState<IItem[]>([]);
    const [itemsLoading, setItemsLoading] = React.useState(true);

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
    }, []);


    return (
        <Page>

            {/*<!-- Hero --> */}
            <div className="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
                <div className="container z-2">
                    <div className="row mb-4 justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            <h1 className="display-3 mb-4">Custom Items</h1>

                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="mb-6">
                                        <ItemList data={customItems} />
                                        {/*v<!-- Form -->*/}
                                        <form>

                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {/*<!-- End of Form -->*/}
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
