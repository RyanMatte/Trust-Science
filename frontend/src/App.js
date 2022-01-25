import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilesUploadComponent from './components/file-upload.js';



class App extends Component {
    render() {
        return (
            <div className="App">
                <FilesUploadComponent />
            </div>
        );
    }
}

export default App;