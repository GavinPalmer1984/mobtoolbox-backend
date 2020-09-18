# mobtoolbox-backend

## git clone
- git clone https://github.com/GavinPalmer1984/mobtoolbox-backend.git
- cd mobtoolbox-backend
- git submodule update --init

## after git clone
- install nodejs dependences with `npm install`
- then start the server on port 1984 with `node . 1984`
- then go to http://localhost:1984
- install ngrok from https://ngrok.com/
- then run `ngrok http 1984` to get a secure https url to your local
- share your ngrok url with your mob
- put your secret into the password area
- `start` and `stop` should push realtime events to your mob
- share your one-time secret with your mob so they can control the timer
