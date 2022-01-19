import React, { ChangeEvent } from "react";
import DataService, { IItem } from "../../services/data-service";
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

interface Props {
    data: IItem[],
    selectedItem?: IItem,
    newSelectedItemId: (itemId: number) => void
}

type Inputs = {
    itemCost: number,
    purchasePrice: number,
    beginQuantity: number,
    markup: number,
    stepQuantity: number,

};

const GraphForm = ({ data, selectedItem, newSelectedItemId }: Props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const dataService = DataService.getInstance();
    //state for selectecting item
    const [selectedOption, setSelectedOption] = React.useState<string>();
    const [state, setState] = React.useState({

        itemCost: selectedItem?.cost,
        purchasePrice: selectedItem?.purchasePrice,
        beginQuantity: selectedItem?.beginQuantity,
        markup: selectedItem?.markup,
        stepQuantity: selectedItem?.stepQuantity,

    })
    //handle selected item
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value) { newSelectedItemId(parseInt(value)) }
    };

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {

        const value = evt.currentTarget.value;
        setState({
            ...state,
            [evt.currentTarget.id]: value
        });
    }


    React.useEffect(() => {
        setState({
            itemCost: selectedItem?.cost,
            purchasePrice: selectedItem?.purchasePrice,
            beginQuantity: selectedItem?.beginQuantity,
            markup: selectedItem?.markup,
            stepQuantity: selectedItem?.stepQuantity,
        });
    }, [selectedOption]);



    const onSubmit = async (data: Inputs) => {

        
        dataService.changeUserItem({
            itemId: selectedItem?.itemId!,
            itemName: selectedItem?.itemName!,
            cost: data.itemCost,
            purchasePrice: data.purchasePrice,
            sellPrice: 0,
            markup: data.markup,
            beginQuantity: data.beginQuantity,
            quantity: 100,
            stepQuantity: data.stepQuantity,
            selected: true
        });


    }


    /* <!-- Section -->   */
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
                                                        onChange={selectChange}    >
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
                                                    <input className="form-control"
                                                        id="itemCost"
                                                        {...register("itemCost", { required: true, min: 0.01, pattern: /^\d*\.?\d*$/ })}
                                                        value={state.itemCost}
                                                        onChange={onChange} />
                                                    {errors.itemCost && <span className="text-danger">This field must be number</span>}

                                                </div>
                                                <div className="col">
                                                    <label >Purchase price</label>
                                                    <input type="text" className="form-control"
                                                        id="purchasePrice"
                                                        {...register("purchasePrice", { required: true, min: 10, pattern: /^\d*\.?\d*$/ })}
                                                        value={state.purchasePrice}
                                                        onChange={onChange} />
                                                    {errors.purchasePrice && <span className="text-danger">This field must be number</span>}
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
                                                        id="beginQuantity"
                                                        {...register("beginQuantity", { required: true, min: 1, pattern: /^\d*\.?\d*$/ })}
                                                        onChange={onChange}
                                                        value={state.beginQuantity} />
                                                    {errors.beginQuantity && <span className="text-danger">This field must be number</span>}
                                                </div>
                                                <div className="col">
                                                    <label >Markup</label>
                                                    <input type="text" className="form-control"
                                                        id="markup"
                                                        {...register("markup", { required: true, min: 0, pattern: /^\d*\.?\d*$/ })}
                                                        onChange={onChange}
                                                        value={state.markup} />
                                                    {errors.markup && <span className="text-danger">This field must be number</span>}
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col">
                                                    <label >Step</label>
                                                    <input type="text" className="form-control"
                                                        id="stepQuantity"
                                                        {...register("stepQuantity", { required: true, min: 0, pattern: /^\d*\.?\d*$/ })}
                                                        onChange={onChange}
                                                        value={state.stepQuantity} />
                                                    {errors.stepQuantity && <span className="text-danger">This field must be number</span>}
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