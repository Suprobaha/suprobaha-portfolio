import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-24 px-6">
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 p-4 flex justify-center gap-6">
  <a href="#projects" className="text-gray-800 hover:underline font-medium">Projects</a>
  <a href="#skills" className="text-gray-800 hover:underline font-medium">Skills</a>
  <a href="#certifications" className="text-gray-800 hover:underline font-medium">Certifications</a>
  <a href="#contact" className="text-gray-800 hover:underline font-medium">Contact</a>
</nav>

      <header className="text-center mb-12">
      <h1 className="text-3xl md:text-5xl font-bold">
      Suprobaha Chowdhury</h1>
        <p className="text-lg mt-2">IT Engineer | Microsoft 365 | Python | Web & Mobile Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Suprobaha/MedVoiceBridge.git" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/suprobaha-chowdhury-5b959b195/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </header>

      <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">Projects</h2>
  <div className="border rounded-xl shadow-md p-4 mb-4 transition-transform hover:scale-105 hover:shadow-lg">

    <h3 className="text-xl font-bold">MedVoiceBridge</h3>
    <p className="mt-2">
      A healthcare web app built to support elderly users with voice interaction using React.js, Node.js, Express.js, MongoDB, and Web Speech API.
    </p>
    <a
      href="https://github.com/Suprobaha/MedVoiceBridge.git"
      className="text-blue-600 underline mt-2 inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub Repository
    </a>
  </div>
</section>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
  {[
    'Microsoft 365', 'Python', 'Java', 'PHP',
    'React', 'Node.js', 'MongoDB', 'MySQL',
    'Power BI', 'Azure', 'AWS', 'GitHub'
  ].map(skill => (
    <div key={skill} className="bg-gray-100 px-4 py-2 rounded text-center shadow-sm">
      {skill}
    </div>
  ))}
</div>

      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Microsoft Certified: Azure Fundamentals (Mar 2025)</li>
          <li>MS-900: Microsoft 365 Fundamentals (May 2025)</li>
          <li>AWS Certified Cloud Practitioner (2023)</li>
          <li>IBM Python for Web Development (2023)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: suprobaha.rupu@gmail.com</p>
        <p>Phone: +44 7407 613275</p>
        <a
  href="/resume.pdf"
  className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-xl shadow hover:scale-105 transition"
  download
>
  📄 Download Resume
</a>

      </section>
    </div>
  );
}
