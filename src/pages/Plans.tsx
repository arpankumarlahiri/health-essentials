import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Download } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      id: "humsafar-gold",
      name: "Humsafar Gold",
      category: "Individual",
      price: "₹1,200",
      period: "/month",
      description:
        "Comprehensive OPD coverage for individuals with premium benefits",
      popular: true,
      features: {
        "OPD Visits": "Unlimited",
        "Lab Tests": "Up to ₹5,000/month",
        "Medicine Discounts": "20% off",
        "Specialist Consultations": "Included",
        "Emergency Support": "24/7",
        "Health Checkups": "Annual",
        "Dental Care": "Basic",
        "Vision Care": "Basic",
        "Home Visits": "Not included",
        Ambulance: "Not included",
      },
    },
    {
      id: "family-care",
      name: "Family Care",
      category: "Family",
      price: "₹2,500",
      period: "/month",
      description: "Complete family health protection for up to 4 members",
      popular: false,
      features: {
        "OPD Visits": "Unlimited (4 members)",
        "Lab Tests": "Up to ₹8,000/month",
        "Medicine Discounts": "25% off",
        "Specialist Consultations": "Included",
        "Emergency Support": "24/7 Priority",
        "Health Checkups": "Bi-annual",
        "Dental Care": "Comprehensive",
        "Vision Care": "Comprehensive",
        "Home Visits": "Emergency only",
        Ambulance: "Included",
      },
    },
    {
      id: "senior-citizen",
      name: "Senior Citizen",
      category: "Senior",
      price: "₹800",
      period: "/month",
      description: "Specialized care designed for elderly members (60+ years)",
      popular: false,
      features: {
        "OPD Visits": "Unlimited",
        "Lab Tests": "Up to ₹4,000/month",
        "Medicine Discounts": "30% off",
        "Specialist Consultations": "Priority booking",
        "Emergency Support": "24/7 Senior helpline",
        "Health Checkups": "Quarterly",
        "Dental Care": "Basic",
        "Vision Care": "Enhanced",
        "Home Visits": "Monthly",
        Ambulance: "Included",
      },
    },
    {
      id: "basic-care",
      name: "Basic Care",
      category: "Individual",
      price: "₹500",
      period: "/month",
      description: "Essential OPD coverage for budget-conscious individuals",
      popular: false,
      features: {
        "OPD Visits": "Up to 10/month",
        "Lab Tests": "Up to ₹2,000/month",
        "Medicine Discounts": "10% off",
        "Specialist Consultations": "Limited",
        "Emergency Support": "Business hours",
        "Health Checkups": "Annual",
        "Dental Care": "Not included",
        "Vision Care": "Not included",
        "Home Visits": "Not included",
        Ambulance: "Not included",
      },
    },
  ];

  const allFeatures = [
    "OPD Visits",
    "Lab Tests",
    "Medicine Discounts",
    "Specialist Consultations",
    "Emergency Support",
    "Health Checkups",
    "Dental Care",
    "Vision Care",
    "Home Visits",
    "Ambulance",
  ];

  const handleDownloadBrochure = () => {
    // In a real application, this would download a PDF
    alert(
      "PDF brochure download will be implemented. For now, please contact us for detailed plan information."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-healthcare-light-blue to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect{" "}
              <span className="text-healthcare-blue">Health Plan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Compare our comprehensive OPD healthcare plans and find the one
              that best suits your needs and budget.
            </p>
            <Button
              onClick={handleDownloadBrochure}
              variant="outline"
              className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-light-blue"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Complete Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative hover:shadow-xl transition-all ${
                  plan.popular ? "ring-2 ring-healthcare-blue shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-healthcare-blue text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {plan.category}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-healthcare-blue">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {Object.entries(plan.features)
                      .slice(0, 5)
                      .map(([feature, value]) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-healthcare-green mr-3 flex-shrink-0" />
                          <span className="text-gray-600">
                            <strong>{feature}:</strong> {value}
                          </span>
                        </li>
                      ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/contact" state={{ selectedPlan: plan.name }}>
                      Choose {plan.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Plan Comparison
            </h2>
            <p className="text-lg text-gray-600">
              Compare all features across our healthcare plans
            </p>
          </div>

          {/* Mobile-friendly comparison */}
          <div className="block lg:hidden space-y-8">
            {plans.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    {plan.popular && (
                      <Badge className="bg-healthcare-blue">Popular</Badge>
                    )}
                  </CardTitle>
                  <p className="text-2xl font-bold text-healthcare-blue">
                    {plan.price}
                    {plan.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {allFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-700">
                          {feature}
                        </span>
                        <span className="text-gray-600">
                          {plan.features[feature] || "Not included"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center p-4">
                      <div className="space-y-2">
                        <div className="font-bold text-gray-900">
                          {plan.name}
                        </div>
                        {plan.popular && (
                          <Badge className="bg-healthcare-blue text-xs">
                            Popular
                          </Badge>
                        )}
                        <div className="text-2xl font-bold text-healthcare-blue">
                          {plan.price}
                          <span className="text-sm text-gray-500">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr
                    key={feature}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 font-medium text-gray-700">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-4 text-center">
                        {plan.features[feature] ? (
                          <span className="text-gray-600">
                            {plan.features[feature]}
                          </span>
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td className="p-4 font-semibold">Choose Plan</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="p-4 text-center">
                      <Button asChild size="sm" className="w-full">
                        <Link to="/contact" state={{ selectedPlan: plan.name }}>
                          Select
                        </Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-healthcare-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our healthcare experts are here to help you choose the perfect plan
            for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-healthcare-blue hover:bg-gray-100"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-healthcare-blue hover:bg-gray-100"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
