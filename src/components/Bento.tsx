import Image from "next/image";
import LogoNeu from "../../public/LogoNeu.png";
import Astra from "../../public/astraglaswbg.png";
import HeroImage from "../../public/Hero.png";
import LogoAlt from "../../public/LogoAlt.png";
import Wine from "../../public/bottles03.png";
import Cocktail from "../../public/Cocktailglas.svg";
import Fussball from "../../public/Fussball.svg";
import Crowdparty from "../../public/Crowdparty.png";
import HansAlbers from "../../public/Albers-white.png";

export default function Bento() {
  return (

    <>
    <div className="flex flex-col items-center justify-center relative top-[2vh]">
    <Image src={HeroImage} alt="Hero Image" width={1300} height={600} className="border-2 border-amber-50 shadow-lg shadow-stone-300 w-2/3 h-auto object-cover"/>
    </div>
    <h1 className="relative top-[5vh] text-center text-[3.2rem] lg:text-[4vw] lg: leading-12 headingA text-yellow-600">gastlichkeit ist unsere philosophie</h1>
<section className="flex flex-col items-center justify-center">
{/* Bento Grid Container */}
<div className="relative top-[8vh] w-[86vw] h-full lg:w-[1600px] lg:h-full grid grid-cols-1 md:grid-cols-6 grid-rows-12 md:grid-rows-12 gap-4



md:gap-2 m-4">
      <div className="col-start-1 row-start-1 row-span-2  bg-slate-800 gap-5 md:col-start-1 md:row-start-1 md:col-span-4 md:row-span-1 lg:bg-slate-900 rounded-md p-10">
        <h1 className="relative lg:top-[2vh] text-center top-16 text-7xl headingA text-black lg:text-6xl">unser angebot und unser service</h1>
      </div>
      <div className="lg:relative col-start-1 row-start-3 row-span-2 md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-2 lg:bg-slate-800 rounded-md p-10">
        <div className="relative top-9  lg:top-[5vh] lg:w-screen lg:h-screen flex flex-col items-center ">
          <Image src={LogoNeu} alt="Logo Neu" width={800} className="border-2 border-white" />
        </div>
      </div>
      <div className="col-start-1 row-start-5 row-span-3   md:col-start-1 md:row-start-2 md:col-span-2 md:row-span-3 bg-red-900 rounded-md p-10">
        <div className="relative top-12 lg:relative lg:top-[5vh] lg:left-[4vw] ">
          <Image src={Astra} alt="Astra vom Fass" width={500} height={200} />
        </div>
      </div>
      <div className="col-start-1 row-start-8 row-span-2 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-3 bg-red-900 rounded-md p-10">
<h1 className="relative top-7 lg:relative lg:top-[4vh] text-4xl text-center headingA text-yellow-600 lg:text-4xl">bier vom fass</h1>

          <h2 className="relative top-12 text-2xl text-center text-white lg:text-2xl lg:relative lg:top-[8vh]">
            Flensburger Pils - das kühle, frische Blonde von der Waterkant. Astra-Pils - das Kultbier natürlich direkt vom Kiez
          </h2>
      </div>
      <div className="col-start-1 row-start-10 row-span-2  md:col-start-4 md:row-start-3 md:col-span-2 md:row-span-3 bg-yellow-800 rounded-md p-10">
          <div className="lg:relative lg:top-[5vh] flex flex-col items-center ">
            <Image src={Wine} alt="Wine Illustration" width={500} height={300} />
          </div>

      </div>
      <div className="col-start-1 row-start-12 row-span-6 md:col-start-6 md:row-start-3 md:col-span-1 md:row-span-3 bg-yellow-800 rounded-md p-10">
     <h1 className="relative top-3 lg:top-[5vh] text-4xl text-center headingA text-yellow-600 lg:text-4xl">regionale Weine</h1>
            <h2 className="relative top-5 lg:top-[8vh] text-center text-xl text-white lg:text-2xl">
              Qualitativ hochwertige Weine aus der Region Kaiserstuhl und dem Markgräflerland. Hauslieferant Weingut Heinemann Scherzingen
            </h2>

      </div>
      <div className="col-start-1 row-start-18 row-span-2   md:col-start-1 md:row-start-5 md:col-span-1 md:row-span-3 bg-stone-800 rounded-md p-10">
         <div className="relative left-20 lg:top-[2vh] lg:left-[8vw] lg:w-[60vw] lg:h-[60vh] justify-center">
            <Image src={Cocktail} alt="CocktailIcon" width={200}/>
          </div>

      </div>
      <div className="col-start-1 row-start-20 row-span-8 md:col-start-2 md:row-start-5 md:col-span-2 md:row-span-3 bg-stone-800 rounded-md p-10">

<h1 className="relative top-1 lg:top-[3vh] text-3xl text-center headingA text-yellow-600 lg:text-3xl">cocktails & longdrinks</h1>
          <h2 className="relative top-1 lg:top-[5vh] text-xl text-center text-white lg:text-[1.4rem]">
            Erleben Sie unsere kreativen Cocktails und erfrischenden Longdrinks, die mit hochwertigen Spirituosen und frischen Zutaten köstlich zubereitet werden.
          </h2>


      </div>
      <div className="col-start-1 row-start-28 row-span-4 md:col-start-4 md:row-start-7 md:col-span-2 md:row-span-2 bg-red-900 rounded-md p-10">
 
          <h1 className="relative top-3 lg:top-[5vh] text-center text-4xl headingA text-yellow-600 lg:text-5xl">fussball tv live</h1>
          <h2 className="text-xl text-center text-white lg:text-[1.1rem] relative top-2 lg:top-[5vh]">
            jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei Topspielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen.
          </h2>
  
          

      </div>
      <div className="col-start-1 row-start-32 row-span-6  md:col-start-6 md:row-start-6 md:col-span-1 md:row-span-3 bg-red-900 rounded-md p-10">
        <div className="lg:relative lg:top-[8vh] flex flex-col items-center justify-center">
            <Image src={Fussball} alt="Fussball-Illustration" width={175} height={175} />
          </div>
        
       
      </div>
      <div className="col-start-1 row-start-38 row-span-4   md:col-start-1 md:row-start-8 md:col-span-2 md:row-span-1 bg-slate-800 rounded-md p-10">
        <div className="relative lg:top-[5vh] flex flex-col items-center justify-center">
          <Image src={LogoAlt} alt="Logo Alt" width={400} height={200} />
        </div>
      </div>
      <div className="col-start-1 row-start-42    md:col-start-3 md:row-start-8 md:col-span-3 md:row-span-1 bg-slate-800 rounded-md p-10">
        
        </div>
      <div className="col-start-1 row-start-44 row-span-6   md:col-start-1 md:row-start-9 md:col-span-2 md:row-span-3 bg-yellow-800 rounded-md p-10">

                 <h1 className="relative top-3 lg:top-[5vh] text-2xl text-center headingA text-yellow-500 lg:text-4xl">party - event ?</h1>
          <h2 className="relative top-3 text-xl text-center text-white lg:text-2xl relative lg:top-[8vh]">
            Der Rettungsanker ist die ideale Location für Ihren privaten oder Business Event. Im Rahmen einer "gesckossenen Gesellschaft" stehen Ihnen die Räumlichkeiten des Rettungsankers zur Verfügung. Auf Wunsch Catering durch unseren Kooperationspartner möglich ! Sprechen Sie uns an oder kontaktieren Sie uns per e.mail.
          </h2> 
                  
         
        </div>
      <div className="col-start-1 row-start-50 row-span-4  md:col-start-3 md:row-start-9 md:col-span-1 md:row-span-3 bg-yellow-800 rounded-md p-10">
       <div className="lg:relative lg:top-[5vh] flex flex-col items-center  justify-center">


            <Image src={Crowdparty} alt="Crowd Illustration" width={600} height={200} />
          </div>
      </div>
      <div className="col-start-1 row-start-54 row-span-5   md:col-start-4 md:row-start-9 md:col-span-2 md:row-span-3 bg-stone-600 rounded-md p-10">

          <h1 className="lg:relative lg:top-[5vh] text-4xl text-center headingA text-yellow-600 lg:text-3xl">hans albers</h1>
          <h2 className="text-xl text-center text-white lg:text-2xl lg:relative lg:top-[8vh]  ">
            Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in Berg, Bayern) war ein deutscher Schauspieler und Sänger, der als "blonder Hans" Volkssidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören "der Mann, der Sherlock Holmes war" (1937), "Münchhausen" (1943), "die grosse Freiheit Nr.7" (1943) sowie "Auf fer Reeperbahn Nachts um halb eins
          </h2>


      </div>
      <div className="col-start-1 row-start-59 row-span-5   md:col-start-6 md:row-start-9 md:col-span-1 md:row-span-3 bg-stone-600 rounded-md p-10">
        <div className="w-80 flex flex-col items-center relative top-[1vh]">
            <Image src={HansAlbers} alt="Hans Albers" width={275} height={275} />
          </div>
      </div>
      {/*<div className="col-start-1 row-start-12 col-span-2 md:col-start-1 md:row-start-12 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">15</div>
      <div className="col-start-3 row-start-12 col-span-3 md:col-start-3 md:row-start-12 md:col-span-3 md:row-span-1 bg-gray-300 rounded-md p-10">16</div>
      <div className="col-start-6 row-start-12 md:col-start-6 md:row-start-12 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">17</div>*/}

    </div>
    {/* Ende Bento Grid Container */}
</section>
    </>

  );
}