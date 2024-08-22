import background_image from '@/assets/fundo_brabo.png'
import RegisterInput from './Components/RegisterInput';

export default function Registro() {
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${background_image})` }}>
      <div className="flex flex-col py-6 px-11 bg-slate-100 border-slate-950 rounded-md bg-opacity-90">
        <h1 className='text-7xl text-center pb-2 italic '>CIA. do Bigode</h1>
        <h1 className='text-2xl text-center text-gray-500'>Seja bem-vindo á Companhia do Bigode.</h1>
        <h2 className='text-1xl text-center text-gray-500 pb-8'>Preencha os campos para continuar!</h2>

        <form className='flex flex-col justify-start items-start' >
          <label htmlFor='nome_completo' className='text-[20px]'>Nome completo:</label>
          <RegisterInput id='nome_completo' type='text'/>

          <label htmlFor='numero_telefone' className='text-[20px]'>Numero de celular:</label>
          <RegisterInput id='numero_telefone' type='text'/>

          <label htmlFor='senha' className='text-[20px]'>Senha:</label>
          <RegisterInput id='senha' type='password'/>

          <label htmlFor='confirmar_senha' className='text-[20px]'>Confirmar senha:</label>
          <RegisterInput id='confirmar_senha' type='password'/>
        </form>

        <p className='text-center text-[18px]'>Já possui conta ? Faça login <a className='text-blue-600' href='/login'>aqui!</a></p>
        <button className='mt-10 py-3 px-22 text-white bg-amber-700 text-[18px] rounded-md'>Avançar</button>
      </div>
    </div>
  );
} 