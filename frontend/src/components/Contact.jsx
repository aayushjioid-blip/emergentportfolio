import React from 'react';
import { Mail, Linkedin, MapPin, Download, Send } from 'lucide-react';
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
    <section id="contact" className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.02] text-[12rem] lg:text-[20rem] font-display font-bold leading-none pointer-events-none">
        HELLO
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20">
            <Send className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Get in Touch</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Let's build
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">something great</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <p className="text-2xl text-gray-300 mb-4">{data.openTo}</p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="h-5 w-5" />
            <p className="text-lg">{data.locationNote}</p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <Card 
            onClick={handleEmail}
            className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex p-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Email</h3>
              <p className="text-sm text-gray-400 break-all">{data.email}</p>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card 
            onClick={handleLinkedIn}
            className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex p-5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">LinkedIn</h3>
              <p className="text-sm text-gray-400">Connect with me</p>
            </div>
          </Card>

          {/* Resume Card */}
          <Card 
            onClick={handleDownloadResume}
            className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex p-5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Resume</h3>
              <p className="text-sm text-gray-400">Download PDF</p>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={handleEmail}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-12 py-7 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold"
          >
            <Mail className="mr-3 h-6 w-6" />
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
