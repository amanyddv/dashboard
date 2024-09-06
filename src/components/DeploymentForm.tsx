import { useState } from 'react';

const pricingOptions = [
  { type: 'Micro', cpu: '1 vCPU', ram: '1 GB RAM', price: '$0.027777/hour' },
  { type: 'Small', cpu: '2 vCPU', ram: '2 GB RAM', price: '$0.027777/hour' },
  { type: 'Large', cpu: '4 vCPU', ram: '4 GB RAM', price: '$0.027777/hour' },
];

function DeploymentForm() {
  const [port, setPort] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [error, setError] = useState('');

  const handleDeploy = () => {
    if (!port || !selectedPrice) {
      setError('Please fill in all fields.');
      return;
    }
    alert('Successfully deployed.');
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Configure Deployment</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label className="block mb-2">Port</label>
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded w-full"
          placeholder="8080"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Command</label>
        <input
          type="text"
          className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded w-full"
          value="My-deployment"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Arguments</label>
        <input
          type="text"
          className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded w-full"
          value="My-deployment"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Environment Variables</label>
        <input
          type="text"
          className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded w-full"
          placeholder="ENV_NAME=ENV_VALUE"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2">Pricing Configuration</label>
        {pricingOptions.map((option) => (
          <div key={option.type} className="mb-2">
            <input
              type="radio"
              id={option.type}
              name="price"
              value={option.type}
              onChange={() => setSelectedPrice(option.type)}
              className="mr-2"
            />
            <label htmlFor={option.type}>
              {`${option.type} - ${option.cpu}, ${option.ram} (${option.price})`}
            </label>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 w-full"
        onClick={handleDeploy}
      >
        Deploy
      </button>
    </div>
  );
}

export default DeploymentForm;
