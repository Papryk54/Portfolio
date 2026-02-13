import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
	en: {
		translation: {
			name: "Patrick",
			hi: "Hi, I am",
			scroll: "Scroll",
			seeAlso: "My other projects:",
			myTechnologiesSkills: "My Technologies & Skills",
			softSkills: "Soft Skills",
			problemSolving: "Problem Solving",
			teamwork: "Teamwork",
			maximizingResults: "Maximizing Results",
			timeManagement: "Time Management",
			workOrganization: "Work Organization",
			creativity: "Creativity",
			languages: "Languages",
			englishC1: "English - C1",
			polishNative: "Polish - Native",
			interests: "Interests",
			aiMachineLearning: "AI & Machine Learning",
			technology: "Technology",
			aboutMe: "About Me",
			learnMoreAboutMe: "Learn more about me",
			whoAmI: "Who am I?",
			patrykOlszewski: "Patryk Olszewski",
			aboutMeIntroText:
				"I'm a programmer with a genuine passion for coding. Under the guidance of experienced mentors, I've systematized my knowledge and keep improving my craft every day by learning, following industry trends, and writing code. When challenges arise, that's when the fun begins — I see them as puzzles I enjoy breaking down and solving step by step.",

			contact: "Contact",
			contactCTA:
				"Feel free to reach out for collaborations or just a friendly hello!",
			copied: "Copied to clipboard!",
			directMail: "Or mail me directly at",
			contactFormName: "Name",
			contactFormNamePlaceholder: "Enter your name",
			contactFormEmail: "Email Address",
			contactFormEmailPlaceholder: "Enter your email address",
			contactFormMessage: "How can I help you?",
			contactFormMessagePlaceholder: "Type your message here...",
			contactFormSend: "Send",
			contactFormSuccess:
				"Thank you for your message! I'll get back to you soon.",

			stackUsed: "Stack used:",
			viewProject: "See More",
			clickToEnlarge: "Click for full size",
			projectDescription: "Project Description:",
			features: "Features:",
			loginLogout: "Login / Logout",
			orderProcessing: "Order Processing",
			contactForm: "Contact Form",
			productSorting: "Product sorting",
			productVariantsSelection: "Product variants & selection",
			jwtAuthentication: "JWT authentication",
			adminPanel: "Admin panel",
			featureOnlineBooking: "Online appointment booking",
			featureEmailNotifications: "Email notifications",
			featureGallery: "Service gallery",
			featureContactForm: "Contact form",
			featureGoogleMaps: "Google Maps integration",
			futureDevelopment: "Future Development:",
			introduction:
				"Welcome to my portfolio! I'm Patryk Olszewski, a full stack web developer. Here, you'll get a quick look at what I create and what drives me.",
			projectAbout: "About me",
			projectAboutDescShort:
				"Curious mind, passionate coder - get to know the person behind the projects.",
			projectAboutDescRegular1:
				"Curious mind, passionate coder - get to know the person behind the projects.",
			projectAboutDescRegular2:
				"Short bio and links to my CV and socials. More info will be added soon.",

			projectFluxShop: "Flux Shop - E-commerce Desktop App",
			projectFluxShopDescShort:
				"A web app for a store selling craft energy drinks for developers - lighthearted in tone, but built with solid technical craftsmanship.",
			projectFluxShopDescRegular1:
				"A web application created as the final project for my programming bootcamp. In just three weeks, I built a fully responsive store for craft energy drinks aimed at developers, adding numerous features beyond the initial scope.",
			projectFluxShopDescRegular2:
				"While working on the project, I focused heavily on user experience - from a clean and simple interface, through intuitive product sorting and variant selection, to smooth order handling. Paying attention to technical details while keeping a light, humorous tone allowed me to combine practical skills with creative problem-solving.",
			projectFluxShopDescRegular3:
				"The project taught me to work fully independently, without mentor guidance, and how to effectively break tasks into manageable stages. I learned how to plan and organize work to complete even complex projects within tight deadlines. These lessons continue to guide me in all my current projects.",

			projectBazar: "Bazar - Team Project",
			projectBazarDescShort:
				"A team project for a furniture store that taught me effective collaboration, work organization, and team code management.",
			projectBazarDescRegular1:
				"A furniture e-commerce app built from scratch by our team — concept, design and implementation handled end to end. We implemented a secure login and account system for registration, saved carts, order history, account recovery and session management. The site is fully responsive and performance-tuned, optimized across breakpoints to ensure a consistent experience on desktop, tablet and mobile.",
			projectBazarDescRegular2:
				"The promotions module enables creation of discount codes, time-limited sales, bulk discounts and highlighted deals without redeploying code, all manageable through an admin UI. The user interface was crafted to be intuitive — clear product cards, filtered search, streamlined checkout flow and fast navigation. Accessibility and UX considerations ensure users can quickly find items, apply discounts and complete purchases with minimal friction.",

			projectCoWatch: "CoWatch - Coop Movie Choosing App",
			projectCoWatchDescShort:
				"CoWatch is a mobile app for real-time movie selection with friends, featuring watchlists, TMDB search, and flawless synchronization.",
			projectCoWatchDescRegular1:
				"CoWatch is a mobile app built in React Native that allows two or more users to choose a movie or series for the evening together. The process resembles Tinder — instead of picking a date, users select what to watch. Choices happen in real-time, with an Appwrite backend ensuring smooth synchronization, account management, movie lists, and voting results without any lag.",
			projectCoWatchDescRegular2:
				"The app features a full movie management system: adding titles to personal watchlists, searching the TMDB database, adding friends, and integrating their lists. The UI still needs some visual polish, but all core mechanics and logic work flawlessly. The app provides an intuitive, engaging experience, showcasing the power of real-time collaboration and well-structured database management.",
			projectEsthetique: "Esthétique — Beauty Salon Website",
			projectEsthetiqueDescShort:
				"A modern, elegant website for a beauty salon with clear service presentation and seamless online booking integration.",
			projectEsthetiqueDescRegular1:
				"A production-ready website created for a local beauty salon to establish a strong and professional online presence. The site presents services, pricing, and essential information in a clean, refined layout designed to reflect the salon’s premium brand identity and build client trust.",
			projectEsthetiqueDescRegular2:
				"The website integrates with an external booking system, allowing clients to easily check availability and schedule appointments online. The project focused on performance, responsiveness, and intuitive user experience, ensuring smooth interaction across desktop and mobile devices while supporting real business needs.",

			projectNext: "See more...",
			projectNextDescShort: "",
			projectNextDescRegular1: "",
			projectNextDescRegular2: "",
		},
	},
	pl: {
		translation: {
			name: "Patryk",
			hi: "Cześć, jestem",
			scroll: "Przewiń",
			seeAlso: "Moje inne projekty:",
			viewCV: "Zobacz moje CV",
			myTechnologiesSkills: "Moje technologie i umiejętności",
			softSkills: "Umiejętności miękkie",
			problemSolving: "Kreatywność",
			teamwork: "Praca zespołowa",
			maximizingResults: "Myślenie strategiczne",
			timeManagement: "Zarządzanie czasem",
			workOrganization: "Organizacja pracy",
			creativity: "Adaptacyjność",
			languages: "Języki",
			englishC1: "Angielski - C1",
			polishNative: "Polski - ojczysty",
			interests: "Zainteresowania",
			aiMachineLearning: "AI i uczenie maszynowe",
			technology: "Programowanie i technologia",
			aboutMe: "O mnie",
			learnMoreAboutMe: "Dowiedz się więcej o mnie",
			whoAmI: "Kim jestem?",
			patrykOlszewski: "Patryk Olszewski",
			aboutMeIntroText:
				"Jestem programistą z prawdziwą pasją do kodowania. Pod okiem doświadczonych mentorów usystematyzowałem wiedzę i codziennie rozwijam swoje umiejętności, ucząc się, śledząc trendy i pisząc kod. Wyzwania traktuję jak łamigłówki, sprowadzam je do podstawowych elementów i rozwiązuję krok po kroku.",
			contact: "Kontakt",
			contactCTA:
				"Zapraszam do kontaktu w sprawie współpracy lub pogawędki!",
			copied: "Skopiowano do schowka!",
			directMail: "Albo napisz do mnie na",
			contactFormName: "Imię",
			contactFormNamePlaceholder: "Wpisz swoje imię",
			contactFormEmail: "Adres e-mail",
			contactFormEmailPlaceholder: "Wpisz swój adres e-mail",
			contactFormMessage: "W czym mogę pomóc?",
			contactFormMessagePlaceholder: "Napisz swoją wiadomość...",
			contactFormSend: "Wyślij",
			contactFormSuccess: "Dziękuję za wiadomość! Odezwię się wkrótce.",
			stackUsed: "Użyty stack:",
			viewProject: "Zobacz więcej",
			clickToEnlarge: "Kliknij, aby powiększyć",
			projectDescription: "Opis projektu:",
			features: "Funkcje:",
			loginLogout: "Logowanie / Wylogowanie",
			orderProcessing: "Obsługa zamówień",
			contactForm: "Formularz kontaktowy",
			productSorting: "Sortowanie produktów",
			productVariantsSelection: "Warianty produktów i wybór",
			jwtAuthentication: "Autoryzacja JWT",
			adminPanel: "Panel administracyjny",
			featureOnlineBooking: "Rezerwacja wizyt online",
			featureEmailNotifications: "Powiadomienia e-mail",
			featureGallery: "Galeria usług",
			featureContactForm: "Formularz kontaktowy",
			featureGoogleMaps: "Integracja z Google Maps",
			futureDevelopment: "Przyszły rozwój:",
			introduction:
				"Witaj w moim portfolio! Jestem Full Stack Web Developerem. Tutaj poznasz mnie bliżej i zobaczysz co tworzę.",
			projectAbout: "O mnie",
			projectAboutDescShort:
				"Ciekawski umysł, zapalony koder - Dowiedz się więcej o mnie, osobie stojącej za projektami.",
			projectFluxShop: "Flux Shop - Aplikacja desktopowa e-commerce",
			projectFluxShopDescShort:
				"Aplikacja sklepu z kraftowymi napojami energetycznymi dla developerów - lekki ton, solidne wykonanie techniczne.",
			projectFluxShopDescRegular1:
				"Aplikacja stworzona jako projekt końcowy na bootcampie. W trzy tygodnie zbudowałem w pełni responsywny sklep, dodając wiele funkcji ponad wymagany zakres.",
			projectFluxShopDescRegular2:
				"Skupiłem się na UX - prosta nawigacja, intuicyjne sortowanie i wybór wariantów, płynna obsługa zamówień. Dbałość o detale połączona z luźnym tonem pozwoliła połączyć praktykę z kreatywnością.",
			projectFluxShopDescRegular3:
				"Projekt nauczył mnie samodzielnej pracy bez mentora i skutecznego dzielenia zadań. Planowanie i organizacja pomogły dowozić złożone projekty w krótkich terminach.",

			projectBazar: "Bazar - Projekt zespołowy",
			projectBazarDescShort:
				"Zespołowy projekt sklepu meblowego, który nauczył mnie skutecznej współpracy, organizacji pracy i zarządzania kodem zespołowo.",
			projectBazarDescRegular1:
				"Projekt sklepu meblowego zrealizowany od podstaw, zbudowany od zera przez zespół. Zaimplementowaliśmy bezpieczny system logowania, rejestracji i zarządzania kontem, umożliwiający zapisywanie koszyków, przeglądanie historii zamówień oraz odzyskiwanie dostępu. Serwis jest w pełni responsywny i dopracowany pod różne rozdzielczości, gwarantując spójne doświadczenie na desktopie, tablecie i urządzeniach mobilnych.",
			projectBazarDescRegular2:
				"System obsługi promocji pozwala tworzyć kody rabatowe, zniżki czasowe i wyróżnione oferty oraz zarządzać nimi bez konieczności wdrażania zmian w kodzie. Interfejs użytkownika zaprojektowano tak, by był intuicyjny i przyjazny — czytelne karty produktów, wydajna wyszukiwarka, prosty proces zakupowy i szybka nawigacja. Projekt uwzględnia także UX i dostępność, aby użytkownik mógł łatwo znaleźć produkt, zastosować promocję i sfinalizować zakup.",

			projectCoWatch: "CoWatch - Aplikacja do wspólnego wybierania filmów",
			projectCoWatchDescShort:
				"CoWatch to mobilna aplikacja umożliwiająca real-time wybór filmu ze znajomymi, z listami, wyszukiwaniem TMDB i perfekcyjną synchronizacją.",
			projectCoWatchDescRegular1:
				"CoWatch to mobilna aplikacja stworzona w React Native, pozwalająca dwóm lub większej liczbie użytkowników wspólnie wybrać film lub serial na wieczór. Cały proces przypomina Tindera — zamiast wybierać osobę na randkę, użytkownicy decydują, co obejrzeć. Wybór odbywa się w czasie rzeczywistym, a baza danych oparta jest na Appwrite, co gwarantuje płynną synchronizację i bezproblemowe zarządzanie kontami, listami filmów i wynikami głosowań.",
			projectCoWatchDescRegular2:
				"Aplikacja posiada kompleksowy system zarządzania filmami: dodawanie pozycji do własnej listy, wyszukiwanie w bazie TMDB, dodawanie znajomych i integracja ich list. Interfejs wymaga jeszcze szlifu graficznego, ale logika i mechanika działają perfekcyjnie. Całość umożliwia płynną, intuicyjną i angażującą współpracę użytkowników przy wyborze filmu, pokazując pełen potencjał real-time app i pracy z bazą danych.",
			projectEsthetique: "Esthétique — Strona internetowa salonu kosmetycznego",
			projectEsthetiqueDescShort:
				"Nowoczesna i elegancka strona salonu kosmetycznego z przejrzystą prezentacją usług i wygodną rezerwacją online.",
			projectEsthetiqueDescRegular1:
				"Gotowa do użytku produkcyjnego strona internetowa stworzona dla lokalnego salonu kosmetycznego, mająca na celu budowanie profesjonalnej obecności online i zwiększenie liczby klientów. Serwis prezentuje ofertę, ceny oraz najważniejsze informacje w estetycznym, dopracowanym wizualnie układzie dopasowanym do wizerunku marki premium.",
			projectEsthetiqueDescRegular2:
				"Strona została zintegrowana z zewnętrznym systemem rezerwacji, umożliwiając klientom szybkie sprawdzenie dostępnych terminów i zapisanie się na wizytę online. Projekt koncentrował się na wydajności, responsywności oraz intuicyjnym doświadczeniu użytkownika, zapewniając płynne działanie na komputerach i urządzeniach mobilnych.",

			projectNext: "Zobacz więcej...",
			projectNextDescShort: "",
			projectNextDescRegular1: "",
			projectNextDescRegular2: "",
		},
	},
};

i18next.use(initReactI18next).use(LanguageDetector).init({
	fallbackLng: "en",
	resources,
});

export default i18next;
