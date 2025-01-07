'use client'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-white min-h-screen font-sans relative z-10">
      <Head>
        <title>Mi Startup de Desarrollo de Software</title>
        <meta name="description" content="Soluciones innovadoras para tu negocio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex items-center justify-center py-20 bg-gradient-to-r from-blue-900/70 to-indigo-800/70">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Transforma tu negocio con nuestro software</h1>
          <p className="text-lg sm:text-xl mb-8">Soluciones personalizadas y escalables para empresas modernas.</p>
          <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-xl transition-all">
            Solicita una Demo
          </a>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-12">¿Por qué elegirnos?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:rotate-1 transition-all">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Escalabilidad</h3>
            <p>Tu solución crecerá junto con tu negocio. No te preocupes por el futuro.</p>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:rotate-1 transition-all">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Innovación</h3>
            <p>Implementamos las últimas tecnologías para tu éxito. Siempre estamos a la vanguardia.</p>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:rotate-1 transition-all">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Soporte 24/7</h3>
            <p>Estamos siempre aquí para ayudarte. Nuestro equipo está disponible en todo momento.</p>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-16 bg-gray-800/50">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Lo que dicen nuestros clientes</h2>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="italic text-lg text-gray-300 mb-4">
            "Este software ha transformado la forma en que operamos. ¡Altamente recomendable!"
          </blockquote>
          <footer className="text-xl font-semibold text-blue-400">- Cliente Satisfecho</footer>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-16 px-4 bg-gray-900/70">
        <h2 className="text-center text-3xl font-bold text-white mb-12">Contáctanos</h2>
        <div className="max-w-lg mx-auto bg-gray-800/80 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Tu nombre" className="w-full p-4 bg-gray-700/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Tu correo" className="w-full p-4 bg-gray-700/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <textarea placeholder="Mensaje" className="w-full p-4 bg-gray-700/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transition-all">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800/80 py-8 text-center text-gray-400">
        <p>&copy; 2024 Mi Startup de Desarrollo de Software. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
