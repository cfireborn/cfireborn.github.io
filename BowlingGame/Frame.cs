using System.Collections.Generic;
using System.Linq;

namespace BowlingGame
{
    /// <summary>
    /// Represents a single frame in bowling.
    /// Handles both regular frames (1-9) and the special 10th frame.
    /// Contains all rolls for the frame and calculates frame-specific scores.
    /// </summary>
    public class Frame
    {
        public List<int> Rolls { get; set; }
        public int FrameNumber { get; set; }
        public int BaseScore { get; set; } // Score without bonuses
        public int BonusScore { get; set; } // Additional points from strikes/spares
        public bool IsStrike { get; set; }
        public bool IsSpare { get; set; }

        public Frame(int frameNumber)
        {
            FrameNumber = frameNumber;
            Rolls = new List<int>();
            BaseScore = 0;
            BonusScore = 0;
            IsStrike = false;
            IsSpare = false;
        }

        /// <summary>
        /// Gets the total score for this frame (base + bonus).
        /// This is used when calculating the running total.
        /// </summary>
        public int TotalScore => BaseScore + BonusScore;

        /// <summary>
        /// Adds a roll to this frame and updates the frame state.
        /// Determines if the frame resulted in a strike or spare.
        /// </summary>
        /// <param name="pins">Number of pins knocked down</param>
        public void AddRoll(int pins)
        {
            Rolls.Add(pins);
            
            // Calculate base score (sum of all pins knocked down in this frame)
            BaseScore = Rolls.Sum();
            
            // Determine strike/spare status
            if (FrameNumber < 10) // Regular frames (1-9)
            {
                if (Rolls.Count == 1 && Rolls[0] == 10)
                {
                    IsStrike = true;
                }
                else if (Rolls.Count == 2 && Rolls.Sum() == 10)
                {
                    IsSpare = true;
                }
            }
            else // 10th frame has special rules
            {
                // In the 10th frame, strikes and spares allow extra rolls
                // but we still track them for display purposes
                if (Rolls.Count >= 2 && Rolls[0] + Rolls[1] == 10 && Rolls[0] != 10)
                {
                    IsSpare = true;
                }
                if (Rolls[0] == 10)
                {
                    IsStrike = true;
                }
            }
        }

        /// <summary>
        /// Checks if this frame is complete based on bowling rules.
        /// Regular frames: complete after strike or 2 rolls
        /// 10th frame: complete after 2 rolls, or 3 if strike/spare
        /// </summary>
        /// <returns>True if frame is complete</returns>
        public bool IsComplete()
        {
            if (FrameNumber < 10)
            {
                // Regular frames: complete after strike or 2 rolls
                return IsStrike || Rolls.Count >= 2;
            }
            else
            {
                // 10th frame: if first roll is strike or first two rolls are spare, need 3 rolls total
                if (Rolls.Count >= 1 && Rolls[0] == 10) // Strike on first roll
                {
                    return Rolls.Count >= 3;
                }
                else if (Rolls.Count >= 2 && Rolls[0] + Rolls[1] == 10) // Spare
                {
                    return Rolls.Count >= 3;
                }
                else
                {
                    return Rolls.Count >= 2; // No strike or spare, just need 2 rolls
                }
            }
        }

        /// <summary>
        /// Gets the remaining pins after the current rolls.
        /// Used to determine valid roll options for the next roll.
        /// </summary>
        /// <param name="totalPins">Total pins available (usually 10)</param>
        /// <returns>Number of pins remaining</returns>
        public int GetRemainingPins(int totalPins)
        {
            if (FrameNumber < 10)
            {
                if (Rolls.Count == 0)
                    return totalPins;
                else if (Rolls.Count == 1 && !IsStrike)
                    return totalPins - Rolls[0];
                else
                    return 0; // Frame is complete
            }
            else
            {
                // 10th frame has complex pin reset rules
                if (Rolls.Count == 0)
                    return totalPins;
                else if (Rolls.Count == 1)
                {
                    if (Rolls[0] == totalPins) // Strike, pins reset
                        return totalPins;
                    else
                        return totalPins - Rolls[0];
                }
                else if (Rolls.Count == 2)
                {
                    // If spare or strike on first roll, pins reset for third roll
                    if (Rolls[0] == totalPins || Rolls[0] + Rolls[1] == totalPins)
                        return totalPins;
                    else
                        return 0; // No more rolls needed
                }
                else
                    return 0; // Frame complete
            }
        }
    }
}