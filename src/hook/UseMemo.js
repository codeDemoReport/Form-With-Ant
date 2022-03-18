import React, { useMemo, useState } from "react";

function UseMemo(props) {
  const [products, setProducts] = useState([{ title: "Ao", price: "1500" }]);
  const [dataInput, setDataInput] = useState({ title: "", price: "" });

  const handleChange = (e) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };
  //khogn su dung useMemo
  //   const totalPrice = products.reduce((total, value) => {
  //     console.log(total + Number(value.price));
  //     return total + Number(value.price);
  //   }, 0);

  //su dung useMemo
  const totalPrice = useMemo(() => {
    console.log("Tinh toan lai ...");
    const result = products.reduce((total, value) => {
      return total + Number(value.price);
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ margin: "auto" }}>
      <h1>Use Memo</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" value={dataInput.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input name="price" value={dataInput.value} onChange={handleChange} />
      </div>
      <button onClick={() => setProducts([...products, dataInput])}>Add</button>
      <h3>Total: {totalPrice}</h3>
      <ul>
        {products.map((element, index) => (
          <li key={index}>
            {element.title} - {element.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
