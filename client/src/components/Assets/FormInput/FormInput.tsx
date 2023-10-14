import React from 'react';
import {FormInputI} from '@/interface/FormInterface';
import IconSVG from "@/components/Assets/IconSVG";
import {stateFormProps} from "@/components/Assets/Form/Form";
import SvgList from "@/helpers/SvgList";
import style from './FormInput.module.sass';

type InputProps = {
    inputData:FormInputI,
    handleSetFormState: (name: string,value: string)=>void
    stateForm: stateFormProps
}

const FormInput:React.FC<InputProps> = (
    {
        inputData,
        handleSetFormState,
        stateForm
    }
) => {
    const { icon, placeholder, name, requred, type  } = inputData;
    const handleChangeInput = (e:React.FormEvent<HTMLInputElement> ) => {
        const {name, value} = e.target;
        handleSetFormState(name, value);
    }
    return (
        <label className={style.label}>
            <div className={style.labelIcon}>
                <IconSVG height={24} width={24} imageId={SvgList[icon]}/>
            </div>
            <input
                className={style.labelInput}
                type={type}
                placeholder={placeholder}
                name={name}
                required={requred}
                onChange={handleChangeInput}
                value={stateForm[name]}
            />
        </label>
    );
};

export default FormInput;
