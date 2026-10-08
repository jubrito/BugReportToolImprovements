import Slide1Title from "./slides/Slide1Title";
import Slide2UXImprovement from "./slides/Slide2UXImprovement";
import Slide3Problem from "./slides/Slide3Problem";
import Slide4Solution from "./slides/Slide4Solution";
import Slide5Efficiency from "./slides/Slide5Efficiency";
import Slide6Impact from "./slides/Slide6Impact";
import Slide7MaximizingTriage from "./slides/Slide7MaximizingTriage";
import Slide8Improvements from "./slides/Slide8Improvements";
import Slide9Reaction from "./slides/Slide9Reaction";
import Slide10Team from "./slides/Slide10Team";
import Slide11DryRun from "./slides/Slide11DryRun";
import Slide12TicketQuality from "./slides/Slide12TicketQuality";
import Slide13SlackReplies from "./slides/Slide13SlackReplies";
import Slide14StatusNotifications from "./slides/Slide14StatusNotifications";
import Slide15Closing from "./slides/Slide15Closing";
import {
  PresentationProvider,
  usePresentation,
} from "./presentation/PresentationContext";
import SlideBoundary from "./presentation/SlideBoundary";
import PresentationControls from "./presentation/PresentationControls";
import useKeyboardControls from "./presentation/useKeyboardControls";

const SLIDES = [
  { Component: Slide1Title, maxStep: 1 },
  { Component: Slide2UXImprovement, maxStep: 1 },
  { Component: Slide3Problem, maxStep: 3 },
  { Component: Slide4Solution, maxStep: 3 },
  { Component: Slide5Efficiency, maxStep: 3 },
  { Component: Slide6Impact, maxStep: 4 },
  { Component: Slide7MaximizingTriage, maxStep: 3 },
  { Component: Slide8Improvements, maxStep: 4 },
  { Component: Slide9Reaction, maxStep: 2 },
  { Component: Slide10Team, maxStep: 4 },
  { Component: Slide11DryRun, maxStep: 1 },
  { Component: Slide12TicketQuality, maxStep: 2 },
  { Component: Slide13SlackReplies, maxStep: 3 },
  { Component: Slide14StatusNotifications, maxStep: 3 },
  { Component: Slide15Closing, maxStep: 2 },
];

const STEP_COUNTS = SLIDES.map((s) => s.maxStep);

const GITHUB_REPO_URL = "https://github.com/jubrito/BugReportToolImprovements";

function AppShell() {
  useKeyboardControls();
  const { isPresenting } = usePresentation();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {!isPresenting && (
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          className="fixed right-4 top-4 z-50 rounded-full p-2 text-text-muted transition-colors hover:text-text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </a>
      )}
      <main
        id="main"
        tabIndex={-1}
        aria-label="Bug Report Intake 2.5 presentation"
      >
        {SLIDES.map(({ Component }, i) => (
          <SlideBoundary key={i} index={i}>
            <Component />
          </SlideBoundary>
        ))}
      </main>
      <PresentationControls />
      {!isPresenting && (
        <p className="fixed bottom-4 left-4 z-40 hidden text-xs text-text-muted md:block">
          Press{" "}
          <kbd className="rounded border border-border px-1.5 py-0.5">P</kbd> to
          present
        </p>
      )}
    </>
  );
}

export default function App() {
  return (
    <PresentationProvider totalSlides={SLIDES.length} stepCounts={STEP_COUNTS}>
      <AppShell />
    </PresentationProvider>
  );
}
