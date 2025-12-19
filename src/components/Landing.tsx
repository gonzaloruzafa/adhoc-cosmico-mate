"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LandingProps {
    onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
    return (
        <div className="relative min-h-[100dvh] flex flex-col items-center justify-center p-6 overflow-hidden bg-brand-cream">
            {/* Background Decorative Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-brand-sage/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl"
            />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
                {/* Header / Logos */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <Image src="/Cosmico+Logo.webp" alt="Yerba Cósmico" width={100} height={35} className="h-auto" />
                    <div className="w-px h-6 bg-brand-forest/20" />
                    <Image src="/adhoc-logo.png" alt="Adhoc" width={80} height={25} className="h-auto" />
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-forest/5 text-brand-forest text-sm font-medium mb-6">
                        Descubrí tu ritual ideal ✨
                    </div>
                    <h1 className="text-6xl font-black text-brand-forest leading-[0.9] tracking-tighter mb-6 uppercase font-heading">
                        ¿Qué<br />Mate<br />Sos?
                    </h1>
                    <p className="text-lg text-brand-forest/80 max-w-[280px] mx-auto leading-relaxed">
                        Tu personalidad cebada en <span className="font-bold text-brand-terracotta">45 segundos</span>.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full"
                >
                    <button
                        onClick={onStart}
                        className="group relative w-full bg-brand-forest text-brand-cream py-5 rounded-2xl font-bold text-xl transition-all duration-300 active:scale-95 shadow-xl shadow-brand-forest/20 overflow-hidden font-heading"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Comenzar el Viaje
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>
                    <p className="mt-4 text-xs text-brand-forest/40 font-medium tracking-wide uppercase">
                        No requiere registro · Hecho por Adhoc
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
