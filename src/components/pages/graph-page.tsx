import React from "react";
import { Page } from "../page/page";
import GraphContainer from "../graph-container";
import GraphForm from "../graph-form";
import TableContainer from "../table-container";
import DataService, { IItem } from "../../services/data-service";




const GraphPage = () => {


  //for test later change hardcoded 
  const userId = 4;

  const { getUserCustomtItems, getUserStandartItems } = DataService.getInstance();
  const [userItemsLoading, setUserItemsLoading] = React.useState(true);
  const [userItems, setUserItems] = React.useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<IItem>();


  React.useEffect(() => {
    let cancelled = false;
    const doGetUserItems = async () => {
      if (!cancelled) {
        setUserItems([...await getUserCustomtItems(userId), ...await getUserStandartItems(userId)]
        .filter((item) => item.selected !== true));
        setUserItemsLoading(false);
      }
    };
    doGetUserItems();
    return () => {
      cancelled = true;
    };
  });

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
      <GraphForm  data = {userItems}/>
      {/* <!-- Section Example -->   */}

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

      {/* <!-- End of Section -->   */}


    </Page>
  );
};
export default GraphPage;
