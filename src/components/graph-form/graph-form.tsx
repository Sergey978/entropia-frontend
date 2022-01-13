import React, { ChangeEvent } from "react";
import { IItem } from "../../services/data-service";
import { useForm, useFormState } from 'react-hook-form';

interface Props {
    data: IItem[],
    selectedItem?: IItem,
    newSelectedItemId: (itemId: number) => void
}

const GraphForm = ({ data, selectedItem, newSelectedItemId }: Props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IItem>();
    //state for selectecting item
    const [selectedOption, setSelectedOption] = React.useState<string>();
    const [state, setState] = React.useState({
        itemCost: selectedItem?.cost,
        purchasePrice: selectedItem?.purchasePrice
    })
    //handle selected item
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (selectedOption) newSelectedItemId(parseInt(selectedOption))
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
            purchasePrice: selectedItem?.purchasePrice
       });
       console.log("activated here")        
      }, [selectedOption]);



    const onSubmit = async (data: IItem) => {


    }


    /* <!-- Section -->   */
    return (
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
                                                <select className="custom-select"
                                                    onChange={selectChange}
                                                >
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
                                                    {...register("cost", { required: true, min: 0.01 })}
                                                    value={state.itemCost}
                                                    onChange={onChange} />


                                            </div>
                                            <div className="col">
                                                <label >Purchase price</label>
                                                <input type="text" className="form-control"
                                                    id="purchasePrice"
                                                    value={state.purchasePrice}
                                                    onChange={onChange} />
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
                                                    value={selectedItem?.markup} />
                                            </div>


                                        </div>

                                        <div className="row form-group">
                                            <div className="col">
                                                <label >Step</label>
                                                <input type="text" className="form-control"
                                                    value={selectedItem?.stepQuantity} />
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
    );
    /* <!-- End of Section -->   */

};

export default GraphForm;