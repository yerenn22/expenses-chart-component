import { useEffect, useState } from 'react';

import '../../scss/app.scss';
import data from '../data.json';

import { Chart } from '../components/Chart';

export const App = () => {
    const [today, setToday] = useState('');
    const [maximumSpending, setMaximumSpending] = useState(0);

    useEffect(() => {
        setToday(
            new Date()
                .toLocaleString('en-us', { weekday: 'short' })
                .toLowerCase()
        );

        setMaximumSpending(
            data.reduce((acc, { amount }) => Math.max(acc, amount), 0)
        );
    }, []);

    return (
        <div className='container'>
            <div className='component'>
                <div className='top'>
                    <div className='info'>
                        <p>My balance</p>
                        <h2>$921.48</h2>
                    </div>
                    <div className='logo'>
                        <img src='/assets/images/logo.svg' alt='logo' />
                    </div>
                </div>
                <div className='bottom'>
                    <h1>Spending - Last 7 days</h1>
                    <div className='graph'>
                        {data.map(({ day, amount }, index) => {
                            return (
                                <Chart
                                    key={index}
                                    day={day}
                                    amount={amount}
                                    today={today}
                                    maximumSpending={maximumSpending}
                                />
                            );
                        })}
                    </div>
                    <hr />
                    <div className='total'>
                        <div className='left'>
                            <p>Total this month</p>
                            <h2>$478.33</h2>
                        </div>
                        <div className='right'>
                            <h3>+2.4%</h3>
                            <p>from last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
