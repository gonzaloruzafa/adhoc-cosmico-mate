"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Question, Option } from "../types";

interface QuizProps {
    question: Question;
    currentStep: number;
    totalSteps: number;
    progress: number;
    onAnswer: (option: Option) => void;
    onBack: () => void;
}

export default function Quiz({
    question,
    currentStep,
    totalSteps,
    progress,
    onAnswer,
    onBack
}: QuizProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white text-brand-forest p-6 overflow-hidden relative">
            {/* Background decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-brand-sage/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl opacity-40"
            />

            {/* Header with Logos */}
            <div className="flex flex-col items-center mb-6 z-10">
                {/* Co-branding logos */}
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/Cosmico+Logo.webp" alt="Yerba Cósmico" width={80} height={28} className="h-auto" />
                    <div className="w-px h-5 bg-brand-forest/20" />
                    <Image src="/adhoc-logo.png" alt="Adhoc" width={60} height={20} className="h-auto" />
                </div>

                {/* Navigation row */}
                <div className="flex items-center justify-between w-full">
                    <button
                        onClick={onBack}
                        className="p-2 -ml-2 text-brand-forest/60 hover:text-brand-forest transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <span className="text-sm font-bold tracking-widest text-brand-forest/40 uppercase font-heading">
                        {currentStep} / {totalSteps}
                    </span>
                    <div className="w-10" /> {/* Spacer */}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-brand-forest/10 rounded-full mb-12 overflow-hidden z-10">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-brand-sage"
                />
            </div>

            {/* Question Content */}
            <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-8"
                    >
                        <h2 className="text-3xl font-heading font-bold text-balance leading-tight text-brand-forest">
                            {question.text}
                        </h2>

                        <div className="grid gap-4">
                            {question.options.map((option, idx) => (
                                <motion.button
                                    key={idx}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => onAnswer(option)}
                                    className="w-full p-5 text-left rounded-2xl border-2 border-brand-forest/10 bg-brand-cream hover:border-brand-sage hover:bg-brand-sage/10 transition-all text-xl font-medium text-brand-forest"
                                >
                                    {option.text}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
