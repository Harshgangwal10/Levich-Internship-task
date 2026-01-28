# Live Bidding Platform

A real-time auction platform where users can bid on items in real-time using WebSockets.

## Features

- **Real-time Bidding**: Live bid updates using Socket.io
- **Item Auctions**: Browse and bid on multiple auction items
- **User Authentication**: Simple login system
- **Responsive Design**: Works on desktop and mobile devices
- **Bid Notifications**: Get notified when you're outbid or someone bids on an item

## Screenshot
<img width="1918" height="919" alt="image" src="https://github.com/user-attachments/assets/d4a0f177-2344-4a06-b73f-0c97fa3bf380" />


## Tech Stack

### Frontend

- **React** - UI framework
- **Vite** - Build tool
- **Socket.io Client** - Real-time communication
- **CSS** - Styling

### Backend

- **Node.js** - Runtime
- **Express** - Web framework
- **Socket.io** - WebSocket library for real-time updates
- **Dotenv** - Environment variables

## Project Structure

```
live_bidding_platform/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── services/   # API services
│   │   └── App.jsx     # Main app component
│   ├── .env           # Development environment variables
│   ├── .env.production # Production environment variables
│   └── package.json
├── backend/           # Node.js backend server
│   ├── src/
│   │   ├── routes/    # API routes
│   │   ├── sockets/   # WebSocket handlers
│   │   └── data/      # Sample data
│   ├── .env          # Backend environment variables
│   └── package.json
└── docker-compose.yml # Docker configuration
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd live_bidding_platform
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Development

#### Start Backend

```bash
cd backend
npm start
# Server runs on http://localhost:3000
```

#### Start Frontend

```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

### Docker

Run both services with Docker Compose:

```bash
docker-compose up
```

## API Endpoints

### Items

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item details

### WebSocket Events

- `UPDATE_BID` - Bid has been placed
- `BID_PLACED` - User placed a bid
- `OUTBID` - User was outbid







