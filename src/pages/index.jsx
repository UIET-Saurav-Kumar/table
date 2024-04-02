import Image from "next/image";
import { useEffect, useState } from "react";
import TableBody from "./components/table-body";

export default function Home() {
  const [rowData , setRowData] = useState([])
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  console.log("jsonData", data);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/data?page=${page}`);
      const data = await response.json();
      setData((pre) => [...pre , ...data]);
      setRowData((pre) => [...pre , ...data]);
    }
    fetchData();
  }, [page]);


  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
      setPage(prevPage => prevPage + 1);
    }
    
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sortBy = (key, order) => {
    const sorted = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
    setData(sorted);
  };

  const handleSearch = event => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = rowData.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    if(filtered.length > 0){
    setData(filtered);
    }
  };

  if(data?.length == 0) return "loading..."

  return (
    <div>
   {/* <div onClick={()=>setPage((pre) => pre+1)}>increment</div> */}
<div className="flex space-x-4">
    

        <button onClick={() => sortBy('fee', 'asc')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sort by Fee (Low to High)
        </button>
        <button onClick={() => sortBy('fee', 'desc')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sort by Fee (High to Low)
        </button>
        <button onClick={() => sortBy('rating', 'asc')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sort by Rating (Low to High)
        </button>
        <button onClick={() => sortBy('rating', 'desc')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sort by Rating (High to Low)
        </button>
        <button onClick={() => sortBy('user', 'asc')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Sort by Users (Low to High)
        </button>
        <button onClick={() => sortBy('user', 'desc')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Sort by Users (High to Low)
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />


    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-[#67d1bc] text-white divide-x divide-white">
            <th className="px-3 py-3 text-left text-xs font-medium tracking-wider">
              CD Rank 
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium tracking-wider">
              Colleges{" "}
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium tracking-wider">
              Course Fees
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium tracking-wider">
              Placement
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium tracking-wider">
              User Reviews
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium tracking-wider">
              Ranking
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {data?.map((item , index) => {
            return (
            <TableBody data={item} key={index}   />
             )
          })}
          
        </tbody>
       
      </table>
    </div>
    </div>
  );
}
