import { BookCard } from "../BookCard/BookCard";
import { UIBookCard } from "../BookCard/types";
import { BookSectionContainer, BookCarosel, CaroselContainer, NavigationButtons } from './style';
import { UIBookSection } from './types';
import React, { useState, useEffect, useRef } from "react";


const BookSection: React.FC<UIBookSection> = ({ sectionTitle }) => {
  const [position, setPosition] = useState(0);
  const qtd = 5;
  const marginCards = 15;

  const [slideClass, setSlideClass] = useState("");
  const slideRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState<UIBookCard[]>([]);

  useEffect(() => {
    document.documentElement.style.setProperty("--qtd", qtd.toString());
    document.documentElement.style.setProperty("--margin", `${marginCards}px`);

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


  const handleMove = (direction: string) => setSlideClass(`animating-${direction}`);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideClass === "animating-left")
        setPosition((prev) => (prev - qtd + data.length) % data.length);
      else if (slideClass === "animating-right")
        setPosition((prev) => (prev + qtd) % data.length);
      
      setSlideClass("");
    }, 1150);
  
    return () => { clearTimeout(timer) };
  }, [slideClass]);


  return (
    <BookSectionContainer>
      <h1>{sectionTitle}</h1>

      <CaroselContainer>
        <NavigationButtons className="left-btn" onClick={() => handleMove("left")}>
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
        <NavigationButtons className="right-btn" onClick={() => handleMove("right")}>
          <b>{">"}</b>
        </NavigationButtons>
      </CaroselContainer>
    </BookSectionContainer>
  );
};

export { BookSection };
