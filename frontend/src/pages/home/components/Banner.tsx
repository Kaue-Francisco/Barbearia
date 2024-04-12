import backgroundImage from "../../../images/fundo.png";

export default function Banner() {
    return (
        <div className="relative w-full h-[87vh]">
        <img alt="Image" className="object-cover w-full h-full" src={backgroundImage} />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Adicionado para diminuir o brilho */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-center bg-black/40 backdrop-filter">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl/none text-gray-100 dark:text-gray-900">
              COMPANHIA DO BIGODE
            </h2>
            <p className="text-gray-300 md:text-3xl lg:text-2xl xl:text-3xl dark:text-gray-500">
              Barbearia
            </p>
          </div>
          <div className="mt-14">
          <button
          className="inline-flex h-12 items-center rounded-md bg-orange-500 px-4 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-orange-500/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          onClick={() => {
            // Add your click event handler logic here
          }}
          >
              Agende seu horário!
            </button>
          </div>
        </div>
      </div>
    )
}