import React from 'react';
import { Mail, Linkedin, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Contact = ({ data }) => {
  const handleEmail = () => {
    window.location.href = `mailto:${data.email}`;
  };

  const handleLinkedIn = () => {
    window.open(data.linkedin, '_blank');
  };

  const handleDownloadResume = () => {
    // TODO: Implement actual resume download
    console.log('Download resume');
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Let's build something</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-2">{data.openTo}</p>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <p>{data.locationNote}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Email Card */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group" onClick={handleEmail}>
            <div className="text-center space-y-3">
              <div className="inline-flex p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-sm text-gray-600 break-all">{data.email}</p>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group" onClick={handleLinkedIn}>
            <div className="text-center space-y-3">
              <div className="inline-flex p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">LinkedIn</h3>
              <p className="text-sm text-gray-600">Connect with me</p>
            </div>
          </Card>

          {/* Resume Card */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group" onClick={handleDownloadResume}>
            <div className="text-center space-y-3">
              <div className="inline-flex p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Resume</h3>
              <p className="text-sm text-gray-600">Download PDF</p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={handleEmail}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
