'use client'

import { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';

export default function PasswordPage() {
  const [passwordNumber, setPasswordNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleNumberClick = (number) => {
    if (passwordNumber.length < 4) {
      setPasswordNumber(passwordNumber + number);
    }
  };

  const handleRemoveLastDigit = () => {
    setPasswordNumber(passwordNumber.slice(0, -1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cpf = localStorage.getItem('userCpf');

    try {
      await axios.post('http://localhost:8000/api/users/senha', {
        cpf,
        passwordNumber,
      });
      // Adicionar um atraso de 1 segundo (1000 milissegundos) antes de definir isSuccess para true
      setTimeout(() => {
        setIsSuccess(true);
      }, 1000);
    } catch (error) {
      console.error('Error updating password number:', error);
    }
  };

  const handleClear = () => {
    setPasswordNumber('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover p-4" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center animate-fade-in">
          <p className="text-lg text-gray-700 flex items-center justify-center">
            <FaCheckCircle className="text-green-500 text-4xl mr-3" />
            Operação concluída com sucesso!
          </p>
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover p-4" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md w-full max-w-md" style={{ boxShadow: "rgb(0, 0, 0) 0px 20px 30px -10px, rgb(0, 0, 0) 0px -20px 30px -10px" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Senha Numérica</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} className="w-full p-2 border rounded-lg text-center focus:outline-none mb-4" value={passwordNumber} readOnly />
            <button type="button" className="absolute right-0 bottom-4 flex items-center px-4 py-3" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash className="text-gray-400 hover:text-gray-600" /> : <FaEye className="text-gray-400 hover:text-gray-600" />}
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-5 gap-2">
              {['1', '2', '3', '4', '5'].map((num) => (
                <button key={num} type="button" className="flex items-center justify-center h-12 bg-gray-200 rounded text-lg font-semibold text-gray-900 hover:bg-gray-300 transition duration-200" onClick={() => handleNumberClick(num)}>
                  {num}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {['6', '7', '8', '9', '0'].map((num) => (
                <button key={num} type="button" className="flex items-center justify-center h-12 bg-gray-200 rounded text-lg font-semibold text-gray-900 hover:bg-gray-300 transition duration-200" onClick={() => handleNumberClick(num)}>
                  {num}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" className="flex items-center justify-center h-12 bg-gray-200 rounded text-lg font-semibold text-gray-900 hover:bg-gray-300 transition duration-200" onClick={handleClear}>
                Limpar
              </button>
              <button type="button" className="flex items-center justify-center h-12 bg-gray-200 rounded text-lg font-semibold text-gray-900 hover:bg-gray-300 transition duration-200" onClick={handleRemoveLastDigit}>
                &#9664;
              </button>
            </div>
          </div>
          <button type="submit" className="mt-5 w-full p-2 text-white rounded-lg transition duration-200 font-semibold text-lg bg-[#00C2A7] hover:bg-[#00A591]" style={{ boxShadow: 'rgb(0, 0, 0) 0px 10px 10px -10px' }}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
