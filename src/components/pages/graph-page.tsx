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
        setUserItems([...await getUserCustomtItems(userId), ...await getUserStandartItems(userId)]
          .filter((item) => item.selected === true));
        setUserItemsLoading(false);
        if (userItems.length > 0) { setSelectedItem(userItems[0]) }
      }
    };
    doGetUserItems();
    return () => {
      cancelled = true;
    };
  },[userItems]);


  //toDo Need to render item's property in form after each selected item and submit form



  useEffect(() => {
    let cancelled = false;
    setUserItemsLoading(true);
    const doSetUserItem = async () => {
      setSelectedItem(userItems[0])
      if (!cancelled) {
        setUserItemsLoading(false);
      };
    }
    doSetUserItem();
    return () => {
      cancelled = true;
    };
  }, [selectedItem]);



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
          (<GraphForm data={userItems} selectedItem = {selectedItem} />)
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
                < TableContainer />
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
