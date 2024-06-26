'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contract() {
  const router = useRouter();

  const handleAcceptance = () => {
    console.log('Termos aceitos, redirecionando...');
    router.push('/senha');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-white my-5 p-8 rounded-xl shadow-md w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Termos de Serviço - Área do Cliente
        </h2>
        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4">
            Bem-vindo aos Termos de Serviço da plataforma digital do Banco ABC. Ao acessar e utilizar nossos serviços, você concorda com os seguintes termos e condições:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Você é responsável por manter a confidencialidade da sua senha e conta.
            </li>
            <li>
              Ao utilizar nossos serviços, você concorda em fornecer informações verdadeiras, precisas, atuais e completas sobre si mesmo.
            </li>
            <li>
              Você concorda em notificar imediatamente o banco sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
            </li>
            <li>
              O banco se reserva o direito de modificar, suspender ou descontinuar qualquer parte de nossos serviços a qualquer momento, com ou sem aviso prévio.
            </li>
            <li>
              Ao utilizar nossos serviços, você concorda com nossas práticas de privacidade e o uso de cookies.
            </li>
            <li>
              Você entende e concorda que o uso dos nossos serviços é por sua conta e risco exclusivos.
            </li>
          </ul>
          <p className="mb-4">
            Estes termos e condições regem o seu uso da plataforma digital do Banco ABC. Leia com atenção antes de prosseguir.
          </p>
          <p className="mb-4">
            Ao clicar em Eu Aceito, você está concordando com estes termos e será redirecionado para a página de senha.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleAcceptance}
            className="w-full sm:w-auto p-3 text-white rounded-lg transition duration-200 font-semibold text-lg bg-[#00C2A7] hover:bg-[#00A591]"
            style={{
              minWidth: '100%', 
            }}
          >
            Eu Aceito
          </button>
        </div>
      </div>
    </div>
  );
}
