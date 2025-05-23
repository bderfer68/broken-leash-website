import ContactForm from "@/components/contact-form"
import PhoneSubscribe from "@/components/phone-subscribe"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-brokenYellow mb-12 text-center animate-on-scroll tracking-wide">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <ContactForm />
          </div>

          <div className="animate-on-scroll">
            <PhoneSubscribe />
          </div>
        </div>
      </div>
    </div>
  )
}
