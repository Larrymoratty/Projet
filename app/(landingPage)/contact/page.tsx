import React from 'react'

export default function Contact() {
  return (
    <main className="flex flex-col">
     
      <div className="bg-cover bg-center h-72" style={{ backgroundImage: "url('/contact-background.jpg')" }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">Nous Contacter</h1>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto p-6 md:p-12">
        {/* Section Formulaire de Contact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Envoyez-nous un message</h2>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Votre nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06806b]"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Votre e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06806b]"
                  placeholder="Entrez votre e-mail"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-semibold text-gray-700">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06806b]"
                placeholder="Entrez le sujet"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Votre message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06806b]"
                placeholder="Écrivez votre message ici"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#06806b] text-white font-semibold rounded-lg hover:bg-[#046f5b] focus:outline-none focus:ring-2 focus:ring-[#06806b]"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </section>

        {/* Section Informations supplémentaires */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Nos Informations de Contact</h2>
          <p className="text-lg mb-4">
            Vous pouvez également nous contacter par téléphone ou par courrier postal. Voici nos coordonnées :
          </p>
          <div className="space-y-4">
            <div>
              <strong className="font-semibold text-lg">Téléphone :</strong>
              <p className="text-lg">+241 01 23 45 67</p>
            </div>
            <div>
              <strong className="font-semibold text-lg">E-mail :</strong>
              <a href="mailto:contact@gabonconnected.com" className="text-lg text-blue-500 hover:text-blue-700">
                contact@gabonconnected.com
              </a>
            </div>
            <div>
              
            </div>
          </div>
        </section>
      </div>

      
    </main>
  );
}
