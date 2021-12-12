import React from "react";
import { Page } from "../page/page";

const GraphPage = () => {
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


      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-primary shadow-soft border-light p-4">

                <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                  <div className="card-body  bg-primary py-5">


                    <div className="form-row">
                      <div className="form-group col-6 ">
                        <label className="my-1 mr-2" htmlFor="itemCost">Item cost</label>
                        <input className="form-control" id="itemCost" />
                      </div>
                      <div className="form-group col">
                        <label className="my-1 mr-2" htmlFor="price">Price</label>
                        <input className="form-control" id="price" />
                      </div>
                    </div>




                  </div>
                </div>




                <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                  <div className="card-body  bg-primary py-5">


                    <div className="form-row">
                      <div className="form-group col-6 ">
                        <label className="my-1 mr-2" htmlFor="itemCost">Item cost</label>
                        <input className="form-control" id="itemCost" />
                      </div>
                      <div className="form-group col">
                        <label className="my-1 mr-2" htmlFor="price">Price</label>
                        <input className="form-control" id="price" />
                      </div>
                    </div>




                  </div>
                </div>



                <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                  <div className="card-body  bg-primary py-5">
                  </div>
                </div>









              </div>
            </div>
          </div>
        </div>
      </section>



    </Page>
  );
};
export default GraphPage;
