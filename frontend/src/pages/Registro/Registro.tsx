import image_register_page from '@/assets/placa_cia_bigode.jpeg'
import image_logo from '@/assets/logo.png'
import RegisterInput from './Components/RegisterInput';

export default function Registro() {
  return (
    <div className="grid grid-cols-2">
      <div className='flex flex-col justify-center items-center col-span-1 h-screen w-screen md:w-auto bg-background'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-6 lg:text-5xl">Registre-se</h1>
        <img className='md:w-[110px] md:h-[110px] w-[80px] h-[80px] mb-6' src={image_logo} />
        <form className='flex flex-col md:w-4/5'>
          <label htmlFor='nome' className='text-[18px]'>Nome completo:</label>
          <RegisterInput id='nome' type='text' placeholder='Digite seu nome: '/>

          <label htmlFor='numero_celular' className='text-[18px]'>Número de celular:</label>
          <RegisterInput id='numero_celular' type='text' placeholder='Digite o seu número de celular:'/>
          
          <label htmlFor='senha' className='text-[18px]'>Senha:</label>
          <RegisterInput id='senha' type='password' placeholder='Digite sua senha:'/>
          
          <label htmlFor='confirmar_senha' className='text-[18px]'>Confirmar senha: </label>
          <RegisterInput id='confirmar_senha' type='password' placeholder='Confirme sua senha:'/>
          
          <p className='text-center'>Já possui conta? Faça login <a className='text-blue-400' href='/login'>aqui!</a></p>
          <button className='text-2xl text-white w-[20rem] py-3 mt-8 bg-orange-400 rounded-md md:w-auto'>Confirmar</button>
        </form>
      </div>
      <div className='md:flex bg-cover bg-center bg-no-repeat md:col-span-1 hidden' style={{ backgroundImage: `url(${image_register_page})`}} />
    </div>
  );
} 