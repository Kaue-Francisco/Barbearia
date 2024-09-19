import image_register_page from '@/assets/placa_cia_bigode.jpeg'
import image_logo from '@/assets/logo.png'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Registro() {
  return (
    <div className="grid grid-cols-2">
      <div className='flex flex-col justify-center items-center col-span-1 h-screen w-screen md:w-auto bg-background'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-6 lg:text-5xl">Registre-se</h1>
        <img className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] mb-6' src={image_logo} />
        <form className='flex flex-col md:w-4/5'>
          <Label htmlFor='name' className='mt-4 mb-1'>Nome completo:</Label>
          <Input id='name' type='text' placeholder='Digite seu nome: '/>

          <Label htmlFor='phone_number' className='mt-4 mb-1'>Número de celular:</Label>
          <Input id='phone_number' type='text' placeholder='Digite o seu número de celular:'/>
          
          <Label htmlFor='password' className='mt-4 mb-1'>Senha:</Label>
          <Input id='password' type='password' placeholder='Digite sua senha:'/>
          
          <Label htmlFor='confirm_password' className='mt-4 mb-1'>Confirmar sua senha: </Label>
          <Input id='confirm_password' type='password' placeholder='Confirme sua senha:'/>
          
          <p className='text-center text-sm'>Já possui conta? Faça login <a className='text-blue-400' href='/login'>aqui!</a></p>
          <button className='text-sm text-white mt-8 bg-orange-400 rounded-md md:w-auto font h-10'>Confirmar</button>
        </form>
      </div>
      <div className='md:flex bg-cover bg-center bg-no-repeat md:col-span-1 hidden brightness-50' style={{ backgroundImage: `url(${image_register_page})`}} />
    </div>
  );
} 