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
import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false, // Utilisé pour gérer la redirection manuellement
      email,
      password,
    });
    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false)
    } else {
      setError("Connected"); // Connexion réussie
      setLoading(false)
      router.push("/dashboard");
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #3AA17E, #FFFFFF)",
      }}
    >
      {/* Section Gabon Connected en arrière-plan */}
      <div className="absolute inset-0 flex justify-center items-center h-full">
        <p className="flex flex-col items-center font-bold text-9xl text-white opacity-20 text-center leading-[1.2]">
          <span className="text-[#FFFFFF]">Gabon</span>
          <span className="text-[#228B22]">Connected</span>
        </p>
      </div>

      {/* Section Formulaire */}
      <Card className="relative bg-white shadow-lg max-w-sm w-full mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-gray-800">
            Connexion
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Champ Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="gabonconnected@gmail.com"
                required
                className="w-full"
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <Link
                  href="#"
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Mot de passe oublié?
                </Link>
              </div>
              
              <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
            </div>

            {/* Boutons */}
            
            <Button onClick={handleSubmit} type="submit" className="w-full bg-[#06806b] hover:bg-[#06806b]/50">
              Connexion
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} /> Connexion avec Google
            </Button>
          </div>

          {/* Lien vers l'inscription */}
          <div className="mt-4 text-center text-sm">
            Vous n&apos;avez pas encore un compte?{" "}
            <Link
              href="/signup"
              className="text-blue-600 underline hover:text-blue-800"
            >
              S'inscrire
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
