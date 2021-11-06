import React from "react";
import { Page } from "../page/page";

const CustomItemsPage = () => {
  return (
    <Page>
      {/*<!-- Hero -->*/}
      <div className="section section-header pb-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="display-2 mb-4">Custom Item Page</h1>
              <p className="lead mb-5"></p>
              <a className="btn btn-primary" href="./contact.html">
                <span className="fas fa-book-reader mr-2"></span>Our works
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End of Hero section -->*/}
    </Page>
  );
};
export default CustomItemsPage;
