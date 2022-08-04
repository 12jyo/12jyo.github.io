/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  {
    "type": "play_sound",
    "message0": "Play %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["Song 1", "sounds/Anh042.mp3"],
          ["Song 2", "sounds/Anh078.mp3"],
          ["Song 3", "sounds/BWV0531i.mp3"],
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355,
  }
]);

Blockly.JavaScript['play_sound'] = function(block) {
  let value = '\'' + block.getFieldValue('VALUE') + '\'';
  return 'MusicMaker.queueSound(' + value + ');\n';
};
