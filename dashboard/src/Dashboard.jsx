import React, { useEffect } from "react"
const Dashboard = () => {

  
  useEffect(() => {
const fetchData = async ()=>{
    try {
    const sheetId = "1rqqiZ46RB1DecKLjVb0upxPR8UVRjR3d0MsWp66c_PU"
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
    const response = await fetch(url);
  const text = await response.text();
const json = JSON.parse(text.substring(47, text.length - 2)); // Clean response format

        const rows = json.table.rows.map((row) =>
          row.c.map((cell) => (cell ? cell.v : ""))
        );
console.log(rows)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData()
  },[])
return (
    <p>Mohit</p>
)
}
export default Dashboard;