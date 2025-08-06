# OHP - Mobile-First Next.js Application

A modern Next.js 14 application built with TypeScript, Tailwind CSS, and shadcn/ui, designed with a mobile-first approach for optimal user experience across all devices.

## 🚀 Features

- **Mobile-First Design**: Optimized for iPhone, Samsung, and Android devices
- **Responsive Layout**: 50% width constraint on desktop, full width on mobile
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Clean Architecture**: App Router with proper project structure
- **Development Tools**: ESLint, TypeScript, and modern development workflow

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Linting**: ESLint
- **Package Manager**: npm

## 📱 Mobile-First Approach

The application is designed with mobile devices as the primary focus:

- Content is optimized for iPhone, Samsung, and Android devices
- Desktop viewport content is constrained to 50% of the browser window width and centered
- Uses Tailwind CSS for responsive design with mobile-first breakpoints
- Images and content scale appropriately across all screen sizes

## 🎨 Design Principles

- **Clean & Minimal**: Focus on content and user experience
- **Responsive**: Adapts seamlessly across all device sizes
- **Accessible**: Built with accessibility in mind
- **Modern**: Uses the latest web technologies and best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ohp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
└── lib/                  # Utility functions
    └── utils.ts          # shadcn/ui utilities
```

## 🎯 Key Features

### Mobile-First Design
- Optimized for mobile devices first
- Responsive breakpoints follow mobile-first approach
- Touch-friendly interface elements

### Responsive Layout
- Full width on mobile devices
- 50% width constraint on desktop with centering
- Smooth scaling across all screen sizes

### Modern Development
- TypeScript for type safety
- ESLint for code quality
- Hot reload for fast development
- Optimized build process

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration for mobile-first design.

### shadcn/ui
Components are configured with shadcn/ui for consistent design system.

### ESLint
Code quality is maintained with ESLint configuration optimized for Next.js and TypeScript.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- shadcn/ui for the beautiful component library
- Lucide for the icon library

---

Built with ❤️ using Next.js 14
