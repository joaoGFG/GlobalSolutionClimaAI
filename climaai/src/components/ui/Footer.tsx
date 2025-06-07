import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#3366cc] text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">

      {/* Sobre */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-lg font-semibold mb-1">Sobre</h2>
        <p className="text-sm">
          Projeto desenvolvido para a conclusão do semestre com o objetivo de ajudar pessoas em catástrofes.

          Julia Damasceno Busso – RM560293

          João Gabriel Fuchs Grecco – RM559863 – 1TDSPB

          Felipe Anselmo Soares Costa – RM560661 – 1TDSPB
        </p>
      </div>

      {/* Logos */}
      <div className="flex gap-4">
        <Image
          src="/img/logo.png"
          alt="Logo do Projeto"
          width={48}
          height={48}
        />
        <Image
          src="/img/fiap.png"
          alt="Logo FIAP"
          width={48}
          height={48}
        />
      </div>
    </footer>
  )
}
 