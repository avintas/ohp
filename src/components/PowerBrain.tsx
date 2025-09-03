'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizData {
  category: string;
  color: string;
  difficulty: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  explanation: string;
  funFact: string;
}

interface PowerBrainProps {
  className?: string;
}

export function PowerBrain({ className = '' }: PowerBrainProps) {
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardState, setCardState] = useState<'front' | 'quiz' | 'answer'>('front');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const [sharedQuizzes, setSharedQuizzes] = useState<Set<string>>(new Set());

  const loadQuizData = useCallback(async () => {
    try {
      const quizFiles = [
        '01-hockey-rules.md',
        '02-hockey-history.md',
        '03-hockey-players.md',
        '04-hockey-equipment.md',
        '05-hockey-statistics.md',
        '06-hockey-arenas.md',
        '07-hockey-culture.md'
      ];

      const quizzes: QuizData[] = [];

      for (const file of quizFiles) {
        try {
          const response = await fetch(`/powerbrain/${file}`);
          const text = await response.text();
          const parsed = parseMarkdownQuiz(text);
          if (parsed) quizzes.push(parsed);
        } catch (error) {
          console.error(`Error loading ${file}:`, error);
        }
      }

      setQuizData(quizzes);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading quiz data:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    loadQuizData();
  }, [loadQuizData]);

  const parseMarkdownQuiz = (text: string): QuizData | null => {
    try {
      const lines = text.split('\n');
      let currentSection = '';
      const frontMatter: Record<string, string> = {};
      let question = '';
      const answers: string[] = [];
      let correctAnswer = '';
      let explanation = '';
      let funFact = '';

      // Parse front matter
      let inFrontMatter = false;
      let frontMatterContent = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line === '---') {
          if (!inFrontMatter) {
            inFrontMatter = true;
            continue;
          } else {
            inFrontMatter = false;
            // Parse front matter
            const frontMatterLines = frontMatterContent.split('\n');
            for (const fmLine of frontMatterLines) {
              if (fmLine.includes(':')) {
                const [key, value] = fmLine.split(':').map(s => s.trim());
                frontMatter[key] = value.replace(/"/g, '');
              }
            }
            continue;
          }
        }
        
        if (inFrontMatter) {
          frontMatterContent += line + '\n';
          continue;
        }

        // Parse content sections
        if (line.startsWith('## Question')) {
          currentSection = 'question';
          continue;
        } else if (line.startsWith('## Answers')) {
          currentSection = 'answers';
          continue;
        } else if (line.startsWith('## Correct Answer')) {
          currentSection = 'correctAnswer';
          continue;
        } else if (line.startsWith('## Explanation')) {
          currentSection = 'explanation';
          continue;
        } else if (line.startsWith('## Fun Fact')) {
          currentSection = 'funFact';
          continue;
        }

        // Process content based on current section
        if (currentSection === 'question' && line && !line.startsWith('#')) {
          question = line;
        } else if (currentSection === 'answers' && line.startsWith('- ')) {
          answers.push(line.substring(2));
        } else if (currentSection === 'correctAnswer' && line.startsWith('**') && line.endsWith('**')) {
          correctAnswer = line.replace(/\*\*/g, '');
        } else if (currentSection === 'explanation' && line && !line.startsWith('#')) {
          explanation += line + ' ';
        } else if (currentSection === 'funFact' && line && !line.startsWith('#')) {
          funFact += line + ' ';
        }
      }

      return {
        category: frontMatter.category || '',
        color: frontMatter.color || '#3B82F6',
        difficulty: frontMatter.difficulty || 'Beginner',
        question,
        answers,
        correctAnswer,
        explanation: explanation.trim(),
        funFact: funFact.trim()
      };
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return null;
    }
  };

  const handleCardFlip = () => {
    if (cardState === 'front') {
      setCardState('quiz');
    } else if (cardState === 'quiz' && selectedAnswer) {
      setCardState('answer');
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % quizData.length);
    setCardState('front');
    setSelectedAnswer(null);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + quizData.length) % quizData.length);
    setCardState('front');
    setSelectedAnswer(null);
  };

  const handleShare = async (quiz: QuizData) => {
    const shareText = `🧠 Power Brain Challenge: ${quiz.question}\n\nTest your hockey IQ at OnlyHockey!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Power Brain Challenge from OnlyHockey: ${quiz.category}`,
          text: shareText,
          url: window.location.href
        });
        setSharedQuizzes(prev => new Set([...prev, quiz.category]));
      } catch {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        setSharedQuizzes(prev => new Set([...prev, quiz.category]));
        alert('Quiz challenge copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
      }
    }
  };



  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-white text-lg">Loading Power Brain...</div>
      </div>
    );
  }

  if (quizData.length === 0) {
    return (
      <div className={`flex items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-white text-lg">No quiz data available</div>
      </div>
    );
  }

  const currentQuiz = quizData[currentCardIndex];
  const isCorrect = selectedAnswer === currentQuiz.correctAnswer;

  if (!isMounted) {
    return (
      <div className={`w-full max-w-4xl mx-auto ${className}`}>
        <div className="relative">
          <div className="relative w-full h-[600px] mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <div className="text-white text-lg">Loading Power Brain...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>

      {/* Card Container */}
      <div className="relative">
        <motion.div
          key={`${currentCardIndex}-${cardState}`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="perspective-1000"
        >
          <div className="relative w-full h-[600px] mx-auto">
            {/* Front of Card - Did You Know? */}
            <AnimatePresence mode="wait">
              {cardState === 'front' && (
                <motion.div
                  key="front"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-gray-700 p-8 flex flex-col items-center justify-center cursor-pointer"
                  onClick={handleCardFlip}
                >
                                     <div className="text-center">
                     <h3 className="text-3xl font-bold text-white mb-4">Did You Know?</h3>
                     <p className="text-gray-300 text-lg mb-6">{currentQuiz.funFact}</p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                      <span>Flip Me</span>
                      <span>→</span>
                    </div>
                  </div>
                  
                                     {/* Actions Below Content - All Viewports */}
                   <div className="flex items-center justify-start gap-4 mt-6">
                     {/* Share Button */}
                     <motion.button 
                       onClick={(e) => { e.stopPropagation(); handleShare(currentQuiz); }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       className={`flex items-center gap-2 transition-colors duration-300 group ${
                         sharedQuizzes.has(currentQuiz.category) 
                           ? 'text-[#3B82F6]' 
                           : 'text-gray-400 hover:text-[#3B82F6]'
                       }`}
                     >
                       <motion.div 
                         className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                           sharedQuizzes.has(currentQuiz.category) 
                             ? 'bg-[#3B82F6]/20' 
                             : 'group-hover:bg-[#3B82F6]/10'
                         }`}
                         whileTap={{ 
                           scale: [1, 1.2, 1],
                           rotate: [0, -15, 15, 0]
                         }}
                         transition={{ duration: 0.3 }}
                       >
                         <motion.span 
                           className="text-lg"
                           animate={sharedQuizzes.has(currentQuiz.category) ? {
                             scale: [1, 1.2, 1],
                             y: [0, -2, 0]
                           } : {}}
                           transition={{ duration: 0.4 }}
                         >
                           📤
                         </motion.span>
                       </motion.div>
                       <span className="text-sm font-medium">Share</span>
                     </motion.button>
                   </div>
                </motion.div>
              )}

              {/* Quiz State */}
              {cardState === 'quiz' && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-gray-700 p-8 flex flex-col"
                >
                  <div className="flex-1">
                    <div className="text-center mb-6">
                      <span 
                        className="inline-block px-3 py-1 text-white text-sm rounded-full mb-4"
                        style={{ backgroundColor: currentQuiz.color }}
                      >
                        {currentQuiz.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4">{currentQuiz.question}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {currentQuiz.answers.map((answer, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(answer)}
                          className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                            selectedAnswer === answer
                              ? 'border-blue-500 bg-blue-500/20 text-white'
                              : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
                          }`}
                        >
                          {answer}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleCardFlip}
                      disabled={!selectedAnswer}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        selectedAnswer
                          ? 'bg-green-600 hover:bg-green-700 text-white hover:scale-105'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Reveal Answer
                    </button>
                  </div>
                  
                                     {/* Actions Below Content - All Viewports */}
                   <div className="flex items-center justify-start gap-4 mt-6">
                     {/* Share Button */}
                     <motion.button 
                       onClick={() => handleShare(currentQuiz)}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       className={`flex items-center gap-2 transition-colors duration-300 group ${
                         sharedQuizzes.has(currentQuiz.category) 
                           ? 'text-[#3B82F6]' 
                           : 'text-gray-400 hover:text-[#3B82F6]'
                       }`}
                     >
                       <motion.div 
                         className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                           sharedQuizzes.has(currentQuiz.category) 
                             ? 'bg-[#3B82F6]/20' 
                             : 'group-hover:bg-[#3B82F6]/10'
                         }`}
                         whileTap={{ 
                           scale: [1, 1.2, 1],
                           rotate: [0, -15, 15, 0]
                         }}
                         transition={{ duration: 0.3 }}
                       >
                         <motion.span 
                           className="text-lg"
                           animate={sharedQuizzes.has(currentQuiz.category) ? {
                             scale: [1, 1.2, 1],
                             y: [0, -2, 0]
                           } : {}}
                           transition={{ duration: 0.4 }}
                         >
                           📤
                         </motion.span>
                       </motion.div>
                       <span className="text-sm font-medium">Share</span>
                     </motion.button>
                   </div>
                </motion.div>
              )}

              {/* Answer State */}
              {cardState === 'answer' && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-gray-700 p-8 flex flex-col"
                >
                  <div className="flex-1">
                    <div className="text-center mb-6">
                      <div className={`text-6xl mb-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        {isCorrect ? '🎉' : '😅'}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {isCorrect ? 'Correct!' : 'Not quite!'}
                      </h3>
                      <div className="bg-gray-700 rounded-lg p-4 mb-4">
                        <p className="text-white font-semibold mb-2">Correct Answer:</p>
                        <p className="text-green-400">{currentQuiz.correctAnswer}</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2">Explanation:</p>
                        <p className="text-gray-300">{currentQuiz.explanation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center gap-4">
                    <button
                      onClick={handlePrevCard}
                      className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={handleNextCard}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      Next →
                    </button>
                  </div>
                  
                                     {/* Actions Below Content - All Viewports */}
                   <div className="flex items-center justify-start gap-4 mt-6">
                     {/* Share Button */}
                     <motion.button 
                       onClick={() => handleShare(currentQuiz)}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       className={`flex items-center gap-2 transition-colors duration-300 group ${
                         sharedQuizzes.has(currentQuiz.category) 
                           ? 'text-[#3B82F6]' 
                           : 'text-gray-400 hover:text-[#3B82F6]'
                       }`}
                     >
                       <motion.div 
                         className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                           sharedQuizzes.has(currentQuiz.category) 
                             ? 'bg-[#3B82F6]/20' 
                             : 'group-hover:bg-[#3B82F6]/10'
                         }`}
                         whileTap={{ 
                           scale: [1, 1.2, 1],
                           rotate: [0, -15, 15, 0]
                         }}
                         transition={{ duration: 0.3 }}
                       >
                         <motion.span 
                           className="text-lg"
                           animate={sharedQuizzes.has(currentQuiz.category) ? {
                             scale: [1, 1.2, 1],
                             y: [0, -2, 0]
                           } : {}}
                           transition={{ duration: 0.4 }}
                         >
                           📤
                         </motion.span>
                       </motion.div>
                       <span className="text-sm font-medium">Share</span>
                     </motion.button>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
