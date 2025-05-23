import React from "react";
import Head from "next/head";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>ReCure Physiotherapy Clinic – Vapi</title>
        <meta
          name="description"
          content="ReCure Physiotherapy Clinic led by Dr. Mittal V Baish in Vapi offers expert care in physiotherapy, rehabilitation, and pain management."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 relative">
        {/* WhatsApp Floating CTA */}
        <a
          href="https://wa.me/916355676711"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/whatsapp.svg" alt="Chat on WhatsApp" className="w-6 h-6" />
        </a>

        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to ReCure Physiotherapy Clinic
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Led by Dr. Mittal V Baish (PT) – BPT | DOMTP | Diploma in Master of Chiropractic
          </p>
          <span className="text-sm">Reg. No: 2021/08/PT/009621</span>
          <div className="mt-6">
            <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl">
              Book Appointment
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-12 bg-blue-100">
          <h2 className="text-3xl font-semibold text-center mb-8">Areas of Specialization</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {["Orthopaedic Rehabilitation","Neurological Rehabilitation","Geriatric Rehabilitation","Cardiac Rehabilitation","Post-Surgical Care","Sports Injuries","Pain Management","Osteopathy","Pilates","Dry Needling","Ergonomics","Biomechanical Correction"].map(service => (
              <Card key={service} className="hover:shadow-xl transition-all">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-2">{service}</h3>
                  <p className="text-sm text-gray-600">Professional and personalized treatment plans for effective recovery.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Meet Dr. Mittal V Baish</h2>
            <p className="text-gray-700 mb-6">
              With years of experience and advanced qualifications in chiropractic and rehabilitation therapy, Dr. Mittal is committed to delivering evidence-based physiotherapy and long-lasting recovery to every patient.
            </p>
            <img
              src="/images/doctor-placeholder.jpg"
              alt="Dr. Mittal V Baish"
              className="mx-auto rounded-2xl w-64 h-64 object-cover shadow-lg"
            />
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-6 py-12 bg-blue-100">
          <h2 className="text-3xl font-semibold text-center mb-8">Health & Recovery Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Card key={id} className="hover:shadow-xl transition-all">
                <CardContent className="p-4">
                  <h3 className="text-xl font-medium mb-2">Blog Title {id}</h3>
                  <p className="text-sm text-gray-600 mb-2">Brief summary of the blog post. Helpful tips, recovery stories or health awareness.</p>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-12 bg-blue-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-6 text-gray-600">Have a question or want to book a session? Reach out to us.</p>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-blue-800">
                <Phone size={20} /> <span>+91 63556 76711</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-800">
                <Mail size={20} /> <span>info@recurevapi.com</span>
              </div>
            </div>

            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-xl mx-auto"
            >
              <Input name="name" placeholder="Full Name" required />
              <Input name="email" placeholder="Email Address" type="email" required />
              <Input name="phone" placeholder="Phone Number" />
              <Input name="message" placeholder="Message" className="col-span-2" required />
              <Button
                className="col-span-2 bg-blue-600 text-white hover:bg-blue-700"
                type="submit"
                formAction="/thank-you"
              >
                Send Message
              </Button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 bg-blue-200 text-sm text-blue-900">
          © {new Date().getFullYear()} ReCure Physiotherapy Clinic, Vapi. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Home;

