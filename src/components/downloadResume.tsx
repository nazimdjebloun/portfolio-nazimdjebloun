import React from 'react'
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const handleDownload = () => {
  const resumeUrl = "./nazim-djebloun-cv-eng.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "./nazim-djebloun-cv-eng.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function DownloadResume() {
  return (
    <div className="flex justify-center items-center ">
      <Button variant="outline" className="rounded-xl" onClick={handleDownload}>
        <Download /> <span className="hidden sm:inline">Download Resume</span>
      </Button>
    </div>
  );
}
