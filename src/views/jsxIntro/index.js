const formatName = (user) => (
    user.firstName + " " + user.lastName
  )
  const user = {
    firstName:'Harper',
    lastName:"Perez"
  }
  // const element = <p>{formatName(user)}</p>
  const getGreeting = (user) => {
    if(user) {
      return (
         <h1>Hello,{formatName(user)}</h1>
      )
    } else {
      return (
        <h1>Hello,Stranger</h1> 
      )
    }
  }
  function JsxIntro() {
    const name = 'Josh Perez'
    return (
      <div className="App">
        <header className="App-header">
          {name}
        </header>
        {getGreeting(user)}
      </div>
    );
  }
  
  export default JsxIntro;
  