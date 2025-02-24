import React, { useEffect, useState } from "react"
import MyTable from "./MyTable"
import MyGraph from "./MyGraph"
const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sheetId = "1rqqiZ46RB1DecKLjVb0upxPR8UVRjR3d0MsWp66c_PU"
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
        const response = await fetch(url);
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2)); // Clean response format

        const rows = json.table.rows.map((row) =>
          row.c.map((cell) => (cell ? cell.v : ""))
        );
        const newtabledata = rows.map((Organization) => {
          const item = { name: Organization[0], value: Organization[1] }
          return item
        })
        setData(newtabledata)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [])
  return (
    <div style={{ width: "100%",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div style={{ width: "50%" }}>
        <MyTable data={data} />
      </div>
      <div style={{ width: "50%" }}>
        <MyGraph data={data} />
      </div>
    </div>
  )
}
export default Dashboard;