import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescritption({ data }) {
  return (
    <main>
      <h4>How About Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
            return (
                <div 
                key={`feature-${index}`}
                style={{marginBottom: 20 }} >

                    <img
                    width="38"
                    className="d-block mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}/>
            <span>{feature.qty}</span>{" "}
            <span className="text-gray-500 font-weight-light">{feature.name}</span>
            </div>
            )
        })}
      </div>
    </main>
  );
}
