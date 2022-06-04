import { useEffect, useState } from 'react';

import '../../scss/components/chart.scss';

export const Chart = (props) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const { amount, maxAmount } = props;
        setHeight(amount * (100 / maxAmount));
    }, [props]);

    const style = {
        background: props.day === props.today ? '#76b5bc' : '#ed765e',
        height: `calc(${height}% - 16px - 11px)`,
    };

    return (
        <div className='chart'>
            <div className='line' style={style}></div>
            <p>{props.day}</p>
        </div>
    );
};
