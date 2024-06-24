'use client';

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
      const res = await axios.post('http://localhost:8000/api/users/login', {
        cpf,
        password,
      });
      if (res.data.error) {
        console.log(res.data.error);
      } else {
        console.log(res.data);
        localStorage.setItem('userCpf', cpf);
        router.push('/contrato');
      }
    } catch (error) {
      console.error(error);
    }

    setCpf('');
    setPassword('');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-filter backdrop-blur-sm p-10 rounded-xl max-w-xl w-[23vw] mx-4 flex flex-col justify-center items-center gap-5"
        style={{
          boxShadow: "rgb(0, 0, 0) 0px 20px 30px -10px, rgb(0, 0, 0) 0px -20px 30px -10px",
          height: "55vh"
        }}
        
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Área do Cliente
        </h2>
        <div className="mb-6 w-full flex flex-col gap-8">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaUser className="text-white" />
              </span>
              <InputMask
                placeholder="CPF"
                mask="999.999.999-99"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="w-full bg-transparent p-2 border border-gray-300 rounded pl-12 text-lg focus:outline-none text-white placeholder-white"
                required
              />
          </div>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-white" />
              </span>
              <input
                placeholder='Senha'
                type="password"
                className="w-full pl-12 bg-transparent p-2 border border-gray-300 rounded text-lg focus:outline-none text-white placeholder-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white rounded-lg transition duration-200 font-semibold text-lg bg-[#00C2A7] hover:bg-[#00A591]"
          style={{
            boxShadow: "rgb(0, 0, 0) 0px 20px 30px -10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
