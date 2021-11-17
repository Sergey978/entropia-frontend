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
                            <p className="lead">Pixel makes use of the <strong>"Nunito Sans"</strong> Google Web Font for beatiful and readable typography.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            <div className="alert shadow-inset">
                                <div className="d-flex">
                                    <div className="alert-inner--text">
                                        <span className="icon text-danger icon-xs mr-2 mr-md-1"><span className="fas fa-file-alt"></span></span>
                                        <a target="_blank" href="https://themesberg.com/docs/neumorphism-ui/foundation/typography/">See our Documentation</a> for a detailed technical explanation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End of Hero -->   */}

 {/* <!-- ToDo make table from this list -->   */}

 <ItemList data={customItems} /> 




            <div className="section bg-primary text-dark section-lg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mb-5">


                                <table className="table table-hover shadow-inset rounded">
                                    <tbody>
                                        <tr>
                                            <th className="border-0" scope="col" id="class2">Name</th>
                                            <th className="border-0" scope="col" id="teacher2">Cost</th>
                                            <th className="border-0" scope="col" id="males2"></th>

                                        </tr>
                                        <tr>
                                            <td scope="row" id="firstyear2">First Year</td>
                                            <td scope="row" id="Bolter2" headers="firstyear2">D. Bolter</td>
                                            <td headers="firstyear2 Bolter2 males2">5</td>

                                        </tr>
                                        <tr>

                                            <td headers="firstyear2 Cheetham2 males2">7</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                        </tr>
                                        <tr>

                                            <td headers="firstyear2 Cheetham2 males2">7</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                        </tr>
                                        <tr>

                                            <td headers="firstyear2 Cheetham2 males2">7</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                        </tr>
                                        <tr>

                                            <td headers="firstyear2 Cheetham2 males2">7</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                        </tr>
                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Page>
    );
};
export default CustomItemsPage;
