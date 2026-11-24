import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BugReportFormMock from "./BugReportFormMock";

const normalBehavior =
  "The Control Board shows an empty list; all items should be visible and selectable.";
const testBehavior = "TEST current vs. expected behavior";

describe("BugReportFormMock", () => {
  it.each([
    [false, false, normalBehavior],
    [false, true, ""],
    [true, false, testBehavior],
    [true, true, testBehavior],
  ])(
    "initializes with isDryRun=%s and empty=%s",
    (isDryRun, empty, expectedBehavior) => {
      render(<BugReportFormMock isDryRun={isDryRun} empty={empty} />);
      expect(screen.getAllByRole("textbox")[0]).toHaveValue(expectedBehavior);
      if (!isDryRun && empty) {
        screen.getAllByRole("textbox").forEach((field) => {
          expect(field).toHaveValue("");
        });
      }
    },
  );

  it.each([false, true])(
    "loads test data and restores the appropriate data when empty=%s",
    async (empty) => {
      const user = userEvent.setup();
      render(<BugReportFormMock showTestMode empty={empty} />);

      expect(screen.getByRole("switch")).toHaveAttribute(
        "aria-checked",
        "false",
      );
      expect(screen.getAllByRole("textbox")[0]).toHaveValue(
        empty ? "" : normalBehavior,
      );

      await user.click(screen.getByRole("switch"));
      expect(screen.getByRole("switch")).toHaveAttribute(
        "aria-checked",
        "true",
      );
      expect(screen.getAllByRole("textbox")[0]).toHaveValue(testBehavior);
      expect(screen.getByDisplayValue("TEST workarounds")).toBeInTheDocument();
      expect(screen.getByDisplayValue("TEST stakeholders")).toBeInTheDocument();
      expect(
        screen.getByDisplayValue("TEST additional details"),
      ).toBeInTheDocument();

      await user.click(screen.getByRole("switch"));
      expect(screen.getByRole("switch")).toHaveAttribute(
        "aria-checked",
        "false",
      );
      expect(screen.getAllByRole("textbox")[0]).toHaveValue(
        empty ? "" : normalBehavior,
      );
      if (empty) {
        screen.getAllByRole("textbox").forEach((field) => {
          expect(field).toHaveValue("");
        });
      } else {
        expect(
          screen.getByDisplayValue("Re-importing the item plan"),
        ).toBeInTheDocument();
      }
      expect(
        screen.queryByDisplayValue("TEST stakeholders"),
      ).not.toBeInTheDocument();
    },
  );
});
