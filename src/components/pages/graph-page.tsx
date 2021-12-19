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

      <section className="section pt-0">
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
                        <div className="col align-self-end" >

                          <button className="btn btn-primary text-success  btn-block" type="button">    Success   </button>
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

      <section className="section  pt-0">
        <div className="container">
          <div className="card bg-primary shadow-soft border-light p-4 ">
            <div className="row">


              <div className="col-md-7">
                <div className="graph-container">
                  <div className="graph" id="graph">
                    rrrrrrrrrrrrrrrrrr


                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col-md-5">
                  <table className="table table-fixed">
                    <thead>
                      <tr>
                        <th className="col-xs-2 text-center">Quantity</th>
                        <th className="col-xs-3 text-center">Selling Price</th>
                        <th className="col-xs-3 text-center">Profit</th>
                        <th className="col-xs-2 text-center">Tax</th>
                        <th className="col-xs-2 text-center">Markup</th>
                      </tr>
                    </thead>
                    <tbody id="tbody"><tr id="row-0">
                      <td className="col-xs-2 text-center">500</td>
                      <td className="col-xs-3 text-center">30</td>
                      <td className="col-xs-3 text-center">3.00</td>
                      <td className="col-xs-2 text-center">0.75</td>
                      <td className="col-xs-2 text-center">120.00</td>
                    </tr>
                      <tr id="row-1">
                        <td className="col-xs-2 text-center">505</td>
                        <td className="col-xs-3 text-center">30</td>
                        <td className="col-xs-3 text-center">2.75</td>
                        <td className="col-xs-2 text-center">0.74</td>
                        <td className="col-xs-2 text-center">118.81</td>
                      </tr>
                      <tr id="row-2">
                        <td className="col-xs-2 text-center">510</td>
                        <td className="col-xs-3 text-center">31</td>
                        <td className="col-xs-3 text-center">3.45</td>
                        <td className="col-xs-2 text-center">0.77</td>
                        <td className="col-xs-2 text-center">121.57</td>
                      </tr>
                      <tr id="row-3">
                        <td className="col-xs-2 text-center">515</td>
                        <td className="col-xs-3 text-center">31</td>
                        <td className="col-xs-3 text-center">3.20</td>
                        <td className="col-xs-2 text-center">0.76</td>
                        <td className="col-xs-2 text-center">120.39</td>
                      </tr>
                      <tr id="row-4">
                        <td className="col-xs-2 text-center">520</td>
                        <td className="col-xs-3 text-center">31</td>
                        <td className="col-xs-3 text-center">2.95</td>
                        <td className="col-xs-2 text-center">0.75</td>
                        <td className="col-xs-2 text-center">119.23</td>
                      </tr>
                      <tr id="row-5">
                        <td className="col-xs-2 text-center">525</td>
                        <td className="col-xs-3 text-center">31</td>
                        <td className="col-xs-3 text-center">2.70</td>
                        <td className="col-xs-2 text-center">0.74</td>
                        <td className="col-xs-2 text-center">118.10</td>
                      </tr>
                      <tr id="row-6">
                        <td className="col-xs-2 text-center">530</td>
                        <td className="col-xs-3 text-center">32</td>
                        <td className="col-xs-3 text-center">3.40</td>
                        <td className="col-xs-2 text-center">0.77</td>
                        <td className="col-xs-2 text-center">120.75</td>
                      </tr>
                      <tr id="row-7">
                        <td className="col-xs-2 text-center">535</td>
                        <td className="col-xs-3 text-center">32</td>
                        <td className="col-xs-3 text-center">3.15</td>
                        <td className="col-xs-2 text-center">0.76</td>
                        <td className="col-xs-2 text-center">119.63</td>
                      </tr>
                      <tr id="row-8">
                        <td className="col-xs-2 text-center">540</td>
                        <td className="col-xs-3 text-center">32</td>
                        <td className="col-xs-3 text-center">2.90</td>
                        <td className="col-xs-2 text-center">0.75</td>
                        <td className="col-xs-2 text-center">118.52</td>
                      </tr>
                      <tr id="row-9">
                        <td className="col-xs-2 text-center">545</td>
                        <td className="col-xs-3 text-center">32</td>
                        <td className="col-xs-3 text-center">2.65</td>
                        <td className="col-xs-2 text-center">0.74</td>
                        <td className="col-xs-2 text-center">117.43</td>
                      </tr>
                    </tbody>
                  </table>
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
