export default function Footer() {
    return (
        <footer className="bg-amber-900 py-7" style={{"userSelect": "none"}}>
            <div className="px-10 flex justify-center items-center">
                <div className="text-white text-center">
                    © {new Date().getFullYear()} Barbearia Companhia do Bigode.
                </div>
            </div>
        </footer>
    )
}