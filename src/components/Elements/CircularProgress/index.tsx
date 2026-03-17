import "./circular-progress.scss";

interface CircularProgressProps {
  current: number;
  total: number;
}

export const CircularProgress = ({ current, total }: CircularProgressProps) => {
  const size = 101;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = current / total;
  const offset = circumference * (1 - progress);

  return (
    <div className="circular-progress">
      <div
        className="circular-progress__inner"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#EEF7FB"
            strokeWidth={strokeWidth}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#aaddf3"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.4s ease" }}
          />
        </svg>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            color: "#2D2D2D",
            letterSpacing: "0.02em",
            fontFamily: "Proxima light",
          }}
        >
          {current}/{total}
        </div>
      </div>
    </div>
  );
};
