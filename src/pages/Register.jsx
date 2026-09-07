import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    const fullNameTrimmed = formData.fullName.trim();
    const emailTrimmed = formData.email.trim().toLowerCase();

    if (!fullNameTrimmed) {
      nextErrors.fullName = 'Full name is required';
    } else if (fullNameTrimmed.length < 2) {
      nextErrors.fullName = 'Please enter your full name';
    }

    if (!emailTrimmed) {
      nextErrors.email = 'VIT Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = 'Please enter a valid email address';
    } else if (!emailTrimmed.endsWith('@vitstudent.ac.in')) {
      nextErrors.email = 'Only @vitstudent.ac.in email addresses can register';
    }

    if (!formData.password) {
      nextErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = 'Confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Client-side UI validation only - pass state to verify-email
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/verify-email', {
          state: { email: formData.email.trim().toLowerCase() },
        });
      }, 400);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join your hostel parcel pickup network"
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input
          label="Full Name"
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Rahul Verma"
          error={errors.fullName}
          required
          autoComplete="name"
        />

        <div>
          <Input
            label="VIT Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name.registration2023@vitstudent.ac.in"
            error={errors.email}
            required
            autoComplete="email"
          />
          {/* Institutional note */}
          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-indigo-700 bg-indigo-50/70 border border-indigo-100 px-2.5 py-1.5 rounded-md">
            <svg className="w-4 h-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Only <strong>@vitstudent.ac.in</strong> email addresses can register.</span>
          </div>
        </div>

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="At least 6 characters"
          error={errors.password}
          required
          autoComplete="new-password"
        />

        <Input
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Repeat your password"
          error={errors.confirmPassword}
          required
          autoComplete="new-password"
        />

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>

        <div className="text-center pt-3 border-t border-slate-100">
          <p className="text-xs text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
