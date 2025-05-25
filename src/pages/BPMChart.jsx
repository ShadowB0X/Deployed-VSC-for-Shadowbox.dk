import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';
  
  export default function BPMChart({ files }) {
    const data = files.map(file => ({
      name: file.filename.length > 12 ? file.filename.slice(0, 12) + '…' : file.filename,
      bpm: parseFloat(file.bpm?.toFixed(2)) || 0,
    }));
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="bpm" fill="#00d4ff" />
        </BarChart>
      </ResponsiveContainer>
    );
  }