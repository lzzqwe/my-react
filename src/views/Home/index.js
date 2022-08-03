import React, { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { recommendSongslist } from "../../api/api";
import { Button,Spin } from "antd";
function List(props) {
  const {songlist} = props
  return (
    <ul>
      {songlist.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
    </ul>
  )
}
function Home() {
  const [songlist, setSongslist] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading,setIsLoading] = useState(false)
  const getList = () => {
    const payload = {
      limit: 10,
      offset,
    };
    recommendSongslist(payload).then((res) => {
      if(res.code== 200) {
        setIsLoading(true)
        setSongslist(res.result);
      }
      console.log(res);
      
    });
  };
  const fetchList = useDebouncedCallback(() => {
    getList();
  }, 20);
  useEffect(() => {
    fetchList();
  }, [offset]);
  return (
    <div className="App">
      {!isLoading?<Spin></Spin>:<List songlist={songlist}></List>}
      <Button
        onClick={() => {
          setOffset(offset + 1);
        }}
        type="primary"
      >
        改变limit
      </Button>
      <Button
        onClick={() => {
          setSongslist([]);
        }}
        type="primary"
      >
        清空数据
      </Button>
    </div>
  );
}
export default Home;
