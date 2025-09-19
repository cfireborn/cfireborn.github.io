using System;
using System.Collections.Generic;

namespace BowlingGame.Models
{
    /// <summary>
    /// Represents a player in the bowling game
    /// </summary>
    public class Player
    {
        /// <summary>
        /// The player's name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// List of all frames for this player
        /// </summary>
        public List<Frame> Frames { get; set; }

        /// <summary>
        /// The player's current total score
        /// </summary>
        public int TotalScore { get; private set; }

        /// <summary>
        /// Constructor to initialize a new player
        /// </summary>
        /// <param name="name">The player's name</param>
        public Player(string name)
        {
            Name = name;
            Frames = new List<Frame>();
            TotalScore = 0;
        }

        /// <summary>
        /// Updates the player's total score based on all frames
        /// </summary>
        public void UpdateTotalScore()
        {
            TotalScore = 0;
            foreach (var frame in Frames)
            {
                TotalScore += frame.Score;
            }
        }

        /// <summary>
        /// Gets the current frame number (1-based)
        /// </summary>
        /// <returns>The current frame number</returns>
        public int GetCurrentFrameNumber()
        {
            return Frames.Count + 1;
        }
    }
}