import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { toast } from 'sonner';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const register = useAuthStore(state => state.register);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(name, email, password);
      toast.success('Successfully registered!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen pt-20 pb-12 flex flex-col bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mt-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-amber-600 hover:text-amber-500">
            sign in to your account
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <div className="mt-1">
                <input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="new-password" required value={password} onChange={e => setPassword(e.target.value)} className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <button type="submit" disabled={isLoading} className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-amber-500 to-amber-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default Register;