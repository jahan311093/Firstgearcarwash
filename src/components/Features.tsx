import { Clock, Award, ThumbsUp, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most services completed within 2-4 hours"
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Trained experts with years of experience"
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "100% satisfaction or we'll make it right"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available to answer your questions"
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Why Choose First Gear?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
