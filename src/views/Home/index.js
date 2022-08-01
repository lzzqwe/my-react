import React, { useState, useEffect } from "react";
import { recommendSongslist } from "../../api/api";
function Home() {
  const [songlist, setSongslist] = useState([]);
  const getList = () => {
    const payload = {
      limit: 10,
    };
    recommendSongslist(payload).then((res) => {
      setSongslist(res.result);
    });
  };
  useEffect(() => {
    getList();
    console.log("111");
  }, []);
  return (
    <div className="App">
      <ul>
        {songlist.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default Home;
