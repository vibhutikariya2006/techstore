import React from "react";
import "../../../pages/Homepage/Productsection.css";

import companylogo1 from "../../../assets/companylogo1.png";
import companylogo2 from "../../../assets/companylogo2.png";
import companylogo3 from "../../../assets/companylogo3.png";
import companylogo4 from "../../../assets/companylogo4.png";
import companylogo5 from "../../../assets/companylogo5.png";
import companylogo6 from "../../../assets/companylogo6.png";
import companylogo7 from "../../../assets/companylogo7.png";

const Companylogo = () => {
  const companylist = [
    { id: 1, company: companylogo1 },
    { id: 2, company: companylogo2 },
    { id: 3, company: companylogo3 },
    { id: 4, company: companylogo4 },
    { id: 5, company: companylogo5 },
    { id: 6, company: companylogo6 },
    { id: 7, company: companylogo7 },
  ];

  return (
    <div className="companylogo">
      {companylist.map((logo) => (
        <img
          key={logo.id}
          src={logo.company}
          alt={`Company Logo ${logo.id}`}
        />
      ))}
    </div>
  );
};

export default Companylogo;