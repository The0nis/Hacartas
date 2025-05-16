
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardHeader className="flex flex-col items-center pt-6">
        <div className="w-12 h-12 bg-[#054D72] bg-opacity-10 rounded-full flex items-center justify-center text-[#054D72]">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-xl font-semibold mb-2 text-[#003049]">{title}</h3>
        <p className="text-[#054D72]">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
