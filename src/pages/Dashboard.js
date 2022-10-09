import ImgMediaCard from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../Core";

function Dashboard() {

  const [requestData, setRequestData] = useState([])



  const getData = async () => {
    await axios.get(`${baseurl}/api/v1/admin/request`)
      .then(response => {
        console.log(response.data)
        setRequestData(() => response.data)
        console.log("requestData",requestData)
      })
      .catch(err => alert("Error in getting data"))
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1 style={{ margin: '2%' }}>Pending Requests</h1>
      <div className="main">


        {requestData?.map((data, index) => (
          <ImgMediaCard
            name={data?.name}
            email={data?.email}
            phoneNumber={data?.phoneNumber}
            rashan={data?.rashan}
            CNIC={data?.CNIC}
            familyMembers={data?.familyMembers}
            income={data?.income}
            currentStatus={data?.currentStatus}
            date={data?.date}
            id={data?._id}
          />
        ))}

      </div>
    </>
  );
}

export default Dashboard;