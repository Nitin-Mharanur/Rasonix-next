"use client";
import Table from "@/components/Table";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [portfolio, setPortfolios] = useState([]);

  async function fetchPortfolio() {
    const res = await fetch("http://127.0.0.1:8000/api/portfolios").then(
      (res) => res.json()
    );
    setPortfolios(res.portfolio);
  }
  useEffect(() => {
    fetchPortfolio();
  }, []);

  async function handleDelete(id){
    let data = await fetch(`http://127.0.0.1:8000/api/portfolios/${id}/delete`,{
     method:'DELETE'
    }).then(
       (res) => res.json()
     );
     setPortfolios(res.portfolio);
     if(res.message){
      alert(res.message)
     }
   }
  

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Image URL",
      selector: (row) => row.image_url,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: `Action's`,
      selector: (row) => (
        <div className="flex gap-2">
          <Link
            className="p-2  rounded-md bg-yellow-500"
            href={`/dashboard/portfolio/${row.id}/edit`}
          >
            Edit
          </Link>
          <button className="bg-red-900 p-2 rounded-sm" onClick={(e)=>handleDelete(row.id)}>
           Delete
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
    <div className="p-4">
      <Table columns={columns} data={portfolio} pagination fixedHeader />
    </div>
     <div className="absolute top-[80%] right-4">
     <Link
       className="shadow-lg bg-green-500 p-2 rounded-md"
       href={"dashboard/portfolio/add"}
     >
       Add Portfolio
     </Link>
   </div>
   </>
  );
};

export default Page;
