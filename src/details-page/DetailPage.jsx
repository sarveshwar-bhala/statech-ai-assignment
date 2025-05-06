import { useParams } from "react-router-dom";
import { getPostsByID } from "./detailPageApiCall";
import { useEffect, useState } from "react";
import "./DetailPage.css";

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getPostsByID(id).then((e) => {
      console.log("data by id is", e);
      setData(e);
    });
  }, []);
  return !data ? (
    <div className="listPage">Loading.....</div>
  ) : (
    <div className="detailsPage">
      <h1>Detail Page</h1>
      <div className="dataBox">
        <p>
          Post Number: <span className="data">{data.id}</span>
        </p>
        <p>
          Title: <span className="data">{data.title}</span>
        </p>
        <p>
          Body: <span className="data">{data.body}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
