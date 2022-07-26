import React, { useState, useEffect } from "react";
import { useRequest } from 'ahooks';
import { useDebouncedCallback } from "use-debounce";
import { recommendSongslist } from "../../api/api";
import { Button, Spin,Pagination } from "antd";
function List(props) {
  console.log(props);
  const { songlist, setOffset, setSongslist } = props;
  return (
    <>
      <ul>
        {songlist.map((item) => {
          return <li className="item" key={item.id}>{item.name}</li>;
        })}
      </ul>
      <Button onClick={setOffset} type="primary">
        改变limit
      </Button>
      <Button onClick={setSongslist} type="primary">
        清空数据
      </Button>
    </>
  );
}
function Home() {
  const [songlist, setSongslist] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getList = () => {
    const payload = {
      limit: 10,
      offset,
    };
    setIsLoading(false);
    recommendSongslist(payload).then((res) => {
      res=res.data
      // console.log(res);
      if (res.code == 200) {
        setIsLoading(true);
        setSongslist(res.result);
      }
      // console.log(res);
    });
  };
  const { data, error, loading } = useRequest(getList,{
    manual: true
  });
  console.log(data);
  const fetchList = useDebouncedCallback(() => {
    getList();
  }, 20);
  const handleEmpty = () => {
    setSongslist([]);
  };
  const handleIncre = () => {
    setOffset(offset + 1);
  };
  useEffect(() => {
    fetchList();
  }, [offset]);
  return (
    <div className="App">
      {!isLoading ? (
        <Spin></Spin>
      ) : (
        <List
          setSongslist={handleEmpty}
          setOffset={handleIncre}
          songlist={songlist}
        ></List>
      )}
    </div>
  );
}
export default Home;
