using System;
using System.Collections.Generic;

namespace BowlingGame.Models
{
    /// <summary>
    /// Represents a single frame in a bowling game
    /// </summary>
    public class Frame
    {
        /// <summary>
        /// The frame number (1-10 for standard game)
        /// </summary>
        public int FrameNumber { get; set; }

        /// <summary>
        /// List of rolls in this frame (usually 2, but can be 3 for 10th frame)
        /// </summary>
        public List<int> Rolls { get; set; }

        /// <summary>
        /// The score for this frame (including bonuses from strikes/spares)
        /// </summary>
        public int Score { get; set; }

        /// <summary>
        /// Indicates if this frame is a strike
        /// </summary>
        public bool IsStrike 
        { 
            get 
            { 
                return Rolls.Count > 0 && Rolls[0] == 10 && FrameNumber < 10;
            }
        }

        /// <summary>
        /// Indicates if this frame is a spare
        /// </summary>
        public bool IsSpare 
        { 
            get 
            { 
                return !IsStrike && Rolls.Count >= 2 && (Rolls[0] + Rolls[1]) == 10;
            }
        }

        /// <summary>
        /// Indicates if this frame is complete (all rolls made)
        /// </summary>
        public bool IsComplete 
        { 
            get 
            {
                if (FrameNumber == 10)
                {
                    // 10th frame special rules
                    if (Rolls.Count == 0) return false;
                    if (Rolls.Count == 1) return false;
                    if (Rolls.Count == 2)
                    {
                        // If strike or spare in 10th frame, get 3 rolls
                        return (Rolls[0] + Rolls[1]) < 10;
                    }
                    return Rolls.Count >= 3;
                }
                else
                {
                    // Regular frames
                    return IsStrike || Rolls.Count >= 2;
                }
            }
        }

        /// <summary>
        /// Constructor to initialize a new frame
        /// </summary>
        /// <param name="frameNumber">The frame number</param>
        public Frame(int frameNumber)
        {
            FrameNumber = frameNumber;
            Rolls = new List<int>();
            Score = 0;
        }

        /// <summary>
        /// Adds a roll to this frame
        /// </summary>
        /// <param name="pins">Number of pins knocked down</param>
        public void AddRoll(int pins)
        {
            if (!IsComplete)
            {
                Rolls.Add(pins);
            }
        }

        /// <summary>
        /// Gets the number of pins remaining for the next roll
        /// </summary>
        /// <returns>Number of pins remaining</returns>
        public int GetRemainingPins()
        {
            if (FrameNumber == 10)
            {
                // 10th frame special rules
                if (Rolls.Count == 0) return 10;
                if (Rolls.Count == 1)
                {
                    return Rolls[0] == 10 ? 10 : 10 - Rolls[0];
                }
                if (Rolls.Count == 2)
                {
                    if (Rolls[0] == 10) // Strike on first roll
                    {
                        return Rolls[1] == 10 ? 10 : 10 - Rolls[1];
                    }
                    else if (Rolls[0] + Rolls[1] == 10) // Spare
                    {
                        return 10;
                    }
                }
            }
            else
            {
                // Regular frames
                if (Rolls.Count == 0) return 10;
                if (Rolls.Count == 1 && !IsStrike) return 10 - Rolls[0];
            }
            return 0;
        }
    }
}