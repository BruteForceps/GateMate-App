import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import RequestCard from '../components/RequestCard';
import Button from '../components/Button';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [filter, setFilter] = useState('all'); // all, prepaid, cod

  // Mock parcel requests
  const mockRequests = [
    {
      id: 'req-1',
      orderName: 'Amazon Essentials Study Lamp',
      pickupLocation: 'Main Gate Courier Desk',
      destinationHostel: 'Block D — Room 314',
      paymentType: 'Prepaid',
      rewardPoints: 35,
      requestedBy: 'Rohan M. (CSE 3rd Yr)',
      requestedAt: '12 mins ago',
    },
    {
      id: 'req-2',
      orderName: 'Myntra Running Shoes',
      pickupLocation: 'Main Gate BlueDart Counter',
      destinationHostel: 'Block Q — Room 108',
      paymentType: 'COD',
      codAmount: 499,
      rewardPoints: 50,
      requestedBy: 'Vikas K. (ECE 2nd Yr)',
      requestedAt: '25 mins ago',
    },
    {
      id: 'req-3',
      orderName: 'Flipkart Semester 5 Reference Books',
      pickupLocation: 'Main Gate Ekart Hub',
      destinationHostel: 'Block B — Room 205',
      paymentType: 'Prepaid',
      rewardPoints: 40,
      requestedBy: 'Shreya S. (IT 3rd Yr)',
      requestedAt: '40 mins ago',
    },
  ];

  const filteredRequests = mockRequests.filter((req) => {
    if (filter === 'prepaid') return req.paymentType.toLowerCase().includes('prepaid');
    if (filter === 'cod') return req.paymentType.toLowerCase().includes('cod');
    return true;
  });

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Top Greeting & Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Good morning, Aditya! 👋
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              There are <span className="font-semibold text-indigo-600">3 parcel requests</span> available near your block right now.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => alert('New request modal will connect to Firestore in a future update.')}
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              New Request
            </Button>
          </div>
        </div>

        {/* Stats Cards Section */}
        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Performance Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StatCard
              title="Active Requests"
              value="3"
              badgeText="2 in Block D"
              badgeVariant="positive"
              description="Waiting for peer collection at Main Gate"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
            />

            <StatCard
              title="Completed Pickups"
              value="14"
              badgeText="100% Verified"
              badgeVariant="positive"
              description="Deliveries safely completed to hostel rooms"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            <StatCard
              title="Points Earned"
              value="420"
              badgeText="+65 this week"
              badgeVariant="positive"
              description="Redeemable for priority pickups & cafeteria perks"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Available Parcel Requests Section */}
        <section aria-labelledby="requests-heading" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 id="requests-heading" className="text-lg font-bold text-slate-900 tracking-tight">
                Available Parcel Requests
              </h2>
              <p className="text-xs text-slate-500">
                Help fellow students and earn points on your walk back to the hostel blocks.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-lg self-start sm:self-auto text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (3)
              </button>
              <button
                type="button"
                onClick={() => setFilter('prepaid')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  filter === 'prepaid'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Prepaid
              </button>
              <button
                type="button"
                onClick={() => setFilter('cod')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  filter === 'cod'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                COD
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <RequestCard
                key={request.id}
                orderName={request.orderName}
                pickupLocation={request.pickupLocation}
                destinationHostel={request.destinationHostel}
                paymentType={request.paymentType}
                codAmount={request.codAmount}
                rewardPoints={request.rewardPoints}
                requestedBy={request.requestedBy}
                requestedAt={request.requestedAt}
              />
            ))}
          </div>
        </section>

        {/* Safety & Protocol Banner */}
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-indigo-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Delivery Handover Protocol</p>
              <p className="text-slate-600">Never hand over a parcel without verifying the 4-digit OTP provided by the recipient.</p>
            </div>
          </div>
          <span className="font-semibold text-indigo-700 hover:underline cursor-pointer shrink-0">
            Read Security Guidelines →
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
}
