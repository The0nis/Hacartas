
import React from "react";
import { Card } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";
import { apkDownloadUrl } from "@/lib/utils";

const QRCodeDisplay = () => {
  
  return (
    <Card className="p-4 bg-white shadow-md">
      <div className="w-40 h-40 relative overflow-hidden flex items-center justify-center">
        <QRCodeSVG 
          value={apkDownloadUrl}
          size={140}
          bgColor="#FFFFFF"
          fgColor="#003049"
          level="H"
          includeMargin={false}
        />
      </div>
    </Card>
  );
};

export default QRCodeDisplay;
