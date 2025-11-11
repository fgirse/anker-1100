import Image from "next/image";
import LogoNeu from "../../public/LogoNeu.png";
import Astra from "../../public/astraglaswbg.png";
import HeroImage from "../../public/Hero.png";
import Wine from "../../public/bottles03.png";
import Cocktail from "../../public/Cocktailglas.svg";
import Fussball from "../../public/Fussball.svg";
import Crowdparty from "../../public/Crowdparty.png";
import HansAlbers from "../../public/albers.jpg";

export default function Bento() {
  return (
    <section className="mt-20 ">
      <div className="text-center flex flex-col items-center">
      <h1 className="mt-12 text-5xl headingA text-yellow-500 lg :text-[4vw]">gastlichkeit ist unsere philosophie</h1>
      <div className=" w-[90vw] lg:w-[66vw] lg:h-[33vh] flex flex-col  items-center">
      <Image src={HeroImage} alt="Hero Image" width={1500} height={700} className="shadow-xl shadow-stone-300 border-2 border-stone-300" />
    </div>
    </div>
    <div className="mt-24">
    <h1 className="text-center text-5xl headingA text-red-800 lg:text-[4vw]">Angebot und Service</h1>
    </div>
    <div className="bento-grid">
       

        <div className="grid-item-overlay-1760057632942">
          <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center h-[70vh] w-full">
            <Image src={Astra} alt="Flens vom Fass" width={500} height={200} />
          </div>
          <h1 className="p-4 mt-[5vh] text-[9vw] text-center headingA text-yellow-500 lg:text-[10vw]">Bier vom Fass</h1>

          <h2 className="text-xl text-center text-white lg:text-4xl mt-[3vh]">
            Flensburger Pils - das kühle Blonde von der Waterkant. Astra-Pils - das Kultbier natürlich direkt vom Kiez
          </h2>
        </div>

        <div className="grid-item-overlay-1760057666155">
          <div className="flex flex-col items-center space-x-4 justify-center w-2/3">
          <Image src={LogoNeu} alt="LogoNeu" width={300} height={180} className="mt-[5vh]" />
          </div>
        </div>

        <div className="grid-item-overlay-1760057846834">
          <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center">

          </div>
        </div>

        <div className="grid-item-overlay-1760057851572">
          <div className="flex flex-col items-center w-[80vw] ">
            <Image src={Wine} alt="Wine Illustration" width={500} height={200} />
          </div>
          <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
            <h1 className="text-4xl text-center headingA text-yellow-500 lg:text-7xl">regionale Weine</h1>
            <h2 className="text-center text-xl text-white lg:text-4xl mt-[3vh]">
              Qualitativ hochwertige Weine aus der Region Kaiserstuhl und dem Markgräflerland. Hauslieferant Weingut Heinemann Scherzingen
            </h2>
          </div>
        </div>

        <div className="grid-item-overlay-1760057865523">

        </div>
        <div className="grid-item-overlay-1760057891398"></div>
        <div className="grid-item-overlay-1760057918272">
          <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
            <Image src={Cocktail} alt="Cocktail Illustration" width={175} height={175} />
          </div>
          <h1 className="mt-[5vh] text-4xl text-center headingA text-yellow-500 lg:text-7xl">Cocktails & Longdrinks</h1>
          <h2 className="text-xl text-center text-white lg:text-4xl mt-[3vh]">
            Erleben Sie unsere kreativen Cocktails und erfrischenden Longdrinks, die mit hochwertigen Spirituosen und frischen Zutaten zubereitet werden.
          </h2>

        </div>
        <div className="grid-item-overlay-1760057942145"></div>
        <div className="grid-item-overlay-1760057948843">
          <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
            <Image src={Fussball} alt="Fussball-Illustration" width={175} height={175} />
          </div>
          <h1 className="mt-[5vh] text-4xl text-center headingA text-yellow-500 lg:text-7xl">Fussball</h1>
          <h1 className="text-center text-4xl headingA text-yellow-500 lg:text-7xl">TV Live</h1>
          <h2 className="text-xl text-center text-white lg:text-4xl mt-[3vh]">
            jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei Topspielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !
          </h2>


        </div>
        <div className="grid-item-overlay-1760057999319">
          <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
            <Image src={Crowdparty} alt="Gruppe Party" width={600} height={200} />
          </div>
          <h1 className="text-4xl mt-[5vh] text-center headingA text-yellow-500 lg:text-7xl">Party? Event?</h1>
          <h2 className="text-xl text-center text-white lg:text-4xl mt-[3vh]">
            Der Rettungsanker ist die ideale Location für Ihren privaten oder Business Event. Im Rahmen einer "gesckossenen Gesellschaft" stehen Ihnen die Räumlichkeiten des Rettungsankers zur Verfügung. Auf Wunsch Catering durch unseren Kooperationspartner möglich ! Sprechen Sie uns an oder kontaktieren Sie uns per e.mail.
          </h2>
        </div>
        <div className="grid-item-overlay-1760058011364">

        </div>
        <div className="grid-item-overlay-1760058017913">
          <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
            <Image src={HansAlbers} alt="Hans Albers" width={275} height={275} />
          </div>
          <h1 className="mt-[5vh] text-4xl text-center headingA text-yellow-500 lg:text-7xl">Hans Albers</h1>
          <h2 className="text-xl text-center text-white lg:text-4xl mt-[3vh]">
            Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in Berg, Bayern) war ein deutscher Schauspieler und Sänger, der als "blonder Hans" Volkssidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören "der Mann, der Sherlock Holmes war" (1937), "Münchhausen" (1943), "die grosse Freiheit Nr.7" (1943) sowie "Auf fer Reeperbahn Nachts um halb eins
          </h2>
        </div>
        {/*<div className="grid-item-overlay-1760058026843"></div>
    <div className="grid-item-overlay-1760058050498"></div>
    <div className="grid-item-overlay-1760058061196"></div>
    <div className="grid-item-overlay-1760058069825" />*/}
      </div>
      </section>
  );
}