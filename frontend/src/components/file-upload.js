import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";



const Form = () => {

    const [selectedFile, setSelectedFile] = React.useState(null)
    var data;
    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', selectedFile)
        console.log(formData);
        axios.post("http://localhost:8080/csvToJson", formData, { withCredentials: false
        }).then(response => {
            data =  response.data;
            const PrettyPrintJson = ({datasource}) => {
                // (destructured) data could be a prop for example
                return (<div><pre>{ JSON.stringify(datasource, null, 2) }</pre></div>);
            }
            ReactDOM.render(<PrettyPrintJson datasource={ data } />, document.querySelector("#app"))
        })
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <input type="file" onChange={handleFileSelect} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                    <div id="app"></div>
                </form>
            </div>
        </div>
    )
}
export default Form;