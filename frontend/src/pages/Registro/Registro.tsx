import placa_barbearia from '@/assets/placa_cia_bigode.jpeg'

export default function Registro() {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center md:grid md:grid-cols-2 items-center">
      <div className="flex flex-col justify-center items-center md:ml-auto max-w-60 bg-orange-600 p-5">
        <h1>Seja bem-vindo á Companhia do Bigode.</h1>
        <h2>Preencha os campos para continuar!</h2>
        <form >
          <p>Nome completo:</p>
          <input type='text'></input>
          <p>Numero de celular:</p>
          <input type='text'></input>
          <p>Senha:</p>
          <input type='password'></input>
          <p>Confirmar senha:</p>
          <input type='password'></input>
        </form>
      </div>
      <div className='max-w-80 grid-cols-1 md:flex hidden justify-end items-end'>
        <img src={placa_barbearia}></img>
      </div>
    </div>
  );
} 