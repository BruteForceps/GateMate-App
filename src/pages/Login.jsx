import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    const emailTrimmed = formData.email.trim().toLowerCase();

    if (!emailTrimmed) {
      nextErrors.email = 'VIT Email is required';
    } else if (!emailTrimmed.endsWith('@vitstudent.ac.in')) {
      nextErrors.email = 'Must be an institutional email ending with @vitstudent.ac.in';
    }

    if (!formData.password) {
      nextErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
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
      // Client-side UI validation only - navigate to dashboard
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/dashboard');
      }, 400);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in with your VIT student account to manage parcel pickups"
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input
          label="VIT Email Address"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.name2023@vitstudent.ac.in"
          error={errors.email}
          helperText="Use your official institutional email"
          required
          autoComplete="email"
        />

        <div>
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            error={errors.password}
            required
            autoComplete="current-password"
          />
          <div className="flex justify-end mt-1.5">
            <a
              href="#forgot"
              onClick={(e) => {
                e.preventDefault();
                alert('Password reset link will be sent to your institutional email in a future release.');
              }}
              className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Login'}
          </Button>
        </div>

        <div className="text-center pt-3 border-t border-slate-100">
          <p className="text-xs text-slate-600">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
