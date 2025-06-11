import React, { useEffect, useState } from 'react';

export default function Deletetasks() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    const deleteTask = async (id) => {
      try {
        const res = await fetch(`http://localhost:3000/task/${id}`,{
            method:"DELETE"
        });
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
    <div className=' '>
      {data.map((item) => (
        <button onClick={()=>{
        deleteTask(item.id)
     }}>DeleteNow</button>
      ))}
    </div>
  );
}
