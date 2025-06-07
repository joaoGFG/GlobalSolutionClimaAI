"use client";

import { useAuth } from "../../contexts/AuthContext";

export default function Perfil() {
  const { nome, email } = useAuth();

  if (!nome || !email) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-center">Carregando dados do perfil...</p>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center p-4">

      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Perfil do Usuário
        </h1>
        <div className="space-y-2 text-gray-800">
          <p>
            <strong>Nome:</strong> {nome}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
      
    </div>
  );
}