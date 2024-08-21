import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <header className="flex h-16 w-full items-center justify-between bg-foreground/90 px-4 md:px-6">
            <Link to="/" className="mr-6 flex items-center space-x-2">
                <img src={logo} alt={"Logo"} width={42} />
                <span className="hidden font-bold sm:inline-block text-secondary/90">
                    Barbearia
                </span>
            </Link>
            <nav className="items-center hidden space-x-4 md:flex">
                <Link
                    to="/docs"
                    className={cn(
                        "font-bold transition-colors hover:text-secondary",
                        pathname.startsWith("/docs") ? "text-secondary" : "text-secondary/90"
                    )}
                >
                    Inicio
                </Link>
                <Link
                    to="/docs"
                    className={cn(
                        "font-bold transition-colors hover:text-secondary",
                        pathname.startsWith("/contato") ? "text-secondary" : "text-secondary/90"
                    )}
                >
                    Contato
                </Link>
                <Link
                    to="/registro"
                    className={cn(
                        "font-bold transition-colors hover:text-secondary",
                        pathname.startsWith("/contato") ? "text-secondary" : "text-secondary/90"
                    )}
                >
                    Registrar-se
                </Link>
                <Button className="bg-primary font-bold" asChild><Link to="/agendamento">Agendamento</Link></Button>
            </nav>
            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
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
                        <MobileLink to="/registro" className="hover:text-secondary">
                            Registro
                        </MobileLink>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
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