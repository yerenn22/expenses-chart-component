import { useEffect, useState } from 'react';

import '../../scss/components/chart.scss';

export const Chart = (props) => {
    const [height, setHeight] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const { amount, maximumSpending } = props;
        setHeight(amount * (100 / maximumSpending));
    }, [props]);

    const priceStyle = {
        bottom: `calc(${height}% + 8px)`,
    }

    const lineStyle = {
        background: props.day === props.today ? '#76b5bc' : '#ed765e',
        
        minHeight: '1px',
        height: `calc(${height}% - 16px - 11px)`,
    };

    return (
        <div className='chart'>
            {isHovered && <p className='price' style={priceStyle}>${props.amount}</p>}
            <div
                className='line'
                style={lineStyle}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
            ></div>
            <p>{props.day}</p>
        </div>
    );
};
