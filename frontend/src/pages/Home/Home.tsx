import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerSection from "./Components/CustomerSection/CustomerSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesContent from "./Components/ServicesContent/ServicesContent";
import TeamSection from "./Components/TeamSection/TeamSection";
import LocationSection from "./Components/LocationSection/LocationSection";

export default function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');  // Ou sessionStorage.getItem('token')
    
    const validateToken = async () => {
      if (token) {
        try {
          // Fazer a chamada para validar o token
          const response = await fetch('http://localhost:5000/validate-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token  // Enviar o token no cabeçalho Authorization
            }
          });

          const data = await response.json();

          if (response.ok && data.status === 200) {
            console.log('Token válido');
          } else {
            // Token inválido ou expirado
            console.log('Token inválido ou expirado');
            localStorage.removeItem('token');  // Remover o token inválido
          }
        } catch (error) {
          console.error('Erro ao validar o token:', error);
          localStorage.removeItem('token');  // Remover o token em caso de erro
        }
      } else {
        console.log('Nenhum token encontrado');
      }
    };

    validateToken();  // Chama a função de validação do token ao carregar o componente
  }, [navigate]);

  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesContent />
      <TeamSection />
      <CustomerSection />
      <LocationSection />
    </main>
  );
}
