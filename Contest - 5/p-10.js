function simulateTicketQueue(commands) {
  const queue = [];
  const served = [];

  for (const cmd of commands) {
    if (cmd === "serve") {
      if (queue.length > 0) {
        served.push(queue.shift());
      }
    } else if (cmd.startsWith("join ")) {
      const name = cmd.slice(5);
      if (!queue.includes(name)) {
        queue.push(name);
      }
    } else if (cmd.startsWith("leave ")) {
      const name = cmd.slice(6);
      const index = queue.indexOf(name);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    }
  }

  return { queue, served };
}               

// Example:
// const commands = [
//   "join Alice",
//   "join Bob",
//   "serve",
//   "join Charlie",
//   "leave Alice",
//   "serve",
//   "serve"
// ];

// const result = simulateTicketQueue(commands);

// console.log(result.queue);   // ["Bob", "Charlie"]
// console.log(result.served); // ["Alice", "Bob"]
// []
// [ 'Alice', 'Bob', 'Charlie' ]

// Alternative Solution:

// function simulateTicketQueue(commands) {
//   return commands.reduce((acc, cmd) => {
//     if (cmd === "serve") {
//       if (acc.queue.length > 0) acc.served.push(acc.queue.shift());
//     } else if (cmd.startsWith("join ")) {
//       const name = cmd.slice(5);
//       if (!acc.queue.includes(name)) acc.queue.push(name);
//     } else if (cmd.startsWith("leave ")) {
//       const name = cmd.slice(6);
//       acc.queue = acc.queue.filter(n => n !== name);
//     }
//     return acc;
//   }, { queue: [], served: [] });
// }
