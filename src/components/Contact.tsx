import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to give your car the treatment it deserves? Contact us today!
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First Name" className="h-12" />
                </div>
                <div>
                  <Input placeholder="Last Name" className="h-12" />
                </div>
              </div>
              
              <div>
                <Input type="email" placeholder="Email Address" className="h-12" />
              </div>
              
              <div>
                <Input type="tel" placeholder="Phone Number" className="h-12" />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Tell us about your car and what services you're interested in..." 
                  rows={6}
                />
              </div>
              
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-6">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <h3 className="text-3xl mb-8">Visit Us</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Location</h4>
                  <p className="text-gray-600">
                    123 Auto Care Drive<br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Phone</h4>
                  <p className="text-gray-600">
                    (555) 123-4567<br />
                    Mon-Sat: 8AM - 6PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Email</h4>
                  <p className="text-gray-600">
                    info@firstgearauto.com<br />
                    support@firstgearauto.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <MapPin className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
