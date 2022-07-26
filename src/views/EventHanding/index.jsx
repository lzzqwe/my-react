

const EventHanding = () => {
    const handleClick = (e) => {
        // console.log('dssdsdsd');
        alert(e)
    }
   return (
    <div className="App">
        <button onClick={handleClick}>点我啊笨蛋</button>
    </div>
   )
}
export default EventHanding;
