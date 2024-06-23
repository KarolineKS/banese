"use client";

import { useState } from 'react';
import axios from 'axios';

export default function PasswordPage() {
  const [passwordNumber, setPasswordNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNumberClick = (number) => {
    if (passwordNumber.length < 4) {
      setPasswordNumber(passwordNumber + number);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cpf = localStorage.getItem('userCpf');

    try {
      await axios.post('http://localhost:8000/users/senha', {
        cpf,
        passwordNumber
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Error updating password number:', error);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">Sucesso</h2>
          <p>Operação concluída com sucesso!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Senha Numérica</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded text-center"
              value={passwordNumber}
              readOnly
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <button
                key={number}
                type="button"
                className="bg-gray-200 p-4 rounded"
                onClick={() => handleNumberClick(number.toString())}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
