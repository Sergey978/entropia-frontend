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



      {/* <!-- Section -->   */}

      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="row">
                  <div className=" col-lg-6 px-md-0 mb-4 mb-lg-0">
                    <div className=" px-3">
                      <div className="row form-group" >
                        <div className="col">
                          <label >Item</label>
                          <select className="custom-select" >
                            <option selected>Choose...</option>
                            <option value="1">United States</option>
                            <option value="2">Germany</option>
                            <option value="3">Canada</option>
                          </select>
                        </div>
                      </div>


                      <div className="row form-group">
                        <div className="col">
                          <label >Item cost</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col">
                          <label >Purchase price</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className=" col-lg-6 px-md-0 mb-4 mb-lg-0">
                    <div className=" px-3">
                      <div className="row form-group">
                        <div className="col">
                          <label >Begin quantity</label>
                          <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col">
                          <label >Markup</label>
                          <input type="text" className="form-control" placeholder="" />
                        </div>


                      </div>

                      <div className="row form-group">
                        <div className="col">
                          <label >Step</label>
                          <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col">
                          <label >Item</label>
                          <input type="text" className="form-control" placeholder="" />
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End of Section -->   */}









      {/* <!-- Section Example -->   */}

      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="row">
                  <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                    <div className="card-body text-center bg-primary py-5">
                      <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
                        <span className="far fa-eye"></span>
                      </div>

                      <h2 className="h4 mr-2">
                        Audience
                      </h2>

                      <p className="mb-0">At Themesberg, we use human, brand, and cultural insights to unlock strategic business opportunities for clients.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                    <div className="card-body text-center bg-primary py-5">
                      <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
                        <span className="fas fa-medal"></span>
                      </div>

                      <h2 className="h4 mr-2">
                        Branding
                      </h2>

                      <p className="mb-0">Despite being cautioned not to judge a book by its cover, we all do it every day. We making your site looks better.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 px-md-0">
                    <div className="card-body text-center bg-primary py-5">
                      <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
                        <span className="fas fa-puzzle-piece"></span>
                      </div>

                      <h2 className="h4 mr-2">
                        Production
                      </h2>

                      <p className="mb-0">Today, truly creative sells. Get innovative ideas and polished finish pieces from our creative agency.</p>
                    </div>
                  </div>
                </div>
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
