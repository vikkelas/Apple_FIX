import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";
import ReviewBox, {reviews} from "@/components/Assets/ReviewBox/ReviewBox";
import clsx from "clsx";

const reviePlace:reviews[] = [
    {
        title: 'Яндекс.Карты',
        link: 'https://yandex.ru/maps/org/apple_fix/1279673815/',
        icon: "yandex.png"
    },
    {
        title: 'Вконтакте',
        link: 'https://vk.com/topic-43053901_27041378?offset=140',
        icon: "vk.png"
    }
]

const Reviews = () => {
    const iframe = ' <div style="width:max-content;max-height:100%;overflow:hidden;position:relative;">\n' +
        '                   <iframe src="https://yandex.ru/sprav/widget/rating-badge/1279673815?type=rating" width="100%" height="50" frameborder="0"></iframe>\n' +
        '                    <a href="https://yandex.ru/maps/org/apple_fix/1279673815/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">\n' +
        '                        Apple Fix на карте Сергиева Посада — Яндекс Карты\n' +
        '                    </a>\n' +
        '                </div>'
    return (
        <Layout
            description={'Ознакомьтесь с реальными отзывами наших клиентов. Работаем уже 10 лет в Сергиевом Посаде!'}
            title={'Отзывы о сервисном центре Apple Fix в Сергиевом Посаде'}
            keywords={''}>
            <PageTamplate children={null}/>
            <div
                className={clsx(['container', 'listBox'])}
            >
                {reviePlace.map((item, index)=>{
                    const {title, link, icon} = item;
                    return (
                        <ReviewBox key={index} link={link} title={title} icon={icon}/>
                    );
                })}
            </div>
        </Layout>
    );
};

export default Reviews;
