const Button = () => {

  // inline css style
  const styles = {
    backgroundColor: "hsl(204, 86%, 37%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  }

  // let count = 0
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  const handleClick = (e) => e.target.textContent = "Yeah. You clicked me";
  const handleDoubleClick = (e) => console.log(e);  
  
  return (
    <button style={styles} onDoubleClick={handleDoubleClick} onClick={handleClick}>Click me</button>
  )
}

export default Button
