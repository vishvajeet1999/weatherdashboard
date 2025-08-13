A simple weather dashboard where users enter a city name to see current weather and receive an outfit suggestion based on temperature and conditions. Includes a searchable history (last 5 cities), robust error handling, and a responsive UI.

 Features:

City Search – Type a city and fetch weather.

Weather Display – Temperature, condition (sunny/rainy/cloudy), wind speed, humidity.

Outfit Recommendation – Helpful tips (e.g., umbrella for rain, jacket for cold).

Search History – Shows the last 5 searched cities (in-memory).

Responsive UI – Looks good on mobile and desktop.

Graceful Errors – Invalid city, network/API failures handled nicely.

🧰 Tech Stack
React + Vite

Redux Toolkit (state for current weather + history)

Axios for HTTP

MUI (Material UI) for components

🚀 Getting Started
1) Prerequisites
Node.js 18+

npm or yarn

2) git clone <repo-url>
cd <your-project>

npm install
3) Environment Variables
Create a .env file at the project root. With Vite, variables must start with VITE_.

env
VITE_WEATHER_API_KEY=4dc30aeeb92747fa88f94543251308


4) Run
npm run dev