import React, { ChangeEvent } from "react";
import { IItem } from "../../services/data-service";
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { DataContext } from "../../context/graph-context"
import { GraphFormLoading } from "./graph-form-loading"



type Inputs = {
    cost: number,
    purchasePrice: number,
    beginQuantity: number,
    markup: number,
    quantity: number,
    stepQuantity: number,

};

const GraphForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const graphContext = React.useContext(DataContext);

    //state for selectecting item

    const [state, setState] = React.useState<IItem>({
        itemId: 0,
        itemName: "",
        cost: 0, // price for one item PED
        purchasePrice: 0, // price in %  
        markup: 0, //PED
        beginQuantity: 0,
        quantity: 0,
        stepQuantity: 0,
        selected: true

    })

    //handle changed selected item
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const index = graphContext!.items.findIndex(object => {
            return object.itemId === parseInt(value);
        });
        graphContext!.setSelectedItem(graphContext!.items[index]);
    };

    React.useEffect(() => {

        if (graphContext!.selectedItem) {
            setState(
                graphContext!.selectedItem
            );
        }
    }, [graphContext!.selectedItem]);


// handle react state fields
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {

        const value = evt.currentTarget.value;
        let convertedValue = Number(value);        

        if (convertedValue) {
            setState({
                ...state,
                [evt.currentTarget.id]: convertedValue
            });
        } else {
            setState({
                ...state,
                [evt.currentTarget.id]: value

            })
        }
    }




    // submit form
    const onSubmit = (data: Inputs) => {

        console.log(state.itemId);

        const itemIndex = graphContext!.items.findIndex(item => item.itemId === state.itemId);
        graphContext!.items[itemIndex!] = state;
        graphContext!.setItems(graphContext!.items);
        graphContext!.setSelectedItem(state);

    }


    /* <!-- Section -->   */
    if (graphContext!.userItemsLoading) {
        return (<GraphFormLoading />)
    }
    else
        return (
            <section className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-primary shadow-soft border-light p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className=" col-lg-6 px-md-0 mb-4 mb-lg-0">
                                            <div className=" px-3">
                                                <div className="row form-group" >
                                                    <div className="col">
                                                        <label >Item</label>
                                                        <select className="custom-select"
                                                            onChange={selectChange} >
                                                            {
                                                                graphContext?.items.map((item) => (
                                                                    <option key={item.itemId}
                                                                        value={item.itemId}>{item.itemName}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row form-group">
                                                    <div className="col">
                                                        <label className={errors.cost && "text-danger font-weight-bold"}>Item cost</label>
                                                        <input className="form-control"
                                                            id="cost" type="number" step="0.01"
                                                            {...register("cost", { required: true, min: 0.01 })}
                                                            value={state.cost}
                                                            onChange={onChange} />

                                                    </div>
                                                    <div className="col">
                                                        <label className={errors.purchasePrice && "text-danger font-weight-bold"}>Purchase price</label>
                                                        <input className="form-control"
                                                            id="purchasePrice" type="number" step="0.01"
                                                            {...register("purchasePrice", { required: true, min: 10.0, })}
                                                            value={state.purchasePrice}
                                                            onChange={onChange} />
                                                    </div>
                                                </div>
                                                {Object.keys(errors).length !== 0 && <span className="text-danger">These field must be correct</span>}

                                            </div>

                                        </div>

                                        <div className=" col-lg-6 px-md-0 mb-4 mb-lg-0">
                                            <div className=" px-3">
                                                <div className="row form-group">
                                                    <div className="col">
                                                        <label className={errors.beginQuantity && "text-danger font-weight-bold"}>Begin quantity</label>
                                                        <input type="number" className="form-control"
                                                            id="beginQuantity" 
                                                            {...register("beginQuantity", { required: true, min: 1, })}
                                                            onChange={onChange}
                                                            value={state.beginQuantity} />
                                                    </div>

                                                    <div className="col">
                                                        <label className={errors.quantity && "text-danger font-weight-bold"}>Quantity</label>
                                                        <input className="form-control"
                                                            id="quantity" type="number"
                                                            {...register("quantity", { validate:{                                                                
                                                                    required: (value) => {
                                                                      if (value <= state.beginQuantity )
                                                                      return "Should be more than Begin Quantity";
                                                                        
                                                                      return true;
                                                                    }
                                                                  



                                                            },  required: true, min: 1, valueAsNumber: true, })}
                                                            onChange={onChange}
                                                            value={state.quantity} />
                                                    </div>

                                                    <div className="col">
                                                        <label className={errors.stepQuantity && "text-danger font-weight-bold"} >Step</label>
                                                        <input className="form-control"
                                                            id="stepQuantity" type="number"
                                                            {...register("stepQuantity", { required: true, min: 1, valueAsNumber: true, })}
                                                            onChange={onChange}
                                                            value={state.stepQuantity} />

                                                    </div>

                                                </div>

                                                <div className="row form-group">
                                                    <div className="col">
                                                        <label className={errors.markup && "text-danger font-weight-bold"}>Markup</label>
                                                        <input className="form-control"
                                                            id="markup" type="number"
                                                            {...register("markup", { required: true, min: 1, valueAsNumber: true, })}
                                                            onChange={onChange}
                                                            value={state.markup} />
                                                    </div>

                                                    <div className="col align-self-end" >
                                                        <button className="btn btn-primary text-success  btn-block" type="submit"> Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    /* <!-- End of Section -->   */

};

export default GraphForm;