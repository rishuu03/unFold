import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-40 pb-24 px-8 max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">Privacy Policy</h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            Your data is yours. We protect it.
          </p>
        </div>

        <div className="space-y-12">
          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">Data Collection</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other information you choose to provide.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">How We Use Your Data</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We use the information we collect about you to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-bold">Sharing of Information</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With Drivers to enable them to provide the Services you request. For example, we share your name, photo (if you provide one), average User rating given by Drivers, and pickup and/or drop-off locations with Drivers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
