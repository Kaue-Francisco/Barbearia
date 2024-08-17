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
        <header className="flex h-18 w-full items-center justify-between bg-secondary px-4 md:px-6">
            <Link to="/" className="mr-6 flex items-center space-x-2">
                <img src={logo} alt={"Logo"} width={42} />
                <span className="hidden sm:inline-block text-background/80 font-bold transition-colors hover:text-background">
                    Barbearia
                </span>
            </Link>
            <nav className="items-center hidden space-x-4 md:flex">
                <Link
                    to="/docs"
                    className={cn(
                        "font-bold transition-colors hover:text-background",
                        pathname.startsWith("/docs") ? "text-background" : "text-background/80"
                    )}
                >
                    Inicio
                </Link>
                <Link
                    to="/docs"
                    className={cn(
                        "font-bold transition-colors hover:text-background",
                        pathname.startsWith("/contato") ? "text-background" : "text-background/80"
                    )}
                >
                    Contato
                </Link>
                <Link
                    to="/docs"
                    className={cn(
                        "font-bold transition-colors hover:text-background",
                        pathname.startsWith("/agendamento") ? "text-background" : "text-background/80"
                    )}
                >
                    Agendamento
                </Link>
                <Button className="bg-primary font-bold px-6" asChild><Link to="/agendamento">Entrar</Link></Button>
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
                        <MobileLink to="/agendamento" className="hover:text-secondary">
                            Entrar
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