"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";
import { Archetype } from "../types";

interface ResultProps {
    archetype: Archetype;
    onRestart: () => void;
}

export default function Result({ archetype, onRestart }: ResultProps) {
    useEffect(() => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#3B5439", "#88A5A3", "#A95C31", "#FCF8ED"],
        });
    }, []);

    const handleShare = () => {
        const text = `¡Soy ${archetype.name}! ☄️\n\n"${archetype.vibe}"\n\n🌿 Ritual: ${archetype.ritual.join(', ')}\n🧉 Recomendación: ${archetype.recommendation}\n\n¿Qué mate sos vos? Descubrilo acá: https://mate.cosmico.adhoc.inc`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-[100dvh] bg-brand-cream flex flex-col items-center p-6 pb-24 text-brand-forest overflow-x-hidden relative">
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
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl opacity-50"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-md w-full mt-8 relative z-10"
            >
                <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 font-heading">Tu resultado es:</p>
                <h1 className="text-5xl font-heading font-black mb-4 leading-[0.9] tracking-tighter uppercase">
                    {archetype.name}
                </h1>
                <p className="text-lg opacity-80 mb-8 leading-relaxed max-w-[300px] mx-auto">
                    &ldquo;{archetype.vibe}&rdquo;
                </p>

                {/* Mate Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12 flex justify-center"
                >
                    <div className="relative w-64 h-64 mix-blend-multiply">
                        <Image
                            src={archetype.image}
                            alt={archetype.name}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Action Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-brand-forest/5 mb-10 border border-brand-forest/5 text-left relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-terracotta mb-6 font-heading">Tu Ritual Cósmico</h3>
                        <ul className="grid grid-cols-1 gap-4 mb-8">
                            {archetype.ritual.map((r, i) => (
                                <li key={i} className="flex items-center gap-4 text-base font-medium text-brand-forest/90 capitalize leading-tight">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-sage shrink-0" />
                                    {r}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-brand-forest text-brand-cream p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl group-hover:scale-125 transition-transform">🧉</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 font-heading">Recomendación</h3>
                            <p className="font-heading font-bold text-xl leading-snug">{archetype.recommendation}</p>
                        </div>
                    </div>
                </div>

                {/* Simple Action */}
                <div className="w-full space-y-6">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleShare}
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white p-6 rounded-2xl font-black font-heading text-xl shadow-xl shadow-green-500/20 uppercase tracking-tight"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048c0 2.12.554 4.189 1.605 6.01L0 24l6.117-1.605a11.816 11.816 0 005.931 1.599h.005c6.635 0 12.044-5.412 12.048-12.05a11.753 11.753 0 00-3.414-8.526" />
                        </svg>
                        Compartir por WhatsApp
                    </motion.button>

                    <button
                        onClick={onRestart}
                        className="flex items-center justify-center gap-2 mx-auto text-sm font-bold text-brand-forest/40 hover:text-brand-forest transition-colors uppercase tracking-widest"
                    >
                        <RefreshCw size={14} />
                        Reiniciar Viaje
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
