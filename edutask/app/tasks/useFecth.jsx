import { useState, useEffect } from 'react';



const useFetch = () => {
  // State to hold the data
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/tasks/', {
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData = await response.json();

   
 

        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("No Tasks loaded")
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return { data, isLoading };
};
     
export default useFetch;

    