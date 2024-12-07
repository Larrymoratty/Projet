'use client'
import React, { useEffect, useState } from "react"; // Import de React et useState
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = { email, name, password, user: 'user' };
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const dataResponse = await response.json();
      if (!response.ok) {
        console.log('error :', dataResponse);
      }
      console.log('data user :', dataResponse);
      router.push("/connexion");
    } catch (error) {
      console.log('error catch:', error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    const verified = !email || !name || !password;
    setDisabledButton(verified)

  }, [email, name, password])


  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: "linear-gradient(to bottom, #3AA17E, #FFFFFF)",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center h-full">
        <p className="flex flex-col gap-0 font-bold text-8xl md:text-9xl text-white opacity-20 text-center leading-[1.2]">
          Gabon
          <span className="ml-4 text-[#228B22]">Connected</span>
        </p>
      </div>

      <Card className="relative bg-white shadow-lg mx-auto max-w-sm my-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-gray-800">
            Inscription
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Remplissez les champs ci-dessous pour créer un compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                type="text"
                placeholder="Entrez votre nom complet"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="Entrez un mot de passe sécurisé"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button disabled={disabledButton} onClick={handleSubmit} type="submit" className="w-full bg-[#06806b] hover:bg-[#06806b]/50">
              {loading ? <BeatLoader size={10} color="white" /> : "Inscription"}
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => signIn("google")}
            >
              <FcGoogle size={20} /> Inscription avec Google
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Vous avez déjà un compte?{" "}
            <Link href="/login" className="underline text-blue-600">
              Se connecter
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
