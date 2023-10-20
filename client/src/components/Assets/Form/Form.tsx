import React, {useState} from 'react';
import {FormI, FormInputI, TypeForm} from "@/interface/FormInterface";
import IconSVG from "@/components/Assets/IconSVG";
import SvgList from "@/helpers/SvgList";
import style from './Form.module.sass';
import {formattedPhoneNumber} from "@/helpers/helpFunction";
import FormInput from "@/components/Assets/FormInput/FormInput";
import {useRouter} from "next/router";

export type stateFormProps = {
    name: string;
    telephone: string;
    time: string;
}

const Messages = {
    OrderForm: "Новый заказ на технику",
    ServiceForm: "Заказ на ремонт",
    TradeInForm: "Закаказ на TradeIn"
}

const formItem: FormInputI[] = [
    {
        icon: "man",
        placeholder: "Ваше имя",
        name: "name",
        requred: true,
        type: "text"
    },
    {
        icon: "telephone",
        placeholder: "+7 (___) ___-__-__",
        name: "telephone",
        requred: true,
        type: "text"
    },
    {
        icon: "clock",
        placeholder: "Время звонка, например 15:00",
        name: "time",
        requred: false,
        type: "text"
    }
]

const Form:React.FC<FormI> = (
    {
        title,
        subTitle,
        desc,
        type,
        data,
        handleSetForm
    }
) => {
    const [stateForm, setStateForm] = useState<stateFormProps>({
        name: '',
        telephone: '',
        time: ''
    })

    const router = useRouter();
    const clearPrice = data?.price?data.price.replace(/\D/g, ''):null;
    const price = () => {
        if(clearPrice){
            return new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
            }).format(clearPrice).replace(/(,00)/g, '')
        }else {
            return ''
        }
    }

    const handleSetFormState = (name:string, value: string) => {
        if(name==="telephone"){
            const telMask = formattedPhoneNumber(value);
            setStateForm((prevState)=>({...prevState, telephone:telMask }));
            return
        }
        setStateForm((prevState)=>({...prevState, [name]:value}));
    }

    const sendBot = async (msg) => {
        handleSetForm('status', true)
        handleSetForm('load', true)
        const msgJSON = JSON.stringify(msg);
        try {
            await fetch(`https://api.telegram.org/bot${process.env.BOT_API_TOKEN}/sendMessage?chat_id=${process.env.REQUEST_MESSAGE_CHAT_ID}&parse_mode=markdown&text=${msgJSON}`)
                .then(resp => resp.json())
                .then(r => {
                    if(r.ok){
                        handleSetForm('load', false)
                        handleSetForm('msg', 'Ваша заявка принята!\n Свяжемся с Вами в ближайшее время!')
                    }
                })
        }catch (err){
            handleSetForm('load', false)
            handleSetForm('msg', 'Упс :( что то пошл не так!')
        }

    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        let message = ''
        switch (type){
            case (TypeForm.Order):
                message = `*${Messages[type]}:* %0A`+`*Утройство:* ${data?.title} ${data?.description}%0A`+
                `*Имя:* ${stateForm.name}%0A*Телефон:* ${stateForm.telephone}%0A`+
                    `*Время для звонка:* ${stateForm.time}`
                break;
            case (TypeForm.Service):
                message = `*${Messages[type]}:* %0A`+`*Услуга:* ${data?.title}(${data?.model})%0A *Имя:* ${stateForm.name}%0A*Телефон:* ${stateForm.telephone}%0A*Время для звонка:* ${stateForm.time}`
                break;
            case (TypeForm.TradeIn):
                message = `*${Messages[type]}:* %0A*Имя:* ${stateForm.name}%0A*Телефон:* ${stateForm.telephone}%0A*Время для звонка:* ${stateForm.time}`
                break;
        }
        sendBot(message).then()
    }

    return (
        <div className={style.container}>
            <div className={style.containerHeader}>
                <IconSVG width={48} height={48} imageId={SvgList.application}/>
                <div className={style.containerHeaderTitle}>
                    <h1>{type===TypeForm.Service?`${title}\n${data?.model}`:title}</h1>
                    <span>
                        {type===TypeForm.Service?
                            "в сервисный центр Apple Fix":
                            "в магазине Apple Fix"
                        }
                    </span>
                </div>
            </div>
            {data?
                <div className={style.containerMain}>
                    {subTitle?<h2>{subTitle}</h2>:null}
                    <div className={style.containerMainInfo}>
                        <div className={style.containerMainInfoTitle}>
                            <h3 dangerouslySetInnerHTML={{ __html: data.title}}/>
                            <span dangerouslySetInnerHTML={{ __html: data.description}}/>
                        </div>
                        <div className={style.containerMainInfoPrice}>
                            <h4>{price()}</h4>
                            <span dangerouslySetInnerHTML={{ __html: data.additionalInformation}}/>
                        </div>
                    </div>
                </div>:
                null
            }
            {desc?<div   className={style.containerMain}>
                <span>{desc}</span>
            </div>:null}
            <div className={style.containerFooter}>
                <div className={style.containerFooterForm}>
                    <h2>Контактные данные:</h2>
                    <form onSubmit={handleSendMessage}>
                        {formItem.map((item, index )=> {
                            return (
                                <FormInput
                                    key={index}
                                    stateForm={stateForm}
                                    handleSetFormState={handleSetFormState}
                                    inputData={item}
                                />
                            )
                        })}
                        <button>Отправить</button>
                    </form>
                </div>
                <div
                    onClick={()=>router.back()}
                    className={style.containerFooterBack}>
                    <div className={style.containerFooterBackIcon}>
                        <IconSVG width={16} height={16} imageId={SvgList.arrowLeft}/>
                    </div>
                    <span>Вернуться назад</span>
                </div>
            </div>
        </div>
    );
};

export default Form;
