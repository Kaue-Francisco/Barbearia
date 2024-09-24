import image_register_page from '@/assets/placa_cia_bigode.jpeg'
import image_logo from '@/assets/logo.png'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  return (
    <div className="grid grid-cols-[45%,55%]">
      <div className='flex flex-col justify-center items-center col-span-1 h-screen w-screen md:w-auto bg-background'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-6 lg:text-5xl">Entrar</h1>
        <img className='md:w-[75px] md:h-[58px] w-[60px] h-[60px] mb-6' src={image_logo} />
        <form className='flex flex-col md:w-3/5'>
          <Label htmlFor='email' className='mt-4 mb-1'>Email</Label>
          <Input required id='email' type='email' placeholder='Digite seu nome: '/>
          
          <Label htmlFor='password' className='mt-4 mb-1'>Senha:</Label>
          <Input required id='password' type='password' placeholder='Digite sua senha:'/>
          
          <button className='text-sm text-white mt-8 bg-orange-400 rounded-md md:w-auto font h-10'>Confirmar</button>
          <p className='text-center text-sm'>Não possuí conta? Clique  <a className='text-blue-400' href='/registro'>aqui!</a></p>
        </form>
      </div>
      <div className='md:flex bg-cover bg-center bg-no-repeat md:col-span-1 hidden brightness-50' style={{ backgroundImage: `url(${image_register_page})`}} />
    </div>
  );
} 