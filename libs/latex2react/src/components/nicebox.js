import React from 'react';
export default ({ lines }) => (
  <span
    className="math nicebox"
    dangerouslySetInnerHTML={{ _html: lines.join('\n') }}
  />
);
