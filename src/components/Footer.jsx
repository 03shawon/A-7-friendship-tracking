import React from 'react';
import logoXL from '../assets/logo-xl.png'; 
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-10"> 
            <div className="container mx-auto px-4 text-center">
                
                <div className="flex justify-center mb-4">
                    <img 
                        src={logoXL} 
                        alt="KeenKeeper Large Logo" 
                        className="h-12 md:h-14 w-auto object-contain" 
                    />
                </div>
                
                <p className="text-gray-300 text-xs md:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Social Links</p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <img src={instagram} alt="Instagram" className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <img src={facebook} alt="Facebook" className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <img src={twitter} alt="Twitter" className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-medium">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;