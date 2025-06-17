
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Calendar } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      city: "Mumbai",
      state: "Maharashtra",
      plan: "Humsafar Gold",
      rating: 5,
      date: "March 2024",
      quote: "Excellent service! The OPD coverage has saved me thousands on medical bills. The customer support team is incredibly responsive and helpful. I highly recommend RTEMPORARY to anyone looking for affordable healthcare.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      city: "Delhi",
      state: "Delhi",
      plan: "Family Care",
      rating: 5,
      date: "February 2024",
      quote: "Perfect for my family of four. The comprehensive coverage gives us peace of mind, and the 24/7 support is outstanding. The enrollment process was smooth and hassle-free.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 3,
      name: "Anjali Devi",
      city: "Kolkata",
      state: "West Bengal",
      plan: "Senior Citizen",
      rating: 5,
      date: "January 2024",
      quote: "As a senior citizen, this plan gives me confidence and excellent medical care. The home visit feature is particularly valuable for someone of my age. Truly grateful for this service.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 4,
      name: "Arjun Patel",
      city: "Ahmedabad",
      state: "Gujarat",
      plan: "Basic Care",
      rating: 4,
      date: "March 2024",
      quote: "Great value for money! Even the basic plan covers all my essential healthcare needs. The medicine discounts alone make it worthwhile. Highly satisfied with the service quality.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 5,
      name: "Sunita Singh",
      city: "Lucknow",
      state: "Uttar Pradesh",
      plan: "Family Care",
      rating: 5,
      date: "December 2023",
      quote: "Outstanding customer service and comprehensive coverage. When my son needed emergency care, the support team guided us through everything. Can't thank RTEMPORARY enough!",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 6,
      name: "Dr. Vikash Gupta",
      city: "Bangalore",
      state: "Karnataka",
      plan: "Humsafar Gold",
      rating: 5,
      date: "February 2024",
      quote: "Even as a doctor, I chose RTEMPORARY for my family's healthcare needs. The plan structure is well-designed and the coverage is comprehensive. Excellent value proposition.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 7,
      name: "Meera Krishnan",
      city: "Chennai",
      state: "Tamil Nadu",
      plan: "Senior Citizen",
      rating: 5,
      date: "January 2024",
      quote: "The specialized senior care plan is exactly what elderly people need. Regular health checkups and priority appointments make healthcare so much more accessible.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 8,
      name: "Rohit Sharma",
      city: "Pune",
      state: "Maharashtra",
      plan: "Basic Care",
      rating: 4,
      date: "March 2024",
      quote: "Simple, affordable, and effective. The basic plan covers all my routine healthcare needs without breaking the bank. Customer service is always helpful and professional.",
      image: "/placeholder-avatar.jpg"
    },
    {
      id: 9,
      name: "Kavita Rao",
      city: "Hyderabad",
      state: "Telangana",
      plan: "Family Care",
      rating: 5,
      date: "November 2023",
      quote: "Best decision we made for our family's health! The comprehensive coverage and easy claim process make healthcare stress-free. Highly recommend to all families.",
      image: "/placeholder-avatar.jpg"
    }
  ];

  const stats = [
    { label: "Average Rating", value: "4.9/5", icon: <Star className="h-5 w-5" /> },
    { label: "Happy Customers", value: "10,000+", icon: <Quote className="h-5 w-5" /> },
    { label: "Cities Served", value: "50+", icon: <MapPin className="h-5 w-5" /> },
    { label: "Customer Retention", value: "95%", icon: <Calendar className="h-5 w-5" /> },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-light-blue to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-healthcare-blue text-white">Customer Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-healthcare-blue">Customers Say</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real experiences from thousands of satisfied customers across India who trust 
              RTEMPORARY for their healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-healthcare-blue mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({testimonial.rating}/5)</span>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <Quote className="h-6 w-6 text-healthcare-blue mb-3 opacity-60" />
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{testimonial.city}, {testimonial.state}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {testimonial.plan}
                          </Badge>
                          <span className="text-xs text-gray-400">
                            {testimonial.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-healthcare-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have transformed their healthcare experience with RTEMPORARY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-healthcare-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="/plans"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-healthcare-blue transition-colors"
            >
              View Our Plans
            </a>
          </div>
        </div>
      </section>

      {/* Review Submission Note */}
      <section className="py-12 bg-healthcare-light-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Story to Share?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear about your experience with RTEMPORARY. Your feedback helps us serve you better 
            and helps others make informed decisions about their healthcare.
          </p>
          <p className="text-sm text-gray-500">
            Contact us at <strong>support@rtemporary.com</strong> to share your testimonial.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
