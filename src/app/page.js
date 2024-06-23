"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import InputMask from 'react-input-mask';

export default function Home() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/users/login", { cpf, password });
      if (res.data.error) {
        console.log(res.data.error);
      } else {
        console.log(res.data);
        localStorage.setItem('userCpf', cpf);
        router.push('/contract');
      }
    } catch (error) {
      console.error(error);
    }

    setCpf('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/background.jpg')" }}>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-10 rounded-lg max-w-lg w-full mx-4 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Login
        </h2>
        <div className="mb-6">
          <label className="block text-gray-700 mb-3 font-semibold text-lg">CPF:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </span>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded pl-12 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 mb-3 font-semibold text-lg">Senha:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              className="w-full pl-12 p-4 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded hover:from-green-500 hover:to-blue-600 transition duration-200 font-semibold text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
