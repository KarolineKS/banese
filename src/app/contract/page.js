"use client";

import Link from 'next/link';

export default function Contract() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contrato</h2>
        <p className="mb-6">
          Aqui está o texto do contrato. Leia atentamente antes de aceitar.
        </p>
        <Link href='/senha'>
          <button
          
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Eu Aceito
          </button>
        </Link>
      </div>
    </div>
  );
}
