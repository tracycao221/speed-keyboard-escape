import fs from 'node:fs';

const record = {
  generatedAt: new Date().toISOString(),
  game: '+1 Speed Keyboard Escape',
  checks: ['codes', 'updates', 'stage-12', 'wins-guide', 'official-links'],
  policy: 'Collect source evidence first; do not publish unverified codes, rewards, or boost values.'
};

fs.writeFileSync('content-update-last-run.json', JSON.stringify(record, null, 2));
console.log('content update source packet written');
