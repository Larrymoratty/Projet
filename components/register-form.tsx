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
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners"


export function RegisterForm() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const router = useRouter();

  const handleSubmit = async () =>{
    setLoading(true);
    try{
      const data= {
        email,
        name,
        password
      }

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const dataResponse = await response.json();

      if(!response.ok) {
        console.log('error :', dataResponse)
      }

      console.log('data user :', dataResponse)
      setEmail('')
      setPassword('')
      setName('')
      router.push("/connexion");

    }catch(error){
      console.log('error catch:', error)
    } finally {
      setLoading(false)
    }
  }

  
  useEffect(()=>{
    const verified = !email || !name || !password;
    setDisabledButton(verified)
    
  },[email, name, password])


  return (
    <Card className="mx-auto max-w-sm my-5">
      <CardHeader>
        <CardTitle 
          className="text-2xl flex item center, color:white text-align:center">Inscription</CardTitle>
        <CardDescription>
          Entrez votre email ci-dessous pour créer votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="email">Nom(s)</Label>
            <Input
              id="name"
              type="text"
              placeholder="Jhon Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-9"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              required
              className="h-9"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
            </div>
            <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)}  type="password" required className="h-9" />
          </div>
          <Button disabled={disabledButton} onClick={handleSubmit} type="submit" className="w-full bg-[#06806b] hover:bg-[#06806b]/50">
            {loading ? <BeatLoader size={10} color="white" /> : "Inscription"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous avez déjà un compte?{" "}
          <Link href="/connexion" className="underline color:blue">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
