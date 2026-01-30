import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Banknote, Leaf, Truck, BadgeDollarSign } from "lucide-react";

export default function Policy() {
  const policyData = [
    {
      id: "1",
      title: "CASH ON DELIVERY",
      icon: Banknote,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "2",
      title: "NATURAL AND HEALTHY FOODS",
      icon: Leaf,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      id: "3",
      title: "DELIVERY WITHIN 48HRS",
      icon: Truck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "4",
      title: "BEST PRICE DEAL",
      icon: BadgeDollarSign,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 my-4">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        {policyData.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center justify-center gap-2 text-center">
                <div className={`p-1 rounded-full ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <CardTitle>{item.title}</CardTitle>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
