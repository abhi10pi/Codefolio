'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  Code,
  Sparkles,
} from 'lucide-react';
import { Vortex } from './ui/vortex';

function Hero1() {
  return (
    <Vortex
      backgroundColor="black"
      className="h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-screen-xl w-full mx-auto flex items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full py-10 sm:py-14">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Hello, I'm</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Abhishek
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pimpalkar
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Final Year CSE(AI) Student | Full Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-2 text-purple-400">
              <Code className="w-5 h-5" />
              <span className="text-sm">Currently learning: NLP & GenAI</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#projects">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <Link href="#contact">
                <button className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <span className="text-gray-400 text-sm">Follow me:</span>
              <div className="flex gap-4 flex-wrap">
                <a href="https://github.com/abhi10pi" target="_blank" rel="noopener noreferrer"
                  className="group p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <img src="/GITHUB.png" alt="GitHub" className="w-5 h-5 group-hover:opacity-80" />
                </a>

                <a href="http://www.linkedin.com/in/abhishekpimpalkar" target="_blank" rel="noopener noreferrer"
                  className="group p-3 rounded-lg bg-gray-800/50 hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5 group-hover:opacity-80" />
                </a>

                <a href="https://leetcode.com/u/abhi_pimpalkar01/" target="_blank" rel="noopener noreferrer"
                  className="group p-3 rounded-lg bg-gray-800/50 hover:bg-yellow-400/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png" alt="LeetCode" className="w-5 h-5 group-hover:opacity-80" />
                </a>

                <a href="mailto:abhishekpimpalkar35@gmail.com" target="_blank"
                  className="group p-3 rounded-lg bg-gray-800/50 hover:bg-pink-400/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-5 h-5 group-hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-75 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-50 animate-spin-slow"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/5"></div>
                <img src="./profile.jpg" alt="Abhishek Pimpalkar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Vortex>
  );
}

export default Hero1;
