const Dish = ({ item, updateObj, setItem }) => {
  const handleDec = () => {
    let upObj = {
      ...item,
      qty: item.qty - 1
    };
    updateObj(upObj);
  };
  const handleInc = () => {
    let upObj = {
      ...item,
      qty: item.qty + 1
    };
    updateObj(upObj);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "auto",
          padding: "20px",
          border: "1px solid black"
        }}
      >
        <div style={{ width: "60px", textAlign: "left" }}>{item.item}</div>
        <div>{item.cost}</div>
        <div>
          <button disabled={item.qty < 1} onClick={handleDec}>
            -
          </button>
          {item.qty}
          <button onClick={handleInc}>+</button>
        </div>
      </div>
    </>
  );
};

export default Dish;
