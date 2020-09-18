import React, { useRef,useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function File(props) {

  const [FileName, setFileName] =useState("")
  const {
    
    accept,
    placeholder,
    name,
    append,
    prepend,
    outerClassname,
    inputClassname,
  } = props;
  const refInputFile = useRef(null);
  const onChange =(event) =>{
    setFileName(event.target.value)
    props.onChange({
      terget: {
        name: event.target.name,
        value: event.target.files 
      }

    })
  }


  return (
    <div className={["input-text-mb-3", outerClassname].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={FileName}
          onChange={onChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={FileName}
          placeholder={placeholder}
          className={["form-control", inputClassname].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}
File.defaultProps = {
  placeholder: "Broswe a file...",
};
File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  outerClassname: propTypes.string,
  inputClassname: propTypes.string,
};
