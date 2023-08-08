import React from "react";

import sundaychick from "../Assets/sunday-chick.jpg";
import pepperedpomo from "../Assets/pepperd-pomo.jpg";
import beacon from "../Assets/oven-bacon-featured 1.jpg";
import nkwobi2 from "../Assets/nkwobi 2.jpg";

const Menu4 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="intact">
              <img
                src={sundaychick}
                alt="chicken"
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word mt-5">Rostiserrie Chicken</p>
            </div>

            <div className="intact">
              <img
                src={pepperedpomo}
                alt="peppered-pomo"
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word">Peppered Pomo</p>
            </div>

            <div className="intact">
              <img
                src={beacon}
                alt="beacon"
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word mt-5 mx-5">Bacon</p>
            </div>

            <div className="intact">
              <img
                src={nkwobi2}
                alt="nkwobi"
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word mt-5 mx-5">Nkwobi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu4;
