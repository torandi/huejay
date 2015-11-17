#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving schedules...');
console.log();

client.getSchedules()
  .then(schedules => {
    for (let schedule of schedules) {
      console.log(`Schedule [${schedule.id}]: ${schedule.name}`);
      console.log(`  Description: ${schedule.description}`);
      console.log(`  Created: ${schedule.created}`);
      console.log(`  Local time: ${schedule.localTime}`);
      console.log(`  Status: ${schedule.status}`);
      console.log(`  Auto delete: ${Boolean(schedule.autoDelete)}`);
      console.log(`  Command:`);
      console.log(`    Method: ${schedule.command.method}`);
      console.log(`    Address: ${schedule.command.address}`);
      console.log(`    Body: ${JSON.stringify(schedule.command.body)}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });