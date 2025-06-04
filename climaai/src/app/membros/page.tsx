import Image from "next/image";
import Link from "next/link";

const membros = [
  {
    nome: "João Silva",
    imagem: "/img/membros/joao.jpg",
    github: "https://github.com/joaosilva",
    linkedin: "https://linkedin.com/in/joaosilva",
  },
  {
    nome: "Maria Oliveira",
    imagem: "/img/membros/maria.jpg",
    github: "https://github.com/mariaoliveira",
    linkedin: "https://linkedin.com/in/mariaoliveira",
  },
  {
    nome: "Julia Damasceno Busso - RM 560293",
    imagem: "/img/julia.png",
    github: "https://github.com/juliabusso",
    linkedin: "https://www.linkedin.com/in/juliadbusso/",
  },
  
];

export default function MembrosPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <h1 className="text-3xl font-bold text-center mb-10">Nossa Equipe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition"
          >
            <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-black">
              <Image
                src={membro.imagem}
                alt={membro.nome}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{membro.nome}</h2>
            <div className="flex gap-4">
              <Link
                href={membro.github}
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub
              </Link>
              <Link
                href={membro.linkedin}
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
