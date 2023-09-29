import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  const [averageCompletionPercentage, setAverageCompletionPercentage] =
    useState(0);
  const [favoriteTrick, setFavoriteTrick] = useState(null);

  useEffect(() => {
    if (user) {
      const completedTricks = user?.completedTricks || [];

      if (completedTricks > 0) {
        const totalCompletionPercentage = completedTricks.reduce(
          (total, trick) => total + trick.completionPercentage,
          0
        );
        const averagePercentage =
          totalCompletionPercentage / completedTricks.length;
        setAverageCompletionPercentage(averagePercentage);
      }

      const trickCounts = {};
      completedTricks.forEach((trick) => {
        if (!trickCounts[trick.trickName]) {
          trickCounts[trick.trickName] = 1;
        } else {
          trickCounts[trick.trickName]++;
        }
      });

      let maxCount = 0;
      let favorite = null;
      for (const trickName in trickCounts) {
        if (trickCounts[trickName] > maxCount) {
          maxCount = trickCounts[trickName];
          favorite = trickName;
        }
      }
      setFavoriteTrick(favorite);
    }
  }, [user]);

  const calculateSkillLevel = (completionPercentage) => {
    const skillLevels = [
      { name: "Beginner", minPercentage: 0, maxPercentage: 49 },
      { name: "Intermediate", minPercentage: 50, maxPercentage: 79 },
      { name: "Advanced", minPercentage: 80, maxPercentage: 100 },
    ];

    for (const level of skillLevels) {
      if (
        completionPercentage >= level.minPercentage &&
        completionPercentage <= level.maxPercentage
      ) {
        return level.name;
      }
    }
    return "Unknown";
  };
  const userSkillLevel = calculateSkillLevel(averageCompletionPercentage);
  return (
    <div className='user-dashboard'>
      <h2>{user?.username}'s Dashboard</h2>
      <p>
        Average Completion Percentage: {averageCompletionPercentage.toFixed(2)}%
      </p>
      <p>Skill Level: {userSkillLevel}</p>
      {favoriteTrick && <p>Favorite Trick: {favoriteTrick}</p>}
    </div>
  );
};

export default Dashboard;
