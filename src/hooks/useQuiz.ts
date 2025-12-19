import { useState, useMemo } from 'react';
import { ARCHETYPES, QUESTIONS } from '../lib/constants';
import { ArchetypeId, Option } from '../types';

export function useQuiz() {
    const [currentStep, setCurrentStep] = useState(0); // 0 for landing, 1 to N for questions
    const [answers, setAnswers] = useState<Option[]>([]);
    const [result, setResult] = useState<ArchetypeId | null>(null);

    const progress = useMemo(() => {
        return Math.round((answers.length / QUESTIONS.length) * 100);
    }, [answers]);

    const startQuiz = () => {
        setCurrentStep(1);
        setAnswers([]);
        setResult(null);
    };

    const handleAnswer = (option: Option) => {
        const newAnswers = [...answers, option];
        setAnswers(newAnswers);

        if (newAnswers.length === QUESTIONS.length) {
            calculateResult(newAnswers);
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const calculateResult = (finalAnswers: Option[]) => {
        const scores: Record<ArchetypeId, number> = {
            tradicional: 0,
            tereré: 0,
            intenso: 0,
            dulce: 0,
            botánico: 0,
            social: 0,
        };

        let dominantChoice: ArchetypeId | null = null;

        finalAnswers.forEach(answer => {
            Object.entries(answer.scores).forEach(([id, score]) => {
                scores[id as ArchetypeId] += score || 0;
            });
            if (answer.dominant) {
                dominantChoice = answer.dominant;
            }
        });

        let maxScore = -1;
        let winners: ArchetypeId[] = [];

        Object.entries(scores).forEach(([id, score]) => {
            if (score > maxScore) {
                maxScore = score;
                winners = [id as ArchetypeId];
            } else if (score === maxScore) {
                winners.push(id as ArchetypeId);
            }
        });

        let winner: ArchetypeId;
        if (winners.length === 1) {
            winner = winners[0];
        } else if (dominantChoice && winners.includes(dominantChoice)) {
            winner = dominantChoice;
        } else {
            winner = winners[0]; // Fallback to first if tie-break doesn't apply
        }

        setResult(winner);
        setCurrentStep(QUESTIONS.length + 1); // Outcome screen
    };

    const goBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
            setAnswers(prev => prev.slice(0, -1));
        } else {
            setCurrentStep(0);
        }
    };

    return {
        currentStep,
        progress,
        currentQuestion: QUESTIONS[currentStep - 1],
        startQuiz,
        handleAnswer,
        goBack,
        result: result ? ARCHETYPES.find(a => a.id === result) : null,
        totalQuestions: QUESTIONS.length,
    };
}
