import React from "react";
import { useParams } from "react-router-dom";
import { Product_Data } from "../Utils/Product_data";
export const Products_Details = () => {
  const param = useParams();

  const data = Product_Data.filter((pro) => {
    return pro.id == param.id;
  });

  console.log(data);

  return (
    <div>
      {data.map((pro, index) => {
        const {
          image,
          title,
          description,
          price,
          rating: { rate, count },
        } = pro;
        return (
          <div className="mt-5 container" key={index}>
            <div className="row">
              <div className="col-md-6">
                <img src={image} className="details_Image" alt="" />
              </div>
              <br />
              <div className="col-md-6">
                <h1 className="text-3xl">{title}</h1>
                <br />
                <p className="">{description}</p>
                <br />
                <p  style={{fontSize:"25px"}}><strong style={{padding:"5px",backgroundColor:"green",color:"white"}}>{rate}</strong> Rating</p>
                <br />
                <h1>${price}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// export { Products_Details };
// Products_Details{params.title}
