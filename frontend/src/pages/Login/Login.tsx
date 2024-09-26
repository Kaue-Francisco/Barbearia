import image_register_page from '@/assets/placa_cia_bigode.jpeg'
import image_logo from '@/assets/logo.png'
import { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        data: {
          email: formData.email,
          password: formData.password,
        },
      };
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-[45%,55%]">
      <div className='flex flex-col justify-center items-center col-span-1 h-screen w-screen md:w-auto bg-background'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-6 lg:text-5xl select-none">Entrar</h1>
        <img className='md:w-[75px] md:h-[58px] w-[60px] h-[60px] mb-6 select-none' src={image_logo} />
        <form className='flex flex-col md:w-3/5' onSubmit={handleSubmit}>
          <Label htmlFor='email' className='mt-4 mb-1'>Email</Label>
          <Input required id='email' type='email' placeholder='Digite seu email:' value={formData.email} onChange={handleChange} />
          
          <Label htmlFor='password' className='mt-4 mb-1'>Senha:</Label>
          <Input required id='password' type='password' placeholder='Digite sua senha:' value={formData.password} onChange={handleChange} />
          
          <Button className="bg-primary font-bold px-6 mt-4 select-none" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
          <p className='text-center text-sm mt-4 select-none'>Não possuí conta? Clique <a className='text-blue-400' href='/registro'>aqui!</a></p>
        </form>
      </div>
      <div className='md:flex bg-cover bg-center bg-no-repeat md:col-span-1 hidden brightness-50' style={{ backgroundImage: `url(${image_register_page})`}} />
    </div>
  );
}