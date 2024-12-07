import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { saltAndHashPassword } from "@/utils/password";


export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!data.email || !data.password || !data.name || !data.user) {
            return NextResponse.json({ error: "Les champs name, email, password, et user sont obligatoires" }, { status: 400 })
        }

        const newPassword = await saltAndHashPassword(data.password);
        console.log("New hashed password:", newPassword);
        if (!newPassword) {
            return NextResponse.json({ error: "Erreur lors du hachage du mot de passe" }, { status: 500 });
        }

        const dataUser ={
            name: data.name,
            email: data.email,
            password: newPassword,
            role: data.user,
            level:1,
        }

        console.log('user :', dataUser)
        const user = await prisma.user.create({
            data: dataUser
        });

        return NextResponse.json({ message: "succès", data: user }, { status: 201 })

    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", JSON.stringify(error, null, 2));
        return NextResponse.json({ error: "Erreur serveur lors de la création de l'utilisateur" }, { status: 500 });
    }
}