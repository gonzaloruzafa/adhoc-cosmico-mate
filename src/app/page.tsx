"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuiz } from "../hooks/useQuiz";
import { trackEvent } from "../lib/supabase";
import Landing from "../components/Landing";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { AnimatePresence, motion } from "framer-motion";

function QuizContent() {
  const {
    currentStep,
    startQuiz,
    handleAnswer,
    goBack,
    progress,
    currentQuestion,
    result,
    totalQuestions
  } = useQuiz();

  const searchParams = useSearchParams();
  const [utmData, setUtmData] = useState<Record<string, string>>({});

  useEffect(() => {
    // Capture UTMs
    const utms: Record<string, string> = {};
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    keys.forEach(key => {
      const val = searchParams.get(key);
      if (val) utms[key] = val;
    });
    setUtmData(utms);
  }, [searchParams]);

  const handleStart = () => {
    trackEvent("quiz_start", { ...utmData });
    startQuiz();
  };

  const onAnswer = (option: any) => {
    handleAnswer(option);
  };

  useEffect(() => {
    if (result) {
      trackEvent("quiz_complete", {
        ...utmData,
        arquetipo: result.id,
        arquetipo_name: result.name
      });
    }
  }, [result, utmData]);

  return (
    <AnimatePresence mode="wait">
      {currentStep === 0 && (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <Landing onStart={handleStart} />
        </motion.div>
      )}

      {currentStep > 0 && currentStep <= totalQuestions && (
        <motion.div
          key="quiz"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <Quiz
            question={currentQuestion}
            currentStep={currentStep}
            totalSteps={totalQuestions}
            progress={progress}
            onAnswer={onAnswer}
            onBack={goBack}
          />
        </motion.div>
      )}

      {currentStep > totalQuestions && result && (
        <motion.div
          key="result"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <Result
            archetype={result}
            onRestart={startQuiz}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <Suspense fallback={<div className="min-h-screen bg-brand-green flex items-center justify-center text-white">Cargando...</div>}>
        <QuizContent />
      </Suspense>
    </main>
  );
}
