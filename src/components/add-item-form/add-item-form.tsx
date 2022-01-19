import React from "react";
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';
import DataService from '../../services/data-service';
import { IItem } from '../../services/data-service';


interface Props {
    _userId: number;
    _submitResult: (res: boolean) => void;
    _submited: boolean;
};

type Inputs = {
    itemName: string,
    cost: number,
};

const AddItemForm = ({ _userId, _submitResult, _submited }: Props) => {
    const { addUserCustomItem } = DataService.getInstance();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        const result = await addUserCustomItem({
            userId: _userId,
            itemName: data.itemName,
            itemCost: data.cost,
        });
        _submitResult(Boolean(result));    
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled ={_submited}>
                <div className="row mb-4   ">
                    <div className="col-6">

                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="form-control" placeholder="Item Name" {...register("itemName", { required: true })} />
                        {errors.itemName && <span className="text-danger">This field is required</span> || !errors.cost && <label className="form-label" >Item name</label>}

                    </div>

                    <div className="col-3">

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className="form-control" placeholder="0.0" {...register("cost", { required: true, min: 0.01 })} />
                        {/* errors will return when field validation fails  */}
                        {errors.cost && <span className="text-danger">Required</span> || !errors.cost && <label className="form-label" >Cost</label>}

                    </div>
                    <div className="col-3 justify-content-end">
                        <button className="btn btn-primary text-secondary" type="submit" >Submit  </button>
                    </div>
                </div>
            </fieldset>
        </form >
    );
}
export default AddItemForm;


// const submitForm = async (data: FormData) => {
//     const result = await addUserCustomItem({
//         userId: userId, 
//         newItemName: string, 
//         itemCost: number

//     });
//     setSuccessfullySubmitted(result ? true : false);
//   };

