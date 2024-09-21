import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Forms from "./Components/Forms";
import barberShopImage from "@/assets/background.png";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[90vh]" style={{ backgroundImage: `url(${barberShopImage})` }}>
        <Forms />
      </main>
      <Footer />
    </>
  );
}
