📊 Stock Portfolio Dashboard
A full-stack stock portfolio web application built with Next.js, Node.js, and Google Sheets.
It displays portfolio data in a table and a graphical sector-wise representation, with real-time refresh and API integration.

🚀 Features
🔁 Auto-refresh every 15 seconds

📋 Table view with P/E, Gain/Loss, CMP, Investment, and more

📊 Pie chart to visualize sector-wise allocation

🔍 Google Sheets as backend data source

🔐 API secured with key from .env

🎨 Tailwind CSS for styling

🗂️ Project Structure
bash
Copy
Edit
STock_Portfolio_Dashboard/
├── backend/                # Node.js backend
│   ├── server.js
│   ├── routes/
│   ├── services/
│   └── .env
└── frontend/               # Next.js frontend
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── types/
    │   ├── utils/
    │   └── styles/
    └── .env.local
⚙️ Technologies Used
Frontend: Next.js, TypeScript, Tailwind CSS, Recharts

Backend: Node.js, Express, Axios

External: Google Sheets as dynamic data source
