import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { saltAndHashPassword } from "@/utils/password";


export async function POST(request: Request) {
    try {
        const data = await request.json();

        console.log('data api: ', data)

        if (!data.email || !data.password || !data.name) {
            return NextResponse.json({ error: "name , email, password obligatoie" }, { status: 400 })
        }

        const newPassword = await saltAndHashPassword(data.password);
        console.log("New hashed password:", newPassword);
        if (!newPassword) {
            return NextResponse.json({ error: "Erreur lors du hachage du mot de passe" }, { status: 500 });
        }

        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: newPassword,
                role: "user",
                level: 1
            }
        });

        return NextResponse.json({ message: "succès", data: user }, { status: 201 })

    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        return NextResponse.json({ error: "Erreur serveur lors de la création de l'utilisateur" }, { status: 500 });
    }
}