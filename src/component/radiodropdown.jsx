import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("male");
  return (
    <div>
      <h3>Select Your Gender</h3>
      <input
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        checked={gender == "male"}
        id="male"
        name="gender"
        value="male"
      />
      <label htmlFor="male">Male</label>
      <input
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        checked={gender == "female"}
        id="female"
        name="gender"
        value="female"
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <hr />
    </div>
  );
}
export default Radio;
