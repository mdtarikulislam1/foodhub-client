import { Leaf, CheckCircle, Box, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Farm Fresh Sourcing",
      description:
        "We source directly from trusted farms to ensure freshness and quality.",
      icon: Leaf,
      color: "bg-green-500/20 text-green-600",
    },
    {
      id: 2,
      title: "Quality Check",
      description:
        "Every product is inspected to meet our strict quality standards.",
      icon: CheckCircle,
      color: "bg-blue-500/20 text-blue-600",
    },
    {
      id: 3,
      title: "Hygienic Packaging",
      description:
        "All items are carefully packed to maintain hygiene and safety.",
      icon: Box,
      color: "bg-emerald-500/20 text-emerald-600",
    },
    {
      id: 4,
      title: "Customer Support",
      description:
        "Our friendly support team is ready to help with any questions.",
      icon: Headphones,
      color: "bg-orange-500/20 text-orange-600",
    },
  ];

  return (
    <section className="w-full max-w-[1800px] mx-auto px-2">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="global_heading">
          Why Choose FoodHub
        </h2>
        <p className="mt-4 text-muted-foreground">
         { `At FoodHub, we prioritize freshness, quality, and customer satisfaction. Here's what sets us apart:`}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className={`
                flex flex-col items-start gap-4 p-6 rounded-xl 
                hover:shadow-lg hover:-translate-y-2 transition-all
                ${index % 2 === 0 ? "bg-muted/10" : "bg-muted/20"}
              `}
            >
              <div className={`p-4 rounded-full ${feature.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
