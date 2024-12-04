import Logo from "@/components/logo";
export default function AboutUs() {
  return (
    <main className="flex flex-col">
    <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/about.jpg')" }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">À propos de nous</h1>
        </div>
    </div>

      <div className="w-full max-w-7xl mx-auto p-6 md:p-12">
        {/* Section Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#06806b]">Qui sommes-nous ?</h2>
          <p className="text-lg">
            Chez Gabon Connected, nous nous engageons à fournir des informations fiables et à améliorer l'expérience des citoyens grâce à une plateforme numérique intuitive. Notre mission est de simplifier l'accès à des données cruciales et de transformer la manière dont les informations sont partagées.
          </p>
        </section>

        {/* Section Notre équipe */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/team-member1.jpg" alt="Membre de l'équipe" className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-semibold">Parfait MOUTSINGA</h3>
              <p className="text-[#06806b]">Directeur Général</p>
            </div>
            <div className="text-center">
              <img src="/team-member2.jpg" alt="Membre de l'équipe" className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-semibold">Fleury MBOUMA</h3>
              <p className="text-[#06806b]">Responsable Marketing</p>
            </div>
            <div className="text-center">
              <img src="/team-member3.jpg" alt="Membre de l'équipe" className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-semibold">Larry MBIMBI</h3>
              <p className="text-[#06806b]">Chef de Projet</p>
            </div>
          </div>
        </section>

        {/* Section Mission et Valeurs */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#06806b]">Notre mission et nos valeurs</h2>
          <p className="text-lg mb-4">
            Notre mission est de rendre l'information gouvernementale plus accessible à tous les citoyens, en particulier dans un monde de plus en plus numérique. Nous croyons en la transparence, l'innovation et l'engagement envers la qualité des services.
          </p>
          <p className="text-lg mb-4">
            Nos valeurs fondamentales sont :
          </p>
          <ul className="list-disc pl-6 text-[#06806b]">
            <li>Accessibilité</li>
            <li>Transparence</li>
            <li>Innovation</li>
            <li>Engagement citoyen</li>
          </ul>
        </section>

        {/* Section Contact */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>
          <p className="text-lg mb-4">
            Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter pour plus d'informations.
          </p>
          <a href="mailto:contact@gabonconnected.com" className="text-white bg-[#06806b] px-6 py-3 rounded-lg font-semibold hover:bg-[#046f5b]">
            Contactez-nous
          </a>
        </section>
      </div>

     
    </main>
  );
}

