using System.Collections.Generic;

namespace BowlingGame
{
    /// <summary>
    /// Represents a player in the bowling game.
    /// Tracks player name, frames, and total score.
    /// </summary>
    public class Player
    {
        public string Name { get; set; }
        public List<Frame> Frames { get; set; }
        public int TotalScore { get; set; }

        public Player(string name)
        {
            Name = name;
            Frames = new List<Frame>();
            TotalScore = 0;
        }

        /// <summary>
        /// Gets the current frame number (1-based) that the player is on.
        /// Used to determine which frame the player should play next.
        /// </summary>
        /// <returns>Current frame number</returns>
        public int GetCurrentFrameNumber()
        {
            return Frames.Count + 1;
        }

        /// <summary>
        /// Adds a completed frame to the player's game.
        /// This is called after each frame is finished.
        /// </summary>
        /// <param name="frame">The completed frame to add</param>
        public void AddFrame(Frame frame)
        {
            Frames.Add(frame);
        }
    }
}