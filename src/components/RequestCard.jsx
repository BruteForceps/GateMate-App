import React, { useState } from 'react';
import Button from './Button';

export default function RequestCard({
  orderName,
  pickupLocation = 'Main Gate',
  destinationHostel,
  paymentType = 'Prepaid',
  codAmount,
  rewardPoints = 25,
  requestedBy = 'Hostel Resident',
  requestedAt = '15 mins ago',
}) {
  const [isAccepted, setIsAccepted] = useState(false);

  const isPrepaid = paymentType.toLowerCase().includes('prepaid');

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className={`bg-white rounded-xl border transition-all ${
      isAccepted
        ? 'border-emerald-300 ring-1 ring-emerald-200 bg-emerald-50/20'
        : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
    } p-5 flex flex-col justify-between`}>
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
              isPrepaid
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}
          >
            {isPrepaid ? 'Prepaid' : `COD ${codAmount ? `(₹${codAmount})` : ''}`}
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-2.5 py-0.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
            +{rewardPoints} pts
          </span>
        </div>

        {/* Order Name & Time */}
        <h3 className="font-semibold text-slate-900 text-base leading-snug">
          {orderName}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Posted by {requestedBy} • {requestedAt}
        </p>

        {/* Route Details */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
          <div className="flex items-start gap-2 text-slate-600">
            <svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <span className="text-slate-400 block font-medium">Pickup</span>
              <span className="font-medium text-slate-800">{pickupLocation}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-600">
            <svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div>
              <span className="text-slate-400 block font-medium">Destination</span>
              <span className="font-semibold text-slate-900">{destinationHostel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-5 pt-3 border-t border-slate-100">
        {isAccepted ? (
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Pickup Accepted!
            </span>
            <span className="text-xs text-slate-500 font-mono">OTP on Delivery</span>
          </div>
        ) : (
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={handleAccept}
          >
            Accept Pickup
          </Button>
        )}
      </div>
    </div>
  );
}
