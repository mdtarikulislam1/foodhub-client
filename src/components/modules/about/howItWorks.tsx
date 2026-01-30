"use client";

import { CheckCircle2, ShoppingBag, Truck, } from "lucide-react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "Choose Food",
    description: "Browse our diverse menu and select your favorite dishes",
    icon: ShoppingBag,
    color: "bg-blue-500",
    details: [
      "100+ restaurant options",
      "Customizable orders",
      "Dietary filters available",
    ],
  },
  {
    id: 2,
    title: "Place Order",
    description: "Secure checkout with multiple payment options",
    icon: CheckCircle2,
    color: "bg-green-500",
    details: [
      "Instant order confirmation",
      "Real-time tracking",
      "24/7 customer support",
    ],
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "Get your food delivered hot and fresh",
    icon: Truck,
    color: "bg-orange-500",
    details: [
      "Average 30-minute delivery",
      "Live GPS tracking",
      "Contactless delivery option",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section>
      <div className="mx-auto px-2  max-w-[1800px]">
        {/* Header */}
        <div className="text-center mb-12">
     
          <h2 className="global_heading">
            How It Works
          </h2>
          <CardDescription>
            Get your favorite food delivered in 3 simple steps
          </CardDescription>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <Card className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p2">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full border-2 border-primary/20  text-lg font-bold">
                        0{step.id}
                      </div>
                      <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/20  text-lg font-bold">
                        0{step.id}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>

                      {/* Step Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step Indicator (Mobile) */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 border-gray-200 rounded-full flex items-center justify-center">
                          <div className="w-1 h-4 bg-gradient-to-b rounded-full" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Connecting Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r rounded-2xl p-6 md:p-8 border">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Ready to order?</h3>
              <p className="text-muted-foreground">
                Join thousands of satisfied customers enjoying delicious meals
              </p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
