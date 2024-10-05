import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Modal from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { validateToken, fetchUserData, logout } from "@/api/api";  // Importa as funções de api.ts

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const [username, setUsername] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');  // Ou sessionStorage.getItem('token')

        const fetchData = async () => {
            if (token) {
                const isValid = await validateToken(token);
                if (isValid) {
                    const userData = await fetchUserData(token);
                    if (userData) {
                        setUsername(userData.name);
                    }
                }
            }
        };

        fetchData();
    }, []);

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            await logout(token);
            localStorage.removeItem('token');
            setUsername("");
            setIsModalOpen(false);
        }
    };

    return (
        <header className="flex h-18 w-full items-center justify-between bg-secondary px-4 md:px-6">
            <Link to="/" className="mr-6 flex items-center space-x-2">
                <img src={logo} alt={"Logo"} width={42} />
                <span className="hidden sm:inline-block text-background/80 font-bold transition-colors hover:text-background">
                    Barbearia
                </span>
            </Link>
            <nav className="items-center hidden space-x-4 md:flex">
                <Link
                    to="/"
                    className={cn(
                        "font-bold transition-colors hover:text-background",
                        pathname.startsWith("/inicio") ? "text-background" : "text-background/80"
                    )}
                >
                    Inicio
                </Link>
                <Link
                    to="/contato"
                    className={cn(
                        "font-bold transition-colors hover:text-background",
                        pathname.startsWith("/contato") ? "text-background" : "text-background/80"
                    )}
                >
                    Contato
                </Link>
                <Link
                    to="/agendamento"
                    className={cn(
                        "font-bold transition-colors hover:text-background",
                        pathname.startsWith("/agendamento") ? "text-background" : "text-background/80"
                    )}
                >
                    Agendamento
                </Link>
                {username ? (
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-primary"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <User className="h-5 w-5" />
                    </Button>
                ) : (
                    <Button className="bg-primary font-bold px-6" asChild><Link to="/login">Entrar</Link></Button>
                )}
            </nav>
            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-primary shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium">
                        <MobileLink to="/" className="hover:text-secondary">
                            Inicio
                        </MobileLink>
                        <MobileLink to="/contato" className="hover:text-secondary">
                            Contato
                        </MobileLink>
                        <MobileLink to="/agendamento" className="hover:text-secondary">
                            Agendamento
                        </MobileLink>
                        {username ? (
                            <>
                                <span className="hover:text-secondary truncate max-w-[150px]">{username}</span>
                                <Button className="hover:text-secondary" onClick={handleLogout}>Sair</Button>
                            </>
                        ) : (
                            <MobileLink to="/login" className="hover:text-secondary">
                                Entrar
                            </MobileLink>
                        )}
                    </nav>
                </SheetContent>
            </Sheet>
            {/* User Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} username={username} onLogout={handleLogout} />
        </header>
    );
}

function MobileLink({
    to,
    onOpenChange,
    className,
    children,
    ...props
}: {
    to: string;
    onOpenChange?: (open: boolean) => void;
    className: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            to={to}
            onClick={() => {
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
