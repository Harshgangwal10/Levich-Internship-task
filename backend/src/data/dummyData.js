import { Mutex } from "async-mutex";

export const items = [
  {
    id: 1,
    title: "Vintage Camera",
    startingPrice: 50,
    currentBid: 75,
    highestBidder: "user_anonymous",
    auctionEndTime: Date.now() + 1 * 60 * 1000, 
    bidHistory: []
  },
  {
    id: 2,
    title: "Rare Book Collection",
    startingPrice: 100,
    currentBid: 150,
    highestBidder: "user_collector",
    auctionEndTime: Date.now() +  2 * 60 * 1000,
    bidHistory: []
  },
  {
    id: 3,
    title: "Antique Wooden Clock",
    startingPrice: 200,
    currentBid: 260,
    highestBidder: "user_antique",
    auctionEndTime: Date.now() + 3 * 60 * 1000,
    bidHistory: []
  },
  {
    id: 4,
    title: "Limited Edition Sneakers",
    startingPrice: 80,
    currentBid: 120,
    highestBidder: "user_sneakerhead",
    auctionEndTime: Date.now() + 4 * 60 * 1000,
    bidHistory: []
  },
  {
    id: 5,
    title: "Gaming Laptop (Used)",
    startingPrice: 500,
    currentBid: 650,
    highestBidder: "user_gamer",
    auctionEndTime: Date.now() + 10 * 60 * 1000,
    bidHistory: []
  },
  {
    id: 6,
    title: "Handcrafted Painting",
    startingPrice: 300,
    currentBid: 340,
    highestBidder: "user_artist",
    auctionEndTime: Date.now() + 8 * 60 * 1000,
    bidHistory: []
  }
];


export const itemMutexes = new Map();

items.forEach(item => {
  itemMutexes.set(item.id, new Mutex());
});
