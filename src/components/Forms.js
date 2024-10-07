import { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [textArea, setTextArea] = useState("");

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (age > 0 && name !== "") {
      setTextArea(`Hello ${name}, your age is ${age}`);
    } else {
      console.log("Please enter a valid name and age");
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter your name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Enter your age </label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input type="submit" />
        <br />
        <textarea 
            value={textArea} 
            onChange={handleChange}>
        </textarea>
      </form>
    </>
  );
};

export default Forms;
