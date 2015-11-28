
'use strict';

goog.provide('Blockly.JavaScript.junior');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['green_flag'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('green_flag');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('right');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('left');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['up'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('up');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('down');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['turn_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('turn_left');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('turn_right');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "alert('end');";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['right_r'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_repeat == "") value_repeat = 1;
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  for(var i=0; i<value_repeat; i++)
	  code = code+"alert('right');";
  return code;
};

Blockly.JavaScript['left_r'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_repeat == "") value_repeat = 1;
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  for(var i=0; i<value_repeat; i++)
	  code = code+"alert('left');";
  return code;
};

Blockly.JavaScript['up_r'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_repeat == "") value_repeat = 1;
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  for(var i=0; i<value_repeat; i++)
	  code = code+"alert('up');";
  return code;
};

Blockly.JavaScript['down_r'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_repeat == "") value_repeat = 1;
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  for(var i=0; i<value_repeat; i++)
	  code = code+"alert('down');";
  return code;
};

Blockly.JavaScript['turn_right_r'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_repeat == "") value_repeat = 1;
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  for(var i=0; i<value_repeat; i++)
	  code = code+"alert('turn_right');";
  return code;
};

Blockly.JavaScript['turn_left_r'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_repeat == "") value_repeat = 1;
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  for(var i=0; i<value_repeat; i++)
	  code = code+"alert('left');";
  return code;
};

Blockly.JavaScript['num_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '1';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '2';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '3';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_4'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '4';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_5'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '5';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_6'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '6';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_7'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '7';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_8'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '8';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_9'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '9';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['num_10'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '10';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};