using System;
using System.Collections.Generic;
using System.Linq;
using BowlingGame.Models;

namespace BowlingGame.Services
{
    /// <summary>
    /// Main game logic for the bowling game
    /// </summary>
    public class BowlingGameService
    {
        /// <summary>
        /// List of players in the game
        /// </summary>
        public List<Player> Players { get; private set; }

        /// <summary>
        /// The current game mode configuration
        /// </summary>
        public GameMode CurrentGameMode { get; set; }

        /// <summary>
        /// Constructor to initialize the game
        /// </summary>
        public BowlingGameService()
        {
            Players = new List<Player>();
            // Default to standard bowling rules
            CurrentGameMode = new GameMode
            {
                Name = "Standard",
                TotalFrames = 10,
                StrikeBonus = 10,
                SpareBonus = 5,
                MaxPinsPerFrame = 10
            };
        }

        /// <summary>
        /// Adds a player to the game
        /// </summary>
        /// <param name="playerName">Name of the player to add</param>
        public void AddPlayer(string playerName)
        {
            Players.Add(new Player(playerName));
        }

        /// <summary>
        /// Processes a roll for the specified player
        /// </summary>
        /// <param name="player">The player making the roll</param>
        /// <param name="pinsKnocked">Number of pins knocked down</param>
        public void ProcessRoll(Player player, int pinsKnocked)
        {
            // Get or create current frame
            Frame currentFrame = GetOrCreateCurrentFrame(player);
            
            // Add the roll to the frame
            currentFrame.AddRoll(pinsKnocked);
            
            // Calculate and update scores
            CalculateScores(player);
        }

        /// <summary>
        /// Gets the current frame for a player, creating it if necessary
        /// </summary>
        private Frame GetOrCreateCurrentFrame(Player player)
        {
            // Find the last incomplete frame or create a new one
            Frame currentFrame = player.Frames.FirstOrDefault(f => !f.IsComplete);
            
            if (currentFrame == null && player.Frames.Count < CurrentGameMode.TotalFrames)
            {
                currentFrame = new Frame(player.Frames.Count + 1);
                player.Frames.Add(currentFrame);
            }
            
            return currentFrame;
        }

        /// <summary>
        /// Calculates scores for all frames including strike and spare bonuses
        /// </summary>
        /// <param name="player">The player whose scores to calculate</param>
        private void CalculateScores(Player player)
        {
            for (int i = 0; i < player.Frames.Count; i++)
            {
                Frame frame = player.Frames[i];
                int frameScore = 0;

                if (frame.FrameNumber == CurrentGameMode.TotalFrames)
                {
                    // 10th frame - just sum all rolls
                    frameScore = frame.Rolls.Sum();
                }
                else
                {
                    // Regular frames
                    frameScore = frame.Rolls.Sum();

                    if (frame.IsStrike)
                    {
                        // Strike bonus: next two rolls
                        frameScore += GetStrikeBonus(player, i);
                    }
                    else if (frame.IsSpare)
                    {
                        // Spare bonus: next one roll
                        frameScore += GetSpareBonus(player, i);
                    }
                }

                frame.Score = frameScore;
            }

            player.UpdateTotalScore();
        }

        /// <summary>
        /// Calculates the strike bonus (next two rolls)
        /// </summary>
        private int GetStrikeBonus(Player player, int frameIndex)
        {
            int bonus = 0;
            
            // Look at the next frame
            if (frameIndex + 1 < player.Frames.Count)
            {
                Frame nextFrame = player.Frames[frameIndex + 1];
                
                if (nextFrame.Rolls.Count > 0)
                {
                    bonus += nextFrame.Rolls[0];
                    
                    if (nextFrame.Rolls.Count > 1)
                    {
                        // Second roll in next frame
                        bonus += nextFrame.Rolls[1];
                    }
                    else if (nextFrame.IsStrike && frameIndex + 2 < player.Frames.Count)
                    {
                        // Next frame is also a strike, look at frame after that
                        Frame frameAfterNext = player.Frames[frameIndex + 2];
                        if (frameAfterNext.Rolls.Count > 0)
                        {
                            bonus += frameAfterNext.Rolls[0];
                        }
                    }
                }
            }
            
            // Apply custom strike bonus if configured
            if (CurrentGameMode.StrikeBonus != 10)
            {
                bonus += CurrentGameMode.StrikeBonus - 10;
            }
            
            return bonus;
        }

        /// <summary>
        /// Calculates the spare bonus (next one roll)
        /// </summary>
        private int GetSpareBonus(Player player, int frameIndex)
        {
            int bonus = 0;
            
            // Look at the next frame
            if (frameIndex + 1 < player.Frames.Count)
            {
                Frame nextFrame = player.Frames[frameIndex + 1];
                if (nextFrame.Rolls.Count > 0)
                {
                    bonus += nextFrame.Rolls[0];
                }
            }
            
            // Apply custom spare bonus if configured
            if (CurrentGameMode.SpareBonus != 5)
            {
                bonus += CurrentGameMode.SpareBonus - 5;
            }
            
            return bonus;
        }

        /// <summary>
        /// Checks if the game is complete for all players
        /// </summary>
        /// <returns>True if all players have completed all frames</returns>
        public bool IsGameComplete()
        {
            return Players.All(p => p.Frames.Count == CurrentGameMode.TotalFrames && 
                                   p.Frames.All(f => f.IsComplete));
        }

        /// <summary>
        /// Gets the winner(s) of the game
        /// </summary>
        /// <returns>List of players with the highest score</returns>
        public List<Player> GetWinners()
        {
            if (!IsGameComplete())
                return new List<Player>();

            int highestScore = Players.Max(p => p.TotalScore);
            return Players.Where(p => p.TotalScore == highestScore).ToList();
        }
    }
}