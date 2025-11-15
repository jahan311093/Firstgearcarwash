import { Sparkles, Droplet, Shield, Car } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Premium Polishing",
    description: "High-end polishing services that restore your car's original shine and protect the paint from environmental damage.",
    image: "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwb2xpc2h8ZW58MXx8fHwxNzYzMTE4MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Droplet,
    title: "Deep Cleaning",
    description: "Thorough interior and exterior cleaning that removes dirt, grime, and contaminants from every corner of your vehicle.",
    image: "https://images.unsplash.com/photo-1761312834150-4beefff097a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3YXNofGVufDF8fHx8MTc2MzE3ODY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Shield,
    title: "Paint Protection",
    description: "Advanced ceramic coating and wax treatments that provide long-lasting protection and incredible gloss.",
    image: "https://images.unsplash.com/photo-1761934658038-d0e6792378b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBjYXJlfGVufDF8fHx8MTc2MzIwNDMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Car,
    title: "Interior Detailing",
    description: "Complete interior restoration including upholstery cleaning, leather conditioning, and odor elimination.",
    image: "https://images.unsplash.com/photo-1656077885491-3922185f3932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MzEzMjI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive car care solutions tailored to keep your vehicle in pristine condition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 p-3 rounded-lg inline-block">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
