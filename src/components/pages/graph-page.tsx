import React from "react";
import { Page } from "../page/page";
import { GraphFormLoading } from "../graph-form/graph-form-loading";
import GraphDataProvider, { DataContext } from "../../context/graph-context"
import GraphForm from "../../components/graph-form"
import TableComponent from "../../components/table/"


const GraphPage = () => {

  const graphContext = React.useContext(DataContext);

  return (
<GraphDataProvider>
    <Page>
      {/*<!-- Hero -->*/}
      <div className="section section-header pb-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-1 col-lg-8 text-center">
              <h1 className="display-2 mb-4">Graph Page</h1>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End of Hero section -->*/}

      
        {

          graphContext?.userItemsLoading ? (<GraphFormLoading />) :
            (<GraphForm />)
        }
      

      {/* <!-- Section of Graph and table -->   */}

      <section className="section  pt-0">
        <div className="container">
          <div className="card bg-primary shadow-soft border-light p-4 ">
            <div className="row">
              <div className="col-md-7" >

              </div>
              <div className="col-md-5">
                
                 {<TableComponent />  } 
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <!-- End of Section  Graph and table -->   */}


    </Page>
    </GraphDataProvider>
  );
};
export default GraphPage;