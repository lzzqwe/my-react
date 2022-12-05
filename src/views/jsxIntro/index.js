import {useState,memo,useRef,useEffect, useCallback} from 'react'
const JsxIntro = () => {
  const [count, setCount] = useState(0);
  const [sonCount, setSonCount] = useState(0);
  const allPlus = useCallback(() => {
    setCount(count + 1);
    setSonCount(sonCount + 1);
  },[])
  return (
    <div>
      {console.log("Parent render")}
      <button onClick={() => setCount(v => v + 1)}>Parent + 1</button>
      <h3>Parent: {count}</h3>
      <Son allPlus={allPlus} sonCount={sonCount} />
    </div>
  );
};
const Son = memo((props) => {
  return (
    <div>
      {console.log("Son render")}
      <p>Son: {props.sonCount}</p>
      <button onClick={props.allPlus}>All + 1</button>
    </div>
  );
});

  export default JsxIntro;
  