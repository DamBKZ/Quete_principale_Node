import "dotenv/config";

import cowsay from "cowsay";

const message = `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`

console.log(cowsay.say({
text :message,
e :'^^',
T :'U',
}));