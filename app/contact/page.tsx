export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl py-16 text-center">
      <h2 className="text-3xl font-bold text-purple-700">Contact Us 💌</h2>
      <p className="mt-3 text-gray-600">Have feedback or want to collaborate? Reach out to us anytime!</p>
      <a
        href="mailto:styleyourwaystudio@gmail.com"
        className="mt-6 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      >
        Email Us 📧
      </a>
    </section>
  );
}
