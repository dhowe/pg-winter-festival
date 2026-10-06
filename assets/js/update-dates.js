/**
 * Date Updater for PG Winter Festival 2026
 * This script dynamically updates date content on the page
 * 
 * Usage: Include this script after the main Framer script
 * It will automatically find and replace date-related content
 */

// Date configuration loaded from dates.json
const festivalDates = {
  "festival_year": "2026",
  "timeline": {
    "festival_briefing": "TBD",
    "application_deadline": "11th November 2026",
    "selection_panel": "16th November 2026",
    "confirmation_of_participation": "18th November 2026",
    "show_texts_complete": "1st December 2026",
    "festival_setup": "7th-9th December 2026",
    "festival_dates": "10th – 12th December 2026"
  }
};

/**
 * Update text content in the page
 * @param {string} searchText - Text to search for
 * @param {string} replacementText - Text to replace with
 */
function updateTextContent(searchText, replacementText) {
  // Find all text nodes in the document
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while (node = walker.nextNode()) {
    if (node.nodeValue && node.nodeValue.includes(searchText)) {
      node.nodeValue = node.nodeValue.replace(searchText, replacementText);
    }
  }
}

/**
 * Update all date-related content on the page
 */
function updateDates() {
  console.log('PG Festival 2026 - Updating dates...');
  
  // Update any existing November/December references to 2026
  // This handles cases where the HTML might have old dates
  
  const updates = [
    // Replace old year references
    ['December 2025', festivalDates.timeline.festival_dates],
    ['November 2025', festivalDates.timeline.application_deadline],
    
    // Update specific timeline items if they exist in the content
    // These are generic patterns that might match the Framer content
    {
      search: /Application\s+deadline[:\s]*[^<\n]+/gi,
      replace: `Application deadline: ${festivalDates.timeline.application_deadline}`
    },
    {
      search: /Selection\s+panel[:\s]*[^<\n]+/gi,
      replace: `Selection Panel: ${festivalDates.timeline.selection_panel}`
    },
    {
      search: /Confirmation[:\s]*[^<\n]+/gi,
      replace: `Confirmation of participation: ${festivalDates.timeline.confirmation_of_participation}`
    },
    {
      search: /Festival\s+setup[:\s]*[^<\n]+/gi,
      replace: `Festival setup: ${festivalDates.timeline.festival_setup}`
    },
    {
      search: /Festival[:\s]+(?!2026)[^<\n]+/gi,
      replace: `Festival: ${festivalDates.timeline.festival_dates}`
    }
  ];

  // Apply updates
  updates.forEach(update => {
    if (typeof update === 'object') {
      // Regex replacement
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el.textContent && update.search.test(el.textContent)) {
          el.innerHTML = el.innerHTML.replace(update.search, update.replace);
        }
      });
    } else {
      // Simple text replacement
      updateTextContent(update[0], update[1]);
    }
  });

  console.log('PG Festival 2026 - Dates updated successfully!');
}

/**
 * Alternative approach: Inject timeline content into a specific section
 * This can be used if you want to add a dedicated timeline section
 */
function injectTimeline() {
  // Look for a "When" section or create one
  const whenSection = Array.from(document.querySelectorAll('div, section'))
    .find(el => el.textContent.toLowerCase().includes('when'));

  if (whenSection) {
    const timelineHTML = `
      <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
        <h4 style="margin: 0 0 10px 0; color: #fff;">Key Dates</h4>
        <div style="font-size: 14px; line-height: 1.6;">
          <div><strong>Festival Briefing:</strong> ${festivalDates.timeline.festival_briefing}</div>
          <div><strong>Application Deadline:</strong> ${festivalDates.timeline.application_deadline}</div>
          <div><strong>Selection Panel:</strong> ${festivalDates.timeline.selection_panel}</div>
          <div><strong>Confirmation:</strong> ${festivalDates.timeline.confirmation_of_participation}</div>
          <div><strong>Show Texts Complete:</strong> ${festivalDates.timeline.show_texts_complete}</div>
          <div><strong>Festival Setup:</strong> ${festivalDates.timeline.festival_setup}</div>
          <div><strong>Festival:</strong> ${festivalDates.timeline.festival_dates}</div>
        </div>
      </div>
    `;
    
    whenSection.insertAdjacentHTML('beforeend', timelineHTML);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    updateDates();
    // Uncomment the line below if you want to inject a timeline section
    // injectTimeline();
  });
} else {
  updateDates();
  // injectTimeline();
}

// Export for potential manual triggering
window.updateFestivalDates = updateDates;
