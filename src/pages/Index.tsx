
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Users, Clock, Heart, Star } from "lucide-react";

const Index = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-healthcare-blue" />,
      title: "Save Money",
      description: "Affordable healthcare plans starting from just ₹500/month"
    },
    {
      icon: <Users className="h-8 w-8 text-healthcare-green" />,
      title: "Trusted by Thousands",
      description: "Over 10,000+ satisfied customers across India"
    },
    {
      icon: <Clock className="h-8 w-8 text-healthcare-blue" />,
      title: "Get Expert Help",
      description: "24/7 customer support and medical assistance"
    }
  ];

  const topPlans = [
    {
      name: "Humsafar Gold",
      description: "Comprehensive OPD coverage for individuals",
      price: "₹1,200/month",
      features: ["Unlimited OPD visits", "Lab tests included", "Medicine discounts"],
      popular: true
    },
    {
      name: "Family Care",
      description: "Complete family health protection",
      price: "₹2,500/month",
      features: ["Up to 4 family members", "Emergency support", "Health checkups"],
      popular: false
    },
    {
      name: "Senior Citizen",
      description: "Specialized care for elderly members",
      price: "₹800/month",
      features: ["Age-specific benefits", "Priority appointments", "Home visits"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      city: "Mumbai",
      plan: "Humsafar Gold",
      quote: "Excellent service! The OPD coverage has saved me thousands on medical bills.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      city: "Delhi",
      plan: "Family Care",
      quote: "Perfect for my family. The customer support is outstanding and very helpful.",
      rating: 5
    },
    {
      name: "Anjali Devi",
      city: "Kolkata",
      plan: "Senior Citizen",
      quote: "As a senior citizen, this plan gives me peace of mind and great medical care.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-light-blue to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Affordable OPD Healthcare Plans for{" "}
              <span className="text-healthcare-blue">Everyone</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get comprehensive OPD coverage with expert medical support. 
              Trusted by thousands across India since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-healthcare-blue hover:bg-blue-600 text-lg px-8 py-3">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-light-blue text-lg px-8 py-3">
                <Link to="/plans">View All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RTEMPORARY?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make healthcare accessible and affordable for everyone with our comprehensive OPD plans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Plans Section */}
      <section className="py-16 bg-healthcare-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Most Popular Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed healthcare plans that suit your needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${plan.popular ? 'ring-2 ring-healthcare-blue shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-healthcare-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-healthcare-blue">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-healthcare-green mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link to="/contact">Choose This Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-healthcare-blue text-healthcare-blue hover:bg-white">
              <Link to="/plans">View All Plans & Compare</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from thousands of satisfied customers across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.city} • {testimonial.plan}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-light-blue">
              <Link to="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-healthcare-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust RTEMPORARY for their healthcare needs. 
            Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-healthcare-blue hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-blue text-lg px-8 py-3">
              <Link to="/plans">Browse Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
