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

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm my-auto mt-5">
      <CardHeader>
        <CardTitle 
          className="text-2xl flex item center, color:white text-align:center"
          font-family="cambria, sans-serif">Connexion</CardTitle>
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
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Connexion
          </Button>
          <Button variant="outline" className="w-full">
            Connexion avec Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;avez pas encore un compte?{" "}
          <Link href="#" className="underline color:blue">
            S'inscrire
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
