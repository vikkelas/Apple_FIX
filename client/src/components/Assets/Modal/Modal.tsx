import React from 'react';
import {useRouter} from "next/router";
import style from './Modal.module.sass';
import Loader from "@/components/Assets/Loader";
import {motion} from "framer-motion";

const Modal:React.FC<{msg: string, load:boolean}> = ({msg, load}) => {
    const router = useRouter()
    const goHome = () => {
        router.push('/').then()
    }
    return (
        <motion.div
            initial={{scale: 0.2, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.2, opacity: 0}}
            className={style.modal}>
            {load&&<Loader/>}
            {!load&&msg&&<div className={style.modalBox}>
                <h2>{msg}</h2>
                <button onClick={goHome}>Ок</button>
            </div>}
        </motion.div>
    );
};

export default Modal;
