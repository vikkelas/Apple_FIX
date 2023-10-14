import React from 'react';
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import style from '@/styles/404.module.sass'
const ErrorNotFound404= () => {
    return (
        <Layout title={''} description={''} keywords={''}>
            <section className={'container'}>
                <div className={style.conatainer}>
                    <h1>Страница не найдена</h1>
                    <div>
                        <span>4</span>
                        <div>
                            <Image
                                src={'/images/watch-se-44mm-2022-black.png'}
                                alt={'clock'}
                                fill
                            />
                        </div>
                        <span>4</span>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ErrorNotFound404;
