
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const PageTitle = ({ children }: Props) => (

  // <!-- Hero -->
  <div className="section section-header pb-7">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 text-center">
          <h1 className="display-2 mb-4">{children}</h1>
        </div>
      </div>
    </div>
  </div>
  //  <!-- End of Hero section -->


);
export default PageTitle;