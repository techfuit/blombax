"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Meter = ({ deta, COLORS = [ '#000000', '#253edb'] }) => {
    const earningLimit = isNaN(Number(deta?.earning_limit)) ? 0 : Number(deta?.earning_limit);
    const totalEarning = isNaN(Number(deta?.totalEarning)) ? 0 : Number(deta?.totalEarning);

    const totalEarningPercentage = Math.min((totalEarning / earningLimit) * 100, 100); 
    const remainingPercentage = 100 - totalEarningPercentage; 

    const data = [
        { name: 'Earning Limit', value: remainingPercentage },
        { name: 'Total Earning', value: totalEarningPercentage },
    ];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{ width: '100%', height: '220px' }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center' }}>
                <div style={{ margin: '5px 0' }}>
                    <span style={{ color: COLORS[0], fontWeight: 'bold', fontSize: "20px" }}>
                        Earning Limit:
                    </span>{' '}
                    ${Math.max(earningLimit , 0).toFixed(2)}
                </div>
                <div style={{ margin: '5px 0' }}>
                    <span style={{ color: COLORS[1], fontWeight: 'bold', fontSize: "20px" }}>
                        Total Earning:
                    </span>{' '}
                    ${totalEarning.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default Meter;
