import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Button from '../components/Button';

export default function VerifyEmail() {
  const location = useLocation();
  const email = location.state?.email || 'your.name2023@vitstudent.ac.in';
  const [resendStatus, setResendStatus] = useState(null);
  const [isResending, setIsResending] = useState(false);

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      setResendStatus('Verification link resent to your institutional inbox!');
    }, 600);
  };

  return (
    <AuthLayout
      title="Verify your email"
      subtitle="We need to verify your institutional student identity"
    >
      <div className="text-center space-y-6">
        {/* Verification Icon Badge */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <p className="text-sm text-slate-600">
            A secure verification link has been sent to:
          </p>
          <div className="inline-block bg-slate-100 text-slate-900 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200 break-all font-semibold">
            {email}
          </div>
          <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed pt-2">
            Please check your VIT student inbox (Outlook / Webmail) and click the link to activate your GateMate account.
          </p>
        </div>

        {/* Feedback Alert */}
        {resendStatus && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{resendStatus}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Button
            variant="outline"
            size="lg"
            fullWidth
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? 'Sending...' : 'Resend verification email'}
          </Button>

          <Link to="/login" className="block w-full">
            <Button
              variant="ghost"
              size="md"
              fullWidth
            >
              Back to login
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
