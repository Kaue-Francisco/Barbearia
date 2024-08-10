import { useState } from 'react';
import imageLogin from '../../images/login.jpg';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');  
  
  const handleSubmit = async (event: any) => {
      event.preventDefault();

      const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              senha
          })
      });

      const data = await response.json();
      console.log(data);
    }

    return (
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[89vh]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto w-[350px] space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">Insira seu email abaixo para fazer login em sua conta</p>
            </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">

              {/* Campo de email */}
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700"
                  >Email
                </label>
                
                <input 
                  id="email" 
                  placeholder="email@exemplo.com" 
                  required 
                  type="email" 
                  className="mt-1 p-2 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                  value={ email }
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Campo de senha */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700"
                    >Senha
                  </label>
                </div>

                <input 
                  id="password" 
                  placeholder='*********'
                  required type="password" 
                  className="mt-1 p-2 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                  value={ senha }
                  onChange={(e) => setSenha(e.target.value)}
                />
                <a className="ml-auto inline-block text-sm underline text-indigo-600 hover:text-indigo-500" href="#">
                    Esqueceu sua senha?
                  </a>
              </div>

              {/* Botão de login */}
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
                Login
              </button>

              <div className="flex justify-center">
                <GoogleLogin
                          clientId="YOUR_CLIENT_ID" // Substitua pelo seu Client ID
                          buttonText="Entrar com Google"
                          cookiePolicy={'single_host_origin'}
                          className="bg-red-600 mt-4 text-white font-bold justify-center py-2 px-4 rounded w-full"
                  />
              </div>
            </div>
          </form>

            <div className="mt-4 text-center text-sm">
              Não tem uma conta?
              <a className="underline text-indigo-600 hover:text-indigo-500" href="/register">
                Inscrever-se
              </a>
            </div>

          </div>
        </div>

        <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
            <img
                alt="Imagem"
                className="h-full w-full object-cover"
                src={imageLogin}
                style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                    height: '89vh'
                }}
                width="1920"
            />
        </div>
      </div>
    )
  }