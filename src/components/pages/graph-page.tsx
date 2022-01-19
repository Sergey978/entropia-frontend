import React, { useState, useEffect } from "react";
import { Page } from "../page/page";
import GraphContainer from "../graph-container";
import GraphForm from "../graph-form";
import TableContainer from "../table-container";
import DataService, { IItem } from "../../services/data-service";
import { GraphFormLoading } from "../graph-form/graph-form-loading";




const GraphPage = () => {


  //for test later change hardcoded 
  const userId = 4;

  const { getUserCustomtItems, getUserStandartItems } = DataService.getInstance();
  const [userItemsLoading, setUserItemsLoading] = useState(true);
  const [userItems, setUserItems] = useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<IItem>();


  useEffect(() => {
    let cancelled = false;
    const doGetUserItems = async () => {
      if (!cancelled) {
        const items = [...await getUserCustomtItems(userId), ...await getUserStandartItems(userId)]
        setUserItems(items.filter((item) => item.selected === true));
        if (items.length > 0) { setSelectedItem(items[0]) }
        setUserItemsLoading(false);
      }

    };
    doGetUserItems();   
    return () => {
      cancelled = true;      
    };
  }, []);


  //toDo Need to render item's property in form after each selected item and submit form


  const itemReselected = (id: number) => {
    const index = userItems.map((item) => item.itemId).indexOf(id);
    setSelectedItem(userItems[index]);
  }



  return (

    <Page>
      {/*<!-- Hero -->*/}
      <div className="section section-header pb-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="display-2 mb-4">Graph Page</h1>

            </div>
          </div>
        </div>
      </div>
      {/*<!-- End of Hero section -->*/}
      {
        userItemsLoading ? (<GraphFormLoading />) :
          (<GraphForm data={userItems} selectedItem={selectedItem} newSelectedItemId={itemReselected} />)
      }

      {/* <!-- Section of Graph and table -->   */}

      <section className="section  pt-0">
        <div className="container">
          <div className="card bg-primary shadow-soft border-light p-4 ">
            <div className="row">

              <div className="col-md-7">
                <GraphContainer />
              </div>

              <div className="col-md-5">
                < TableContainer  selectedItem={selectedItem} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <!-- End of Section  Graph and table -->   */}


    </Page>
  );
};
export default GraphPage;
