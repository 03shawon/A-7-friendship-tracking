import React from 'react';
import logoXL from '../assets/logo-xl.png'; 
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-16"> 
            <div className="container mx-auto px-4 text-center">
                
                <div className="flex justify-center mb-6">
                    <img 
                        src={logoXL} 
                        alt="KeenKeeper Large Logo" 
                        className="h-16 md:h-20 w-auto object-contain" 
                    />
                </div>
                
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-80">Social Links</p>
                    <div className="flex justify-center gap-5">
                        <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <img src={instagram} alt="Instagram" className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <img src={facebook} alt="Facebook" className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <img src={twitter} alt="Twitter" className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400 font-medium">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;