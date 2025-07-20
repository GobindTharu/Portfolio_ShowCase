// Button1 without TypeScript types
export const Button1 = ({ startWriting }) => {
  return (
    <button
      onClick={startWriting}
      className="relative flex h-10 sm:h-12 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px] overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-5 sm:px-7 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl uppercase">
        Show More
      </span>
    </button>
  );
};

// Button2 without TypeScript types
export const Button2 = () => {
  const handleDownload = async () => {
    const fileUrl = "/balgobinds_resume.pdf";
    const response = await fetch(fileUrl);

    if (!response.ok) {
      console.error("Failed to download file");
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "balgobinds_resume.pdf"; // Corrected extension
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="relative flex h-10 sm:h-12 w-full max-w-[300px] sm:max-w-[240px] md:max-w-[260px] overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full gap-4 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-5 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl uppercase">
        Download CV
      </span>
    </button>
  );
};
