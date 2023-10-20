import React from 'react';
import Layout from "@/components/Layout/Layout";
import PageTamplate from "@/components/Assets/PageTamplate/PageTamplate";

const Reviews = () => {
    const iframe = ' <div style="width:max-content;max-height:100%;overflow:hidden;position:relative;">\n' +
        '                   <iframe src="https://yandex.ru/sprav/widget/rating-badge/1279673815?type=rating" width="100%" height="50" frameborder="0"></iframe>\n' +
        '                    <a href="https://yandex.ru/maps/org/apple_fix/1279673815/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">\n' +
        '                        Apple Fix на карте Сергиева Посада — Яндекс Карты\n' +
        '                    </a>\n' +
        '                </div>'
    return (
        <Layout description={''} title={''} keywords={''}>
            <PageTamplate>
                <div dangerouslySetInnerHTML={{__html: iframe} } />
            </PageTamplate>
        </Layout>
    );
};

export default Reviews;
