# OnlyHockey Landing Page - Card Content Inventory

*Extracted from: `src/app/page.tsx`*  
*Date: December 2024*

## Card Content Structure

### Card 1: Welcome to OnlyHockey! (Greetings)
- **ID**: `greetings`
- **Title**: "Welcome to OnlyHockey!"
- **Subtitle**: "Where your love for the game is all you need. Dive in to share stories, relive epic moments, and connect with fellow fans!"
- **Description**: "📰 Share hockey news & stories, 🏆 discover legendary moments that shaped the game, 📚 learn strategies, 🧠 enjoy fun tidbits & fascinating facts, 💪 get motivated, and 🤝 connect with fellow hockey enthusiasts who share your love for the sport. ❤️"
- **Button Text**: "See What's Inside"
- **Image**: `/gims/gim-00026.webp`
- **Background Color**: `#8ecae6` (Light blue)
- **Animation Delay**: 0
- **Special**: `isFirst: true` (Priority loading)

---

### Card 2: Heart & Share
- **ID**: `heart`
- **Title**: "Heart & Share"
- **Subtitle**: "Join the Team & Contribute Your Love"
- **Description**: "🏆 Join your fellow hockey enthusiasts, 💝 share love for the game through greeting cards & messages, 💪 encourage fellow players, and 💖 help grow the greatest sport with heart."
- **Button Text**: "Get in the Game"
- **Image**: `/gims/gim-00013.webp`
- **Background Color**: `#219EBC` (Medium blue)
- **Animation Delay**: 0.1
- **Special Feature**: Dynamic message counter (displays "2,847 messages shared today")

---

### Card 3: Test Your Hockey IQ (Challenge)
- **ID**: `challenge`
- **Title**: "Test Your Hockey IQ"
- **Subtitle**: "Learn, challenge yourself and your friends"
- **Description**: "🧠 Take hockey knowledge quizzes, 📚 learn from expert insights, 🎯 challenge yourself with different topics, 🏆 track your progress & achievements, 📱 share results with friends & family, and 🤝 compete with fellow hockey fans."
- **Button Text**: "Start Challenge"
- **Image**: `/gims/gim-00004.webp`
- **Background Color**: `#FB8500` (Orange)
- **Animation Delay**: 0.2

---

### Card 4: Motivate Others
- **ID**: `motivate`
- **Title**: "Motivate others"
- **Subtitle**: "Share motivational tidbits and messages with your friends and family"
- **Description**: "💨 'Skate Like Wind' & other inspiring messages, 💪 access legendary hockey wisdom & quotes, 📚 read motivational stories from hockey greats, 🎯 find the perfect message for any situation, 🤝 share motivation with your hockey family, and 💖 keep the hockey love alive & strong."
- **Button Text**: "Get Wisdom"
- **Image**: `/gims/gim-00012.webp`
- **Background Color**: `#FFB703` (Yellow)
- **Animation Delay**: 0.3

---

### Card 5: Meet the Experts
- **ID**: `experts`
- **Title**: "Meet the Experts"
- **Subtitle**: "No Awkward Dinners, Just Hockey Talk"
- **Description**: "👨‍🏫 Get insights from hockey coaches & players, 🎙️ discover tips from broadcasters, 🔬 & scientists, therapists, nutritionists, gearheads, 👩‍👧‍👦 learn from passionate fans & hockey moms, 🎯 each expert has unique knowledge & insights, 🤝 share their wisdom with your hockey family, and 💖 spread the love of hockey through expert content."
- **Button Text**: "Meet the Experts"
- **Image**: `/gims/gim-00024.webp`
- **Background Color**: `#ffffff` (White)
- **Animation Delay**: 0.4

---

## Content Analysis

### Common Themes Across Cards:
- **Community Building**: All cards emphasize connecting with fellow hockey enthusiasts
- **Sharing & Social**: Heavy focus on sharing content, wisdom, and experiences
- **Love for Hockey**: Consistent messaging about passion for the sport
- **Family-Oriented**: References to "hockey family" and inclusive community

### Emoji Usage Pattern:
- **Functional Icons**: 📰 (news), 🧠 (knowledge), 🏆 (achievement)
- **Emotional Icons**: ❤️ (love), 💖 (heart), 💝 (sharing)
- **Action Icons**: 💪 (motivation), 🤝 (connection), 🎯 (targeting)

### Content Structure:
1. **Title**: Clear, action-oriented
2. **Subtitle**: Explains the "why" or benefit
3. **Description**: Bullet-point style with emojis, covers multiple features
4. **CTA**: Action-focused button text

### Tone & Voice:
- **Enthusiastic**: Heavy use of exclamation points and positive language
- **Inclusive**: "Join", "connect", "share" language
- **Community-Focused**: Emphasis on togetherness and shared passion
- **Approachable**: Casual language mixed with hockey terminology

### Technical Notes:
- **Quote Issues**: Two instances of unescaped apostrophes (`&apos;`)
  - Line 15: "See What&apos;s Inside"
  - Line 41: "&apos;Skate Like Wind&apos;"
- **Consistent Structure**: All cards follow same data structure
- **Image Naming**: Sequential numbering system for gims directory
- **Color Coding**: Each card has distinct background color for visual hierarchy

---

*This content inventory serves as reference for card redesign and content optimization efforts.*
