/*
 * Copyright (C) 2022 [Ameed Jamous]
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */



const readline = require('readline');
const request = require('request');

// create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// define a function to query the public IP address
const queryIp = () => {
  // make an HTTP request to a service that returns the public IP address
  request('https://api.ipify.org', (error, response, body) => {
    if (error) {
      console.error(`Error: ${error}`);
    } else {
      console.log(`Your public IP address is: ${body}`);
    }
    // close the readline interface after the request has completed
    rl.close();
  });
};

// prompt the user to enter a command
rl.question('Enter a command (ip to get your public ip-address, q to quit): ', (command) => {
  if (command === 'q') {
    // exit the program if the user enters 'q'
    console.log('Bye!');
    rl.close();
  } else if (command === 'ip') {
    // query the public IP address if the user enters 'ip'
    queryIp();

  } else {
    // show an error message if the user enters an invalid command
    console.error('Invalid command');
  }
  // prompt the user again
  rl.prompt();
});

// start the prompt
rl.prompt();
