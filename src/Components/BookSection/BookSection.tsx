import { BookCard } from "../BookCard/BookCard";
import { BookSectionContainer, BookCarosel, CaroselContainer, NavigationButtons } from './style';
import { UIBookSection } from './types';
import React, { useState, useEffect, useRef } from "react";

// Defina o tipo do livro
interface Book {
  title: string;
  image: string;
}

const BookSection: React.FC<UIBookSection> = ({ sectionTitle }) => {
  const [position, setPosition] = useState(0);
  const qtd = 5;
  const marginCards = 15;

  const [slideClass, setSlideClass] = useState("");
  const slideRef = useRef<HTMLDivElement | null>(null);

  // Tipando o estado `data` com um array de livros
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/ViniciusQueiroz327/Plenna/main/books.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--qtd", qtd.toString());
    document.documentElement.style.setProperty("--margin", `${marginCards}px`);
  }, [qtd, marginCards]);

  const moveLeft = () => {
    if (!slideClass) setSlideClass("animating-right");
  };

  const moveRight = () => {
    if (!slideClass) setSlideClass("animating-left");
  };

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (slideClass === "animating-left")
        setPosition((prev) => (prev + qtd) % data.length);
      else if (slideClass === "animating-right")
        setPosition((prev) => (prev - qtd + data.length) % data.length);

      setSlideClass("");
    };

    const slideElement = slideRef.current;
    if (slideElement)
      slideElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      if (slideElement)
        slideElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [slideClass, data.length, qtd]);

  return (
    <BookSectionContainer>
      <h1>{sectionTitle}</h1>

      <CaroselContainer>
        <NavigationButtons className="left-btn" onClick={moveLeft}>
          <b>{"<"}</b>
        </NavigationButtons>
        <BookCarosel className={`bookCarosel ${slideClass}`} ref={slideRef}>
          {data.length > 0 &&
            Array.from({ length: qtd * 4 }, (_, i) => (
              <BookCard
                key={i}
                bookTitle={data[(i + position) % data.length].title}
                bookImage={data[(i + position) % data.length].image}
              />
            ))}
        </BookCarosel>
        <NavigationButtons className="right-btn" onClick={moveRight}>
          <b>{">"}</b>
        </NavigationButtons>
      </CaroselContainer>
    </BookSectionContainer>
  );
};

export { BookSection };
