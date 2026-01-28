import { useEffect, useState } from "react";
import { ItemCard } from "./components/ItemCard";
import Login from "./components/Login";
import { fetchItems } from "./services/itemService";
import { useAuctionSocket } from "./hooks/useAuctionSocket";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [items, setItems] = useState([]);
  const [serverTimeOffset, setServerTimeOffset] = useState(0);

  useEffect(() => {
    if (isLoggedIn && userName) {
      setCurrentUserId(`user_${userName}_${Date.now()}`);

      fetchItems()
        .then((response) => {
          setItems(response.data);
          setServerTimeOffset(response.serverTime - Date.now());
        })
        .catch(console.error);
    }
  }, [isLoggedIn, userName]);

  const { connectionStatus, flashingItems, outbidItems, placeBid } =
    useAuctionSocket(currentUserId, setItems);

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Live Bidding Platform</h1>
          <div className="header-info">
            <span className="user-id">User: {userName}</span>
            <span className={`status ${connectionStatus.toLowerCase()}`}>
              {connectionStatus}
            </span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="items-grid">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onBid={placeBid}
              currentUserId={currentUserId}
              isFlashing={flashingItems.has(item.id)}
              isOutbid={outbidItems.has(item.id)}
              serverTimeOffset={serverTimeOffset}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
