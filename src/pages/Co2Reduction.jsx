import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CO2ReductionTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with your actual endpoint
    const url = "{{pathlocal}}/users/reduction/table/1";
    
    axios.get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <main className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl text-slate-800 font-bold mb-6">CO2 Reduction Table</h1>

        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Year</th>
                <th className="px-4 py-3">CO2</th>
                <th className="px-4 py-3">Plan</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3">{item.year}</td>
                  <td className="px-4 py-3">{item.factory}</td>
                  <td className="px-4 py-3">{item.plans.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-5 mt-6 border-t border-slate-200">
          <div className="text-sm">
            <a className="font-medium text-green-500 hover:text-green-600" href="/">Back to Dashboard</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CO2ReductionTable;
