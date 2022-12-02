export default function Stats() {
  const scoresData = [
    {
      team1: "Raptors",
      team1First: 10,
      team1Second: 20,
      team1Final: 30,
      team2: "Warriors",
      team2First: 5,
      team2Second: 15,
      team2Final: 20,
    },
  ];

  return (
    <div>
      <h1 className="my-4 text-4xl font-bold text-center">Scores</h1>

      {/* Table Header */}
      <div className="grid max-w-xl grid-cols-4">
        <p className="p-4 font-bold text-center text-white bg-blue-500 border-b-4 border-l-4 border-blue-600">
          Team
        </p>
        <p className="p-4 font-bold text-center text-white bg-blue-500 border-b-4 border-l-4 border-blue-600">
          First Half
        </p>
        <p className="p-4 font-bold text-center text-white bg-blue-500 border-b-4 border-l-4 border-blue-600">
          Second Half
        </p>
        <p className="p-4 font-bold text-center text-white bg-blue-500 border-b-4 border-l-4 border-blue-600">
          Final
        </p>
      </div>

      {scoresData.map((teamScoreData) => {
        return (
          <div className="grid max-w-xl grid-cols-4 col-span-4 bg-blue-200 ">
            <div className="flex flex-row items-center border-b-4 border-l-4 border-blue-600 ">
              <p className="p-4 text-center ">{teamScoreData.team1}</p>
              <img className="w-8 h-8" src="/images/raptors.png" />
            </div>

            <p className="text-center border-b-4 border-l-4 border-blue-600">
              {teamScoreData.team1First}
            </p>
            <p className="text-center border-b-4 border-l-4 border-blue-600">
              {teamScoreData.team1Second}
            </p>
            <p className="text-center border-b-4 border-l-4 border-r-4 border-blue-600">
              {teamScoreData.team1Final}
            </p>
            <p className="p-4 text-center border-b-4 border-l-4 border-blue-600">
              {teamScoreData.team2}
            </p>
            <p className="text-center border-b-4 border-l-4 border-blue-600">
              {teamScoreData.team2First}
            </p>
            <p className="text-center border-b-4 border-l-4 border-blue-600">
              {teamScoreData.team2Second}
            </p>
            <p className="text-center border-b-4 border-l-4 border-r-4 border-blue-600">
              {teamScoreData.team2Final}
            </p>
          </div>
        );
      })}
    </div>
  );
}
