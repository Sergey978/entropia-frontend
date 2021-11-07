import React from "react";
import { Page } from "../page/page";

const CustomItemsPage = () => {
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
    </Page>
  );
};
export default CustomItemsPage;
