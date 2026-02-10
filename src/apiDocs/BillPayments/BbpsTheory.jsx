import React from 'react';

const BbpsTheory = () => {
  return (
    <div className="p-6 text-white leading-relaxed">
    <h2 className="text-2xl font-bold mb-3 text-gray-200">1. What is BBPS?</h2>
      <p className="mb-6 text-gray-300">
        BBPS (Bharat Bill Payment System) is a government-regulated, unified bill payment network 
        that enables customers to pay a wide range of bills—such as electricity, water, gas, DTH, 
        broadband, insurance, and FASTag—through a single trusted system. It ensures secure, 
        error-free, and real-time bill processing across India.
      </p>
      <h2 className="text-2xl font-bold mb-3 text-gray-200">2. What is BillAvenue?</h2>
      <p className="mb-6 text-gray-300">
        BillAvenue is an authorized BBPS Operating Unit (OU) that provides API services for 
        businesses to integrate BBPS into their applications. Through BillAvenue, companies can 
        offer users instant bill fetching, quick payments, and real-time confirmation using BBPS 
        infrastructure.
      </p>

      <h2 className="text-2xl font-bold mb-3 text-gray-200">3. How Does It Work?</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-300">
        <li>The user enters bill details.</li>
        <li>The system sends a secure request to BillAvenue.</li>
        <li>BillAvenue fetches bill amount from the biller.</li>
        <li>The user makes the payment.</li>
        <li>BBPS confirms and updates the biller.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-3 text-gray-200">4. Example</h2>
      <p className="mb-6 text-gray-300">
        <strong>Example:</strong> A user enters their electricity number → System sends request →  
        amount fetched → user pays → BBPS confirms instantly.
      </p>

      <h2 className="text-2xl font-bold mb-3 text-gray-200">5. Why BBPS?</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-300">
        <li>One platform for all major bills</li>
        <li>Highly secure</li>
        <li>Real-time bill fetch</li>
        <li>Reliable and seamless</li>
        <li>Trusted by banks and apps</li>
      </ul>

    </div>
  );
};

export default BbpsTheory;
