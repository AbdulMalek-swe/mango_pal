import React from 'react';
import style from './style.module.css'
const Progress = () => {
    const data = [
        {
            name: "progress-1",
            id: 1,
            count: 20
        },
        {
            name: "k1",
            id: 2,
            count: 50

        },
        {
            name: "k13",
            id: 2,
            count: 1400

        }
    ]

    return (
        <div className='f '>
            {
                data.map((item, index) => <div key={index} className={style.progress_area}> <div className={style.progress} >
                    <div style={{
                        width: `${item?.count}%`,
                        height: "100%",
                        background: 'green',
                        borderRadius: '20px'
                    }}></div>


                </div>
                    <span className={style.progress_text} >{item?.count}</span>
                </div>
                )
            }

        </div>
    );
};

export default Progress;