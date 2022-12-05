import {useState,memo} from 'react'
const JsxIntro = () => {
  const [count, setCount] = useState(0);
  const [son1Count, setSon1Count] = useState(0);
  const [son2Count, setSon2Count] = useState(0);
  return (
    <div>
      {console.log("Parent render")}
      <button onClick={() => setCount(v => v + 1)}>Parent + 1</button>
      <button onClick={() => setSon1Count(v => v + 1)}>Son1 + 1</button>
      <button onClick={() => setSon2Count(v => v + 1)}>Son2 + 1</button>
      <h3>Parent: {count}</h3>
      <Son1 son1Count={son1Count} />
      <Son2 son2Count={son2Count} />
    </div>
  );
};
const Son1 = memo((props) => {
  return (
    <div>
      {console.log("Son1 render")}
      Son1: {props.son1Count}
    </div>
  );
})
const Son2 = memo((props) => {
  return (
    <div>
      {console.log("Son2 render")}
      Son2: {props.son2Count}
    </div>
  );
})

  
  export default JsxIntro;
  