"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        style={{
          backgroundColor: "var(--elements)",
          paddingBlock: "1em",
          paddingInline: "1.5em",
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
