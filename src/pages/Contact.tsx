
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || "";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: selectedPlan,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you within 24 hours with your free quote.");
      setFormData({ name: "", email: "", phone: "", plan: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Numbers",
      details: ["+91 XXXXX-XXXXX", "+91 XXXXX-XXXXX"],
      action: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: ["support@rtemporary.com"],
      action: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office Address",
      details: ["Salt Lake, Kolkata", "West Bengal, India"],
      action: "Visit us during business hours"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      action: "24/7 emergency support available"
    }
  ];

  const plans = [
    "Basic Care",
    "Humsafar Gold", 
    "Family Care",
    "Senior Citizen"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-healthcare-light-blue to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-healthcare-blue text-white">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Our <span className="text-healthcare-blue">Healthcare Experts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to secure your health with affordable OPD plans? Get your free quote today 
              and speak with our experienced healthcare consultants.
            </p>
            {selectedPlan && (
              <div className="inline-flex items-center bg-healthcare-green text-white px-4 py-2 rounded-lg">
                <span className="mr-2">✓</span>
                You've selected: <strong className="ml-1">{selectedPlan}</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="h-6 w-6 text-healthcare-blue mr-3" />
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our healthcare experts will contact you within 24 hours 
                  with a personalized quote and consultation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX-XXXXX"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="plan" className="text-sm font-medium text-gray-700">
                        Interested Plan
                      </Label>
                      <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a plan (optional)" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {plans.map((plan) => (
                            <SelectItem key={plan} value={plan}>
                              {plan}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message or Questions
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your healthcare needs, family size, specific requirements, or any questions you have..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-healthcare-blue hover:bg-blue-600 text-white font-semibold py-3"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Quote & Consultation"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
                <p className="text-gray-600">
                  Multiple ways to reach our healthcare experts
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-healthcare-light-blue rounded-lg flex items-center justify-center text-healthcare-blue mr-4">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                      <p className="text-xs text-gray-500 mt-1">
                        {info.action}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="shadow-lg bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quick WhatsApp Support
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant answers to your questions via WhatsApp
                </p>
                <Button
                  onClick={() => {
                    const message = "Hi! I'm interested in RTEMPORARY's OPD health plans. Could you help me?";
                    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="shadow-lg bg-healthcare-light-blue border-healthcare-blue">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-healthcare-blue mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  24-Hour Response Promise
                </h3>
                <p className="text-sm text-gray-600">
                  We guarantee to respond to all inquiries within 24 hours. 
                  For urgent matters, call us directly or use WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section - Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Salt Lake, Kolkata for easy accessibility
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Interactive Map</p>
              <p className="text-gray-500 text-sm">Salt Lake, Kolkata, West Bengal</p>
              <p className="text-gray-500 text-sm mt-2">
                Google Maps integration would be implemented here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
