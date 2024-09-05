import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ReferralForm = () => {
  const [name, setName] = useState('');
  const [instagramHandle, setInstagramHandle] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let message = [
      `Hi, I am ${name}.`,
      `My IG: https://instagram.com/${instagramHandle}.`,
      'I am interested to explore more about joining Stellar Agency.',
    ]
    if (referralCode) message.push(`My referral code is ${referralCode}.`);

    const whatsappLink = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message.join('\n'))}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h2 className="text-xl font-bold mb-6 text-center">Join Stellar Agency</h2>

      <div className="mb-4">
        <label className="block text-slate-900 mb-2">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 border border-violet-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required 
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-slate-900 mb-2">Instagram Handle</label>
        <input 
          type="text" 
          value={instagramHandle} 
          placeholder={"ex: stellaragency.id"}
          onChange={(e) => setInstagramHandle(e.target.value)} 
          className="w-full p-2 border border-violet-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required 
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-slate-900 mb-2">Referral Code (optional)</label>
        <input 
          type="text" 
          value={referralCode} 
          onChange={(e) => setReferralCode(e.target.value)} 
          className="w-full p-2 border border-violet-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <button 
        type="submit" 
        className="w-full btn text-center"
      >
        Send to WhatsApp
      </button>
    </form>
  );
};

export default ReferralForm;
