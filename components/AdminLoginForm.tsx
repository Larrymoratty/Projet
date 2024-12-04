import React from "react";

export default function AdminLoginForm() {
  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Connexion Admin</h1>
      <input
        type="email"
        placeholder="Adresse email"
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Connexion
      </button>
    </form>
  );
}
