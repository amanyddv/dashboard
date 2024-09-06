import React, { useState } from 'react';
import './ConfigForm.css';

type PricingOption = {
  type: string;
  cpu: string;
  ram: string;
  price: string;
  txt:string, 
};

const pricingOptions: PricingOption[] = [
  { type: 'Micro', cpu: '1 vCPU', ram: '1 GB RAM', price: '$0.027777',txt:'#FC9C66' },
  { type: 'Small', cpu: '2 vCPU', ram: '2 GB RAM', price: '$0.027777',txt:'#853BCE'},
  { type: 'Large', cpu: '4 vCPU', ram: '4 GB RAM', price: '$0.027777',txt:'#1A73E8'},
];
function ConfigForm() {
    const [port, setPort] = useState<string>('');
    const [command, setCommand] = useState<string>('');
    const [argument, setArgument] = useState<string>('');
    const [envVar, setEnvVar] = useState<string>('');
    const [pricing, setPricing] = useState<string>('Micro');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
    const validate = () => {
      const newErrors: { [key: string]: string } = {};
      const portNumber = parseInt(port);
  
      if (!port || portNumber < 2000 || portNumber > 65535) {
        newErrors.port = 'Port number must be between 2001 and 65535';
      }
      if (!command) {
        newErrors.command = 'Command is required';
      }
      if (!argument) {
        newErrors.argument = 'Argument is required';
      }
      if (!envVar) {
        newErrors.envVar = 'Environment variable is required';
      }
      return newErrors;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formErrors = validate();
      if (Object.keys(formErrors).length === 0) {
        alert(`
          Port: ${port}
          Command: ${command}
          Argument: ${argument}
          Environment Variable: ${envVar}
          Pricing: ${pricing}
        `);
      } else {
        setErrors(formErrors);
      }
    };
  
    return (
      <div className="form">
        <h2 >Configure Deployment (optional)</h2>
        <p>Please follow the steps to configure your Project and deploy it.</p>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label>Port</label>
            <br />
            <input
              type="number"
              className="input-field"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              placeholder="Enter port number"
            />
            {errors.port && <span className="error-message">{errors.port}</span>}
          </div>
  
          <div className='inputField'>
            <label>Command</label>
            <br />

            <input
              type="text"
              className="input-field"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter command"
            />
            {errors.command && <span className="error-message">{errors.command}</span>}
          </div>
  
          <div className='inputField'>
            <label>Arguments</label>
            <br />

            <input
              type="text"
              className="input-field"
              value={argument}
              onChange={(e) => setArgument(e.target.value)}
              placeholder="Enter arguments"
            />
            {errors.argument && <span className="error-message">{errors.argument}</span>}
          </div>
  
          <div className='inputField'>
            <label>Environment Variables</label>
            <br />

            
             <textarea
      value={envVar}
      className="input-field"
      style={{ 
        height: '70px',  
      }}
  
      onChange={(e) => setEnvVar(e.target.value)}
      placeholder="Enter environment variable"
    />
            {errors.envVar && <span className="error-message">{errors.envVar}</span>}
          </div>
  
          <div>
            <label>Pricing Configuration</label>
            <div className="pricing-container">
      {pricingOptions.map((option) => (
        <div
          key={option.type}
          className={`pricing-card ${pricing === option.type ? 'selected' : ''}`}
          onClick={() => setPricing(option.type)}
        >
          <h3 className='price-type' style={{ color: option.txt,borderColor:option.txt }}>{option.type}</h3>
          <p>{option.cpu}</p>
          <p>{option.ram}</p>
          <p ><p className='clr-green' >{option.price} </p> / hour</p>
        </div>
      ))}
    </div>
          </div>
  
          <button className="submit" type="submit">Deploy</button>
        </form>
      </div>
    );
  
}

export default ConfigForm;
