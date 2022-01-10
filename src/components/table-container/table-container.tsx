import React from "react";
import "./table-container.css";

const TableContainer = () => (
  

    <table className="table table-bordered table-striped table-wrapper-scroll-y my-custom-scrollbar">
      <thead>
        <tr>
          <th className="col-xs-2 text-center">Quantity</th>
          <th className="col-xs-3 text-center">Sell</th>
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
        <tr id="row-10">
          <td className="col-xs-2 text-center">545</td>
          <td className="col-xs-3 text-center">32</td>
          <td className="col-xs-3 text-center">2.65</td>
          <td className="col-xs-2 text-center">0.74</td>
          <td className="col-xs-2 text-center">117.43</td>
        </tr>
      </tbody>
    </table>
 


)

export default TableContainer;