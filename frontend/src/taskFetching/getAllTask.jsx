import React, { useEffect, useState } from 'react';
import Deletetasks from './deleteTask';

export default function GetAllTask() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('http://localhost:3000/task');
        if (!res.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const json = await res.json();
        setData(json);
        setIsError(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-[100vh]">Loading...</div>;
  }

  if (isError) {
    return <div className="flex justify-center items-center h-[100vh]">Error fetching data</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className=' grid grid-cols-3'>
      {data.map((item) => (
        <div key={item.id} className='bg-gray-100 w-[18rem] rounded-md'>
          <div className='font-bold'>{item.title}
          </div>
          <label htmlFor="">
           Status: {item.status === "Completed" ? "✅ Completed" : item.status === "Cancled" ? "❌ Cancled" : "⏲️ Pending"}
          </label>
          <div className="flex space-x-3">
            <button className='bg-red-500 rounded-md font-bold flex justify-center text-white w-20 '
            >Delete</button>
          <button className='bg-blue-500 rounded-md font-bold flex justify-center text-white w-20' >Edit</button>
          </div>
          
        </div>
      ))}
    </div>
  );
}
