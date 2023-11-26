import React from 'react'
import {createRoot} from 'react-dom/client'
/*import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/


class MyComponent extends React.Component{
  constructor(props) {
    super(props);
    console.log('Component created!');
  }

  render(){
    return <p>Hellow {this.props.name}</p>;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyComponent name="Dicoding" />
    <MyComponent name="John" />
    <MyComponent name="Doe" />
  </div>
);