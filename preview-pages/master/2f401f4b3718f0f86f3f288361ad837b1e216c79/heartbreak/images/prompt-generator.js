/**
 * AI Image Prompt Generator for Heartbreak Stages
 * Generates detailed prompts for each stage/style combination
 */

const baseCharacter = "A young boy, teenager, thoughtful expression, gentle features, medium brown hair";

const stages = {
  denial: {
    emotion: "confused expression, looking away, unfocused eyes, shock, disbelief",
    pose: "hands covering face partially, denial gesture, standing alone, distant background, isolated",
    mood: "numbness, disconnection, uncertainty",
    colors: "muted tones, grey, desaturated colors, soft lighting"
  },
  anger: {
    emotion: "frustrated expression, clenched jaw, intense eyes, furrowed brow",
    pose: "fists clenched, aggressive posture, tense shoulders, confrontational stance",
    mood: "rage, blame, intensity, emotional outburst",
    colors: "red color tones, orange, intense lighting, dramatic shadows"
  },
  bargaining: {
    emotion: "pleading expression, desperate eyes, hopeful yet sad, searching look",
    pose: "reaching hands, looking upward, prayer-like gesture, outstretched arms, searching pose",
    mood: "desperation, what-if thinking, grasping for hope",
    colors: "yellow, amber, searching light, golden tones"
  },
  depression: {
    emotion: "tears in eyes, deep melancholy, withdrawn expression, profound sadness",
    pose: "head in hands, slumped shoulders, sitting alone, curled up position",
    mood: "dark mood, introspection, isolation, weight of sadness",
    colors: "blue tones, dark colors, muted lighting, shadows"
  },
  acceptance: {
    emotion: "calm sadness, peaceful expression, understanding eyes, gentle melancholy",
    pose: "accepting pose, neutral posture, open stance, relaxed shoulders",
    mood: "understanding, beginning peace, quiet resignation",
    colors: "neutral tones, balanced lighting, serene atmosphere"
  },
  hope: {
    emotion: "slight smile, optimistic eyes, cautious happiness, gentle brightness",
    pose: "looking toward light, reaching toward brightness, upward gaze",
    mood: "cautious optimism, emerging from darkness, small joy",
    colors: "light blue, soft yellow, dawn colors, gentle brightness"
  },
  healing: {
    emotion: "genuine smile, confident expression, bright eyes, renewed spirit",
    pose: "confident posture, strong stance, open arms, victorious pose",
    mood: "growth, wisdom, renewed strength, transformation",
    colors: "green tones, bright colors, vibrant lighting, sunshine"
  }
};

const artStyles = {
  cartoon: "cartoon style, animated, clean lines, vibrant colors, cel-shaded, Disney-like quality",
  impressionist: "impressionist painting style, soft brushstrokes, like Monet or Renoir, painterly texture, visible brushwork",
  abstract: "abstract art style, geometric shapes, emotional color representation, non-representational elements, symbolic forms",
  "realistic-oil-painting": "classical oil painting, renaissance style, detailed brushwork, chiaroscuro lighting, masterpiece quality",
  photorealistic: "photorealistic, high detail, professional photography lighting, cinematic quality, ultra-realistic"
};

/**
 * Generate a complete prompt for a specific stage and art style
 * @param {string} stageName - Name of the grief stage
 * @param {string} artStyleName - Name of the art style
 * @param {number} variation - Variation number (1-5+)
 * @returns {string} Complete AI art prompt
 */
function generatePrompt(stageName, artStyleName, variation = 1) {
  const stage = stages[stageName];
  const artStyle = artStyles[artStyleName];
  
  if (!stage || !artStyle) {
    throw new Error(`Invalid stage (${stageName}) or art style (${artStyleName})`);
  }
  
  // Create variation-specific elements
  const emotions = stage.emotion.split(', ');
  const poses = stage.pose.split(', ');
  const selectedEmotion = emotions[(variation - 1) % emotions.length];
  const selectedPose = poses[(variation - 1) % poses.length];
  
  const prompt = `${baseCharacter}, ${selectedEmotion}, ${selectedPose}, ${stage.mood}, ${stage.colors}, ${artStyle}, high quality, detailed, emotional depth, masterpiece`;
  
  return prompt;
}

/**
 * Generate all prompts for a specific stage
 * @param {string} stageName - Name of the grief stage
 * @returns {object} Object with art style keys and prompt arrays
 */
function generateStagePrompts(stageName) {
  const stagePrompts = {};
  
  Object.keys(artStyles).forEach(styleName => {
    stagePrompts[styleName] = [];
    for (let i = 1; i <= 5; i++) {
      stagePrompts[styleName].push({
        variation: i,
        prompt: generatePrompt(stageName, styleName, i),
        filename: `${stageName}_${styleName}_${i.toString().padStart(2, '0')}.png`
      });
    }
  });
  
  return stagePrompts;
}

/**
 * Generate all prompts for all stages
 * @returns {object} Complete prompt collection
 */
function generateAllPrompts() {
  const allPrompts = {};
  
  Object.keys(stages).forEach(stageName => {
    allPrompts[stageName] = generateStagePrompts(stageName);
  });
  
  return allPrompts;
}

/**
 * Export prompts to formatted text for copy-paste into AI tools
 * @param {string} stageName - Optional: specific stage name
 * @param {string} artStyleName - Optional: specific art style
 * @returns {string} Formatted text output
 */
function exportPromptsAsText(stageName = null, artStyleName = null) {
  let output = "# Heartbreak Healing Stages - AI Image Prompts\n\n";
  
  if (stageName && artStyleName) {
    // Single style prompts
    output += `## ${stageName.charAt(0).toUpperCase() + stageName.slice(1)} - ${artStyleName.charAt(0).toUpperCase() + artStyleName.slice(1)}\n\n`;
    for (let i = 1; i <= 5; i++) {
      const prompt = generatePrompt(stageName, artStyleName, i);
      output += `**Variation ${i}:**\n${prompt}\n\n`;
    }
  } else if (stageName) {
    // Single stage, all styles
    const stagePrompts = generateStagePrompts(stageName);
    output += `## ${stageName.charAt(0).toUpperCase() + stageName.slice(1)} Stage\n\n`;
    
    Object.keys(stagePrompts).forEach(styleName => {
      output += `### ${styleName.charAt(0).toUpperCase() + styleName.slice(1)} Style\n\n`;
      stagePrompts[styleName].forEach(item => {
        output += `**${item.filename}:**\n${item.prompt}\n\n`;
      });
    });
  } else {
    // All prompts
    const allPrompts = generateAllPrompts();
    
    Object.keys(allPrompts).forEach(stage => {
      output += `## ${stage.charAt(0).toUpperCase() + stage.slice(1)} Stage\n\n`;
      
      Object.keys(allPrompts[stage]).forEach(style => {
        output += `### ${style.charAt(0).toUpperCase() + style.slice(1)} Style\n\n`;
        allPrompts[stage][style].forEach(item => {
          output += `**${item.filename}:**\n${item.prompt}\n\n`;
        });
      });
    });
  }
  
  return output;
}

/**
 * Generate negative prompts for better AI image quality
 * @returns {string} Common negative prompt
 */
function getNegativePrompt() {
  return "blurry, low quality, distorted, deformed, extra limbs, bad anatomy, watermark, signature, text, multiple people, crowd, background people, inappropriate content, violence, weapons, nudity";
}

// Example usage and exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generatePrompt,
    generateStagePrompts,
    generateAllPrompts,
    exportPromptsAsText,
    getNegativePrompt,
    stages,
    artStyles
  };
} else {
  // Browser environment - add to window
  window.PromptGenerator = {
    generatePrompt,
    generateStagePrompts,
    generateAllPrompts,
    exportPromptsAsText,
    getNegativePrompt
  };
}

// Example usage:
// console.log(generatePrompt('depression', 'cartoon', 1));
// console.log(exportPromptsAsText('anger', 'impressionist'));
// console.log(exportPromptsAsText('denial')); // All styles for denial stage
// console.log(exportPromptsAsText()); // All prompts