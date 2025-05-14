'user client'

import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (phone: string) => Promise<void>;
  verifyOtp: (phone: string, otp: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored token and validate it
    const token = localStorage.getItem('token');
    if (token) {
      // For now, we'll use mock data
      // In a real app, you would validate the token with your backend
      const mockUser = {
        _id: '1',
        name: 'Test User',
        phone: '9876543210',
        role: 'user' as const,
      };
      setUser(mockUser);
    }
    setLoading(false);
  }, []);

  const login = async (phone: string) => {
    try {
      setLoading(true);
      // Mock API call to send OTP
      // In a real app, this would call your backend API
      console.log(`Sending OTP to ${phone}`);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
      return Promise.resolve();
    } catch (error) {
      setLoading(false);
      return Promise.reject(error);
    }
  };

  const verifyOtp = async (phone: string, otp: string) => {
    try {
      setLoading(true);
      // Mock API call to verify OTP
      // In a real app, this would call your backend API
      console.log(`Verifying OTP ${otp} for ${phone}`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any OTP "1234" is valid
      if (otp === '1234') {
        const mockUser = {
          _id: '1',
          name: 'Test User',
          phone,
          role: 'user' as const,
        };
        
        // Mock token
        localStorage.setItem('token', 'mock-jwt-token');
        setUser(mockUser);
        setLoading(false);
        return true;
      }
      
      setLoading(false);
      return false;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        loading,
        login,
        verifyOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};