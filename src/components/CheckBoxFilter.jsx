import React from "react";
import { useState } from "react";

const CheckBoxFilter = () => {
  const [age0to3, setAge0to3] = useState(false);
  const [age3to6, setAge3to6] = useState(false);
  const [age6to12, setAge6to12] = useState(false);
  const [age12to18, setAge12to18] = useState(false);
  const [age18to24, setAge18to24] = useState(false);
  const [age2, setAge2] = useState(false);
  const [age3, setAge3] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "age0to3":
        setAge0to3(checked);
        break;
      case "age3to6":
        setAge3to6(checked);
        break;
      case "age6to12":
        setAge6to12(checked);
        break;
      case "age12to18":
        setAge12to18(checked);
        break;
      case "age18to24":
        setAge18to24(checked);
        break;
      case "age2":
        setAge2(checked);
        break;
      case "age3":
        setAge3(checked);
        break;
      default:
        break;
    }
  };
  return (
    <div className="mt-6">
      <div>
        <input type="checkbox" name="age0to3" checked={age0to3} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">0-3 months</label>
      </div>

      <div>
        <input type="checkbox" name="age3to6" checked={age3to6} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">3-6 months</label>
      </div>

      <div>
        <input type="checkbox" name="age6to12" checked={age6to12} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">6-12 months</label>
      </div>

      <div>
        <input type="checkbox" name="age12to18" checked={age12to18} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">12-18 months</label>
      </div>

      <div>
        <input type="checkbox" name="age18to24" checked={age18to24} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">18-24 months</label>
      </div>

      <div>
        <input type="checkbox" name="age2" checked={age2} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">2 years</label>
      </div>

      <div>
        <input type="checkbox" name="age3" checked={age3} onChange={handleCheckboxChange} />
        <label className="text-mono mx-2">3 years</label>
      </div>
    </div>
  );
};

export default CheckBoxFilter;
