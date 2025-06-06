"use client";

import { useEffect, useState } from "react";

export default function Perfil() {
  const [usuario, setUsuario] = useState<{ nome: string; email: string } | null>(null);

  useEffect(() => {
    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");
    if (nome && email) {
      setUsuario({ nome, email });
    }
  }, []);

  if (!usuario) {
    return <p className="text-center mt-10">Carregando dados do perfil...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Perfil do Usuário</h1>
      <div className="text-gray-800 space-y-2">
        <p><strong>Nome:</strong> {usuario.nome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
      </div>
    </div>
  );
}
