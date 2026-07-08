type Props = {
  step: number;
  totalSteps: number;
};

export default function ProgressBar({
  step,
  totalSteps,
}: Props) {

  const percentage = (step / totalSteps) * 100;

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>Progress</span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-indigo-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}