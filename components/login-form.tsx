'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
      setError(""); // Connexion réussie
      setLoading(false)
      router.push("/dashboard");
    }
  };
  
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle 
          className="text-2xl flex item center, color:white text-align:center">Connexion</CardTitle>
        <CardDescription>
          Entrez votre email ci-dessous pour vous connecter à votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Mot de passe oublié?
              </Link>
            </div>
            <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full bg-[#06806b] hover:bg-[#06806b]/50">
            Connexion
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;avez pas encore un compte?{" "}
          <Link href="/inscription" className="underline color:blue">
            S'inscrire
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
