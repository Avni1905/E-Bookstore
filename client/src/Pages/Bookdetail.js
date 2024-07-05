import './Bookdetail.css';
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const bookData = [
  { id: 1, description: "Pride and Prejudice is a classic novel of manners written by Jane Austen. First published in 1813, it tells the story of Elizabeth Bennet, one of five sisters, navigating society and relationships in the rural countryside of England. The novel explores themes of love, reputation, and class, with a keen focus on the complex dynamics between Elizabeth and the enigmatic Mr. Darcy.", price: "Rs350", url: "https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, description: "Death on the Nile is a classic detective novel by Agatha Christie, first published in 1937. The story features Hercule Poirot, the famous Belgian detective, who is on vacation in Egypt. However, his holiday turns into a murder investigation when a wealthy heiress is found dead on a luxurious cruise along the Nile River. As Poirot delves into the mystery, he uncovers a web of intrigue, jealousy, and deceit among the passengers. The novel is renowned for its intricate plot, vivid descriptions of the Egyptian landscape, and Christie's masterful storytelling.", price: "Rs299", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOaMN0gii5k3brUHzJOSFr9zbk62NgwKiig&usqp=CAU" },
  { id: 3, description: "The Divine You by Matthew Fox is an inspiring and transformative guide that explores the spiritual journey of self-discovery and personal growth. Drawing on ancient wisdom, contemporary psychology, and spiritual practices, Fox encourages readers to delve into their inner selves to uncover their divine essence. Through insightful reflections, practical exercises, and heartfelt stories, The Divine You offers a path to embracing one's true potential, fostering a deeper connection with the universe, and living a more fulfilling, enlightened life.", price: "Rs734", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZr4I2-zuI9ZVicR-uBxgbQTIHhAuaXgaMw&usqp=CAU" },
  { id: 4, description: "The Secret by Rhonda Byrne is a self-help book that explores the powerful concept of the Law of Attraction. First published in 2006, the book reveals how thoughts can influence reality and attract positive outcomes. Byrne combines insights from various teachers, spiritual leaders, and motivational speakers to explain how focusing on positive thoughts and emotions can lead to a fulfilling and successful life. The Secret has inspired millions around the world to harness the power of their minds to create the life they desire", price: "Rs490", url: "https://m.media-amazon.com/images/I/81IKzzhY3kL._AC_UF1000,1000_QL80_.jpg" },
  { id: 5, description: "Three Men in a Boat (To Say Nothing of the Dog!) is a humorous travelogue written by Jerome K. Jerome, first published in 1889. The novel narrates the misadventures of three friends—Jerome himself, George, and Harris—as they embark on a boating holiday along the Thames River. Filled with witty anecdotes, amusing observations, and eccentric characters they encounter, the book captures the essence of Victorian leisure and the joys and tribulations of a simple boating trip.", price: "Rs650", url: "https://m.media-amazon.com/images/I/5198Y5ZX+LL._AC_UF1000,1000_QL80_.jpg" },
  { id: 6, description: "Think Straight by Darius Foroux is a practical guide to mastering your thoughts and transforming your life. Published in 2018, the book explores how our thinking patterns influence our actions, emotions, and overall well-being. Foroux provides actionable strategies and insights on how to develop a clear, focused mindset, overcome common cognitive biases, and achieve personal and professional success through disciplined thinking.", price: "Rs368", url: "https://m.media-amazon.com/images/I/61+3fHdrKwL._AC_UF1000,1000_QL80_.jpg" },
  { id: 7, description: "Five on a Treasure Island by Enid Blyton follows siblings Julian, Dick, and Anne, joined by their adventurous cousin George and her dog Timmy, as they uncover hidden treasures on Kirrin Island. Their exciting journey involves decoding clues, exploring caves, and confronting mysterious figures, showcasing their teamwork and courage in solving thrilling mysteries.", price: "Rs500", url: "https://m.media-amazon.com/images/I/A1XE4R71AKL._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, description: "Ikigai explores the ancient Japanese concept of finding purpose and fulfillment in life. Written by Héctor García and Francesc Miralles, the book delves into how discovering and nurturing one's ikigai—one's reason for being—can lead to a longer, happier life. Combining insights from Japanese culture, psychology, and lifestyle practices, the authors offer practical advice on living with passion, finding balance, and achieving a sense of meaning and satisfaction in everyday life.", price: "Rs489", url: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg" },
];

function Bookdetail() {
  const { id } = useParams();
  const book = bookData.find((book) => book.id === parseInt(id));
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/payment');
  };

  return (
    <div className="book-detail">
      {book ? (
        <>
          <img src={book.url} alt="Book" />
          <h1>{book.description}</h1>
          <p>{book.price}</p>
          <button onClick={handleBuyNow}>Buy Now</button>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default Bookdetail;
