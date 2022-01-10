import React from "react";
import { IItem } from "../../services/data-service";

interface Props {
    data: IItem[],
    selectedItem?: IItem
}

const GraphForm = ({ data, selectedItem }: Props) => (

    /* <!-- Section -->   */

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
                                                {
                                                    data.map((item) => (
                                                        <option key={item.itemId} 
                                                        value={item.itemId}>{item.itemName}</option>
                                                    ))
                                                }


                                            </select>
                                        </div>
                                    </div>


                                    <div className="row form-group">
                                        <div className="col">
                                            <label >Item cost</label>
                                            <input type="text" className="form-control" 
                                            value ={selectedItem?.cost}/>
                                        </div>
                                        <div className="col">
                                            <label >Purchase price</label>
                                            <input type="text" className="form-control"
                                            value ={selectedItem?.purchasePrice} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className=" col-lg-6 px-md-0 mb-4 mb-lg-0">
                                <div className=" px-3">
                                    <div className="row form-group">
                                        <div className="col">
                                            <label >Begin quantity</label>
                                            <input type="text" className="form-control"
                                               
                                                value={selectedItem?.beginQuantity} />
                                        </div>
                                        <div className="col">
                                            <label >Markup</label>
                                            <input type="text" className="form-control"  
                                            value ={selectedItem?.markup}/>
                                        </div>


                                    </div>

                                    <div className="row form-group">
                                        <div className="col">
                                            <label >Step</label>
                                            <input type="text" className="form-control" 
                                            value ={selectedItem?.stepQuantity} />
                                        </div>
                                        <div className="col align-self-end" >

                                            <button className="btn btn-primary text-success  btn-block" type="button">    Submit   </button>
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

    /* <!-- End of Section -->   */

);

export default GraphForm;