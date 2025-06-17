
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target, Calendar, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "4+", label: "Years of Service", icon: <Calendar className="h-6 w-6" /> },
    { number: "50+", label: "Partner Hospitals", icon: <Heart className="h-6 w-6" /> },
    { number: "24/7", label: "Customer Support", icon: <Award className="h-6 w-6" /> },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-healthcare-blue" />,
      title: "Compassionate Care",
      description: "We believe healthcare is a fundamental right, not a privilege. Our plans are designed with empathy and understanding."
    },
    {
      icon: <Target className="h-8 w-8 text-healthcare-green" />,
      title: "Accessibility First",
      description: "Making quality healthcare accessible to everyone through affordable pricing and comprehensive coverage."
    },
    {
      icon: <Award className="h-8 w-8 text-healthcare-blue" />,
      title: "Excellence & Trust",
      description: "We maintain the highest standards of service and have built lasting relationships based on trust and reliability."
    },
    {
      icon: <Users className="h-8 w-8 text-healthcare-green" />,
      title: "Community Focus",
      description: "Supporting communities across India with localized healthcare solutions and dedicated customer service."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "RTEMPORARY Multiservices Pvt. Ltd. was established in Salt Lake, Kolkata with a vision to revolutionize healthcare accessibility."
    },
    {
      year: "2021",
      title: "First 1,000 Customers",
      description: "Reached our first milestone of serving 1,000 satisfied customers across West Bengal."
    },
    {
      year: "2022",
      title: "Pan-India Expansion",
      description: "Expanded our services nationwide, establishing partnerships with hospitals and clinics across major Indian cities."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched our digital platform for seamless customer experience and introduced 24/7 online support."
    },
    {
      year: "2024",
      title: "10,000+ Members",
      description: "Proud to serve over 10,000 customers with our comprehensive OPD healthcare plans."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-light-blue to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-healthcare-blue text-white">About RTEMPORARY</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Healthcare Through <span className="text-healthcare-blue">Direct Selling</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Since 2020, we've been on a mission to make quality healthcare accessible and affordable 
              for everyone through innovative OPD membership plans and dedicated customer service.
            </p>
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Headquartered in Salt Lake, Kolkata, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-healthcare-blue mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-healthcare-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-healthcare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To democratize healthcare by providing affordable, comprehensive OPD coverage through 
                  innovative direct selling models. We strive to bridge the gap between quality healthcare 
                  and accessibility, ensuring every individual and family can access the medical care they deserve.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-healthcare-green mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become India's most trusted healthcare partner, transforming lives through accessible 
                  medical services. We envision a future where financial constraints never prevent anyone 
                  from receiving quality healthcare, supported by our nationwide network of care providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-healthcare-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a vision in 2020 to serving thousands across India - here's our story of growth and impact.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-healthcare-blue h-full"></div>
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-healthcare-blue text-white">
                          {item.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-healthcare-blue rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">RT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership Message
            </h2>
          </div>
          <blockquote className="text-xl text-gray-600 italic leading-relaxed mb-8">
            "Healthcare should never be a luxury. When we founded RTEMPORARY in 2020, we had a simple yet 
            powerful vision: to make quality healthcare accessible to every Indian family. Today, as we serve 
            over 10,000 customers, we remain committed to this mission. Every plan we design, every service 
            we offer, is crafted with the understanding that behind every policy is a person, a family, 
            and their dreams for a healthier future."
          </blockquote>
          <div className="text-center">
            <p className="font-semibold text-gray-900">RTEMPORARY Leadership Team</p>
            <p className="text-gray-600">Founders & Healthcare Advocates</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
