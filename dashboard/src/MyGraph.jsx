import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const MyGraph = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    )
}
export default MyGraph