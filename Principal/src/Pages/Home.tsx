import { Banner } from "../components/Banner";
import { BookSection } from "../components/BookSection";
import { Footer } from "../components/Footer";
import { NewsRegistry } from "../components/NewsRegistry";
import { NavBar } from "../components/NavBar";

export function Home() {
    return (
        <>
            <NavBar/>
            <Banner/>
            <BookSection/>
            <BookSection/>
            <BookSection/>
            <BookSection/>
            <NewsRegistry/>
            <Footer/>
        </>
    )
}