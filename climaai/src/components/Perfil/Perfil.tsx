"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; 

export default function Perfil() {
  const { nome } = useAuth();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  if (!nome || !email) {
    return <p className="text-center mt-10">Carregando dados do perfil...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Perfil do Usuário</h1>
      <div className="text-gray-800 space-y-2">
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
}
