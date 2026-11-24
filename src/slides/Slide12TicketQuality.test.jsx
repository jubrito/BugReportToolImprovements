import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import {
  PresentationProvider,
  usePresentation,
} from "../presentation/PresentationContext";
import SlideBoundary from "../presentation/SlideBoundary";
import Slide12TicketQuality from "./Slide12TicketQuality";

describe("Slide12TicketQuality", () => {
  it("reveals each title with its ticket, with the arrow in between", () => {
    let controls;
    function Probe() {
      controls = usePresentation();
      return null;
    }

    render(
      <PresentationProvider totalSlides={1} stepCounts={[4]}>
        <Probe />
        <SlideBoundary index={0}>
          <Slide12TicketQuality />
        </SlideBoundary>
      </PresentationProvider>,
    );

    const before = screen.getByText(/Before.*JIRA-3437/).parentElement;
    const after = screen.getByText(/After.*JIRA-3508/).parentElement;
    const arrow = screen.getByText("\u2192").parentElement;
    const improvements = screen.getByText("What improved").parentElement;

    expect(before).toContainElement(screen.getByText("[Team] @UXXXXXXXXXX"));
    expect(after).toContainElement(
      screen.getByText("[on-call] AI summary of the bug"),
    );

    act(() => controls.enter());
    for (const group of [before, arrow, after, improvements]) {
      expect(group).toHaveAttribute("aria-hidden", "true");
    }

    for (const [index, group] of [
      before,
      arrow,
      after,
      improvements,
    ].entries()) {
      act(() => controls.next());
      expect(controls.stepIndex).toBe(index + 1);
      expect(group).not.toHaveAttribute("aria-hidden");
      for (const remaining of [before, arrow, after, improvements].slice(
        index + 1,
      )) {
        expect(remaining).toHaveAttribute("aria-hidden", "true");
      }
    }
  });
});
