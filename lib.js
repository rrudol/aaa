const PREFIX = "AAA";

const clients = Object.entries(process.env)
  .filter(([key]) => key.startsWith(`${PREFIX}_`))
  .map(([key, value]) => {
    const out = value.match(
      /(?<protocol>udp|tcp|ws):\/\/(?<address>.*):(?<port>\d{2,4})$/
    );
    if (out) {
      return { name: key.replace(`${PREFIX}_`, ""), ...out.groups };
    } else {
      console.error(`${key}=${value} is not correct`);
    }
  })
  .filter(e => e);

// console.log(clients);

module.exports = {
  clients
}