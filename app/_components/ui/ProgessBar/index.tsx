export const ProgressBar = ({ progress }: { progress: number }) => {
  console.log(progress);
  return (
    <div className="  h-2 bg-gray-200">
      <div
        className="h-full bg-blue-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
