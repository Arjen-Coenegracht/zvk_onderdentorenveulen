import type {
  AgendaItem,
  MatchResult,
  Sponsor,
  SpotlightPlayer,
  SquadPlayer,
  StandingRow,
  TransferUpdate,
} from '@/types';
import schroyenPlayerCard from '@/assets/players/Schroyen_Speler_kaart.svg';
import bipinPlayerImage from '@/assets/players/bipin.svg';
import mathPlayerImage from '@/assets/players/math.svg';
import runePlayerImage from '@/assets/players/rune.svg';
import devinPlayerImage from '@/assets/players/Devin.svg'
import nicolasPlayerImage from '@/assets/players/Libert.svg'
import rensPlayerImage from '@/assets/players/Rens.svg'
import robbePlayerImage from '@/assets/players/Robbe.svg'
import yoranPlayerImage from '@/assets/players/Yoran.svg'
import arjenPlayerImage from '@/assets/players/Arjen.svg'
import pedroPlayerImage from '@/assets/players/Pedro.svg'
import pedroMotmImage from '@/assets/motm/Pedro MOTM.svg';
import feyoMotmImage from '@/assets/motm/Feyo Kanga Wolfs.svg';
import robbeMotmImage from '@/assets/motm/Robbe MOTM.svg';
import schroyenMotmImage from '@/assets/motm/Schroyen MOTM.svg';
import yoranMotmImage from '@/assets/motm/Yoran MOTM.svg';
import chrisNijsSponsorImage from '@/assets/sponsors/Nijs Chris.svg';
import garageCarSponsorImage from '@/assets/sponsors/garage car.svg';
import tPleintjeSponsorImage from '@/assets/sponsors/frituurtpleintje.svg';
import odtCafeSponsorImage from '@/assets/sponsors/odt cafe logo.svg';
import hoydonckxSponsorImage from '@/assets/sponsors/Hoydonckx.svg';
import jumpIntoYourPartySponsorImage from '@/assets/sponsors/jump into your party.svg';
import kimKnaepenSponsorImage from '@/assets/sponsors/k.k. vloer-tegelwerken.svg';
import dominicLeebaertsSponsorImage from '@/assets/sponsors/dominic leenaerts.svg';
import devinTransferImage from '@/assets/transfers/Transfer Devin.jpg';

export const teamName = 'ZVK ODT';

export const clubValues = [
  'Altijd inzet, ook al werkt het lichaam niet altijd mee',
  'Lawaai maken is een deel van onze tactiek',
  'De supporters entertainen, voetbal is bijzaak',
  'Niemand een makkelijke avond geven',
  'Samen uit, samen thuis, samen op café',
];

export const results: MatchResult[] = [
  {
    id: 1,
    date: '2025-09-29',
    opponent: 'Mamba FC',
    home: true,
    scored: 4,
    conceded: 2,
  },
  {
    id: 2,
    date: '2025-10-13',
    opponent: 'ZVC Chaussee',
    home: false,
    scored: 2,
    conceded: 4,
  },
  {
    id: 3,
    date: '2025-10-20',
    opponent: "'t Loon",
    home: true,
    scored: 10,
    conceded: 2,
  },
  {
    id: 4,
    date: '2025-11-03',
    opponent: 'Dardanet',
    home: false,
    scored: 7,
    conceded: 6,
  },
  {
    id: 5,
    date: '2025-11-10',
    opponent: 'Futsal Lions',
    home: true,
    scored: 2,
    conceded: 3,
  },
  {
    id: 6,
    date: '2025-11-24',
    opponent: 'BIH United',
    home: false,
    scored: 1,
    conceded: 3,
  },
  {
    id: 7,
    date: '2025-12-08',
    opponent: 'FC De Schuddertjes',
    home: true,
    scored: 6,
    conceded: 5,
  },
  {
    id: 8,
    date: '2026-01-05',
    opponent: 'Ham Hoepertingen',
    home: false,
    scored: 1,
    conceded: 5,
  },
  {
    id: 9,
    date: '2026-01-12',
    opponent: 'Dynamo Heers',
    home: true,
    scored: 4,
    conceded: 5,
  },
  {
    id: 10,
    date: '2026-02-02',
    opponent: 'Mamba FC',
    home: false,
    scored: 4,
    conceded: 2,
  },
  {
    id: 11,
    date: '2026-02-09',
    opponent: 'ZVC Chaussee',
    home: true,
    scored: 1,
    conceded: 6,
  },
  {
    id: 12,
    date: '2026-03-02',
    opponent: "'t Loon",
    home: false,
    scored: 10,
    conceded: 5,
  },
  {
    id: 13,
    date: '2026-03-16',
    opponent: 'Dardanet',
    home: true,
    scored: 12,
    conceded: 7,
  },
  {
    id: 14,
    date: '2026-03-23',
    opponent: 'Futsal Lions',
    home: false,
    scored: 3,
    conceded: 4,
  },

  {
    id: 15,
    date: '2026-04-20',
    opponent: 'BIH United',
    home: true,
    scored: 2,
    conceded: 3,
  },

  {
    id: 16,
    date: '2026-05-04',
    opponent: 'FC De Schuddertjes',
    home: false,
    scored: 6,
    conceded: 5,
  },
  {
    id: 17,
    date: '2026-05-18',
    opponent: 'Ham Hoepertingen',
    home: true,
    scored: 8,
    conceded: 2,
  },
  {
    id: 18,
    date: '2026-06-01',
    opponent: 'Dynamo Heers',
    home: false,
    scored: 3,
    conceded: 2,
  },
];

export const standings: StandingRow[] = [
  {
    position: 1,
    team: 'ZVC Chaussee',
    played: 17,
    won: 17,
    drawn: 0,
    lost: 0,
    goalsFor: 112,
    goalsAgainst: 25,
    points: 51,
  },
  {
    position: 2,
    team: 'Futsal Lions',
    played: 16,
    won: 10,
    drawn: 2,
    lost: 4,
    goalsFor: 91,
    goalsAgainst: 64,
    points: 32,
  },
  {
    position: 3,
    team: 'Onder De Toren Veulen',
    played: 18,
    won: 10,
    drawn: 0,
    lost: 8,
    goalsFor: 86,
    goalsAgainst: 71,
    points: 30,
  },
  {
    position: 4,
    team: 'Dynamo Heers',
    played: 15,
    won: 9,
    drawn: 2,
    lost: 4,
    goalsFor: 84,
    goalsAgainst: 45,
    points: 29,
  },
  {
    position: 5,
    team: 'Ham Hoepertingen',
    played: 18,
    won: 8,
    drawn: 1,
    lost: 9,
    goalsFor: 69,
    goalsAgainst: 77,
    points: 25,
  },
  {
    position: 6,
    team: 'BIH United',
    played: 16,
    won: 6,
    drawn: 4,
    lost: 6,
    goalsFor: 48,
    goalsAgainst: 54,
    points: 22,
  },
  {
    position: 7,
    team: 'Dardanet',
    played: 15,
    won: 7,
    drawn: 0,
    lost: 8,
    goalsFor: 89,
    goalsAgainst: 100,
    points: 21,
  },
  {
    position: 8,
    team: "'t Loon",
    played: 16,
    won: 4,
    drawn: 1,
    lost: 11,
    goalsFor: 58,
    goalsAgainst: 115,
    points: 13,
  },
  {
    position: 9,
    team: 'FC De Schuddertjes',
    played: 15,
    won: 4,
    drawn: 0,
    lost: 11,
    goalsFor: 71,
    goalsAgainst: 85,
    points: 12,
  },
  {
    position: 10,
    team: 'Mamba FC',
    played: 16,
    won: 1,
    drawn: 0,
    lost: 15,
    goalsFor: 41,
    goalsAgainst: 113,
    points: 3,
  },
];

export const sponsors: Sponsor[] = [
  {
    name: 'Nijs Chris',
    category: 'Hoofdsponsor',
    description: 'Chris Nijs staat voor betrouwbare service, lokale betrokkenheid en een praktische aanpak waarop je kan rekenen.',
    accent: 'sunrise',
    image: chrisNijsSponsorImage,
    details: {
      address: 'Steenweg 93/201,\n 3870 Heers',
      contact: '+32 497 69 14 97',
      extraInfo:
        'Onze sponsor is een betrouwbare specialist in thuisonderhoud en klusjesdiensten, die klaarstaat voor zowel kleine herstellingen als grotere projecten in en rond de woning. Met oog voor detail en een passie voor vakmanschap zorgt hij ervoor dat elke klus professioneel en efficiënt wordt uitgevoerd.\n\n Of het nu gaat om schilderwerken, kleine renovaties, herstellingen of algemeen onderhoud, onze sponsor biedt een persoonlijke service op maat van de klant. Betrouwbaarheid, kwaliteit en klanttevredenheid staan steeds centraal.\n\n Dankzij zijn jarenlange ervaring en praktische aanpak is hij de ideale partner voor iedereen die zorgeloos wil genieten van een goed onderhouden woning.',
    },
  },
  {
    name: 'Garage Kar',
    category: 'Hoofdsponsor',
    description: 'Garage KAR is al meer dan 20 jaar specialist in onderhoud en herstellingen van alle automerken, met duidelijke service en sterke vakkennis.',
    accent: 'field',
    image: garageCarSponsorImage,
    details: {
      address: 'Bovelingenstraat 195,\n 3870 Heers',
      contact: '+32 495 20 85 97 \ninfo@garagekar.be',
      website: 'www.garagekar.be',
      extraInfo:
        'Garage KAR is al meer dan 20 jaar specialist in onderhoud en herstellingen van alle automerken. Ze staan voor een sterke prijs-kwaliteitsverhouding, duidelijke offertes op voorhand en persoonlijke service zonder verrassingen.\n\nBij Garage KAR ben je geen nummer. Het atelier is open en transparant, en omdat ze enkel op afspraak werken, krijg je de tijd en service die je verdient. Ook avond- en weekendafspraken zijn mogelijk zonder meerkost, en indien nodig kan er een vervangwagen voorzien worden zodat je mobiel blijft.\n\nDiensten:\n- Onderhoud: klein en groot onderhoud, versnellingsbakolie verversen, aircoreiniging, remvloeistof verversen, koelvloeistof verversen, distributieriemservice, nazicht voor keuring, AdBlue vullen en winter- of zomernazicht.\n- Herstellingen: remschijven en blokken, ruitenwissers, schokdempers, uitlaat, startsysteem en batterij, stuurinrichting, wielophanging, versnellingsbak, koppeling, ruiten herstellen of vervangen en airconditioning.\n- Bandenservice: montage en uitbalanceren, zomer- en winterwissel, herstellen van een lekke band en uitlijning.',
    },
  },
  {
    name: "'t Pleintje",
    category: 'Co-sponsor',
    description: "Frituur 't Pleintje is een warme lokale partner waar verse frieten, snacks en persoonlijke service centraal staan.",
    accent: 'night',
    image: tPleintjeSponsorImage,
    details: {
      address: 'Bovelingenstraat 163,\n 3870 Heers',
      contact: 'Contactgegevens nog aan te vullen',
      extraInfo:
        "Frituur 't Pleintje in Heers wordt uitgebaat door Tibo, die elke dag klaarstaat om klanten te ontvangen met verse frieten, snacks en een glimlach. Of je nu vaste klant bent of voor het eerst langskomt, de bedoeling blijft altijd hetzelfde: snel, vriendelijk en met kwaliteit bedienen.\n\nSinds de zomer van 2025 is Tibo de trotse eigenaar van het gezellige chaletje op het plein. Met een persoonlijke aanpak en de vertrouwde kwaliteit van meer dan 30 jaar blijft Frituur 't Pleintje een vaste waarde voor iedereen die zin heeft in een snelle en smakelijke hap.\n\nBij Frituur 't Pleintje kan je terecht voor knapperige frieten, klassieke snacks en lekkere verrassingen. De service is persoonlijk, de sfeer is warm en je voelt je er meteen welkom. Een ideale stop voor wie houdt van iets eenvoudigs dat gewoon heel goed gedaan is.",
    },
  },
  {
    name: 'Onder den Toren Veulen',
    category: 'Co-sponsor',
    description: 'Café Onder den Toren in Veulen is een gezellig volkscafé waar dorpssfeer, ontmoeting en een goed glas centraal staan.',
    accent: 'field',
    image: odtCafeSponsorImage,
    details: {
      address: 'Nieuwe Steenweg 137,\n3870 Heers',
      contact: '+32 11 48 15 75',

      extraInfo:
        'Café Onder den Toren in Veulen is een echt volkscafé waar gezelligheid, ontmoeting en dorpssfeer centraal staan. Het is een plek waar mensen samenkomen voor een drankje, een babbel en een fijne avond in een warme, vertrouwde omgeving.\n\n Bierliefhebbers zijn er zeker aan het juiste adres, met een mooi aanbod aan verschillende bieren, waaronder abdijbieren en trappisten. Een van de echte troeven van het café is zonder twijfel de frisse Stella, die bij veel bezoekers bijzonder in de smaak valt. Ook voor een cocktail of aperitief ben je hier welkom.',
    },
  },
  {
    name: 'Hoydonckx',
    category: 'Tenuesponsor',
    description: 'Agri-service Hoydonckx is een gevestigde naam in landbouwmachines, onderhoud en snelle panneservice, met decennialange ervaring en een sterke familiale aanpak.',
    accent: 'sunrise',
    image: hoydonckxSponsorImage,
    details: {
      address: 'Hannuitsesteenweg 399,\n3401 Landen,',
      contact: '+32 11 88 20 41',
      website: 'www.hoydonckx.be',
      extraInfo:
        'Agri-service Hoydonckx is al sinds de jaren 60 een vaste waarde in de wereld van landbouwmachines. Het verhaal begon toen Louis Hoydonckx een bescheiden werkplaats voor Volvo-tractoren opstartte. In 1980 volgde de oprichting van Hoydonckx bvba samen met Richard Melotte, en in 1988 kwam Ronny Plessers mee aan boord. Met de opening van een nieuw, modern bedrijfspand in 2000 groeide Hoydonckx verder uit tot een gevestigde partner voor landbouwers die rekenen op kwaliteit, techniek en service.\n\nVandaag staat Hoydonckx voor veel meer dan alleen verkoop. Ze bieden tractoren en landbouwmachines aan van sterke merken zoals Valtra, Lemken, Dewulf, Agrifac, Krone en Fliegl, en combineren dat met een uitgebreide onderdelenservice, onderhoud op maat en snelle herstellingen op locatie. Hun goed uitgeruste werkplaats, ruime magazijn en servicevoertuigen zorgen ervoor dat klanten snel weer verder kunnen wanneer elke werkdag telt.\n\nWat Hoydonckx echt typeert, is de combinatie van technische vakkennis en een warme, familiale aanpak. Het team bestaat uit ervaren en goed opgeleide medewerkers die landbouw door en door begrijpen en voortdurend blijven bijscholen. Of het nu gaat om een dringende panne, preventief onderhoud, onderdelen of advies rond machines: bij Agri-service Hoydonckx draait alles om betrouwbaarheid, klantgerichtheid en meedenken met de mensen op het veld.',
    },
  },
  {
    name: 'Jump Into Your Party',
    category: 'Tenuesponsor',
    description: 'Jump Into Your Party verhuurt springkastelen, XXL-spellen en feestattracties voor kinderfeesten en events, met een flexibele service vanuit Heers.',
    accent: 'night',
    image: jumpIntoYourPartySponsorImage,
    details: {
      address: 'Bovelingenstraat 177A / 2,\n3870 Mechelen-Bovelingen (Heers)',
      contact: '0494 70 30 71\nnickboffin@hotmail.com',
      website: 'www.jumpintoyourparty.be',
      extraInfo:
        'Jump Into Your Party is een lokale feestpartner uit Heers die zich focust op de verhuur van springkastelen, spellen en attracties voor feestjes, communies en evenementen. Op de site vind je onder meer springkastelen, XXL-spellen en andere speelelementen voor kinderen, telkens met een duidelijke focus op gebruiksgemak en speelplezier.\n\nDe werking is heel praktisch opgezet: reservaties worden bevestigd per mail, levering en plaatsing gebeuren door Jump Into Your Party zelf, en binnen een straal van 20 kilometer rond Heers is levering gratis. Op de website vermelden ze ook een slechtweergarantie, waardoor annuleren door regen tot kort voor vertrek mogelijk blijft. Dat maakt hen een toegankelijke en flexibele partner voor gezinnen en organisatoren die zonder veel gedoe iets leuk willen voorzien.\n\nJump Into Your Party ondersteunt ODT als tenuesponsor en past perfect bij de warme, lokale uitstraling van de club. Met hun focus op plezier, service en vlotte organisatie zijn ze niet alleen zichtbaar op het shirt, maar ook een sponsor die echt iets herkenbaars en sympathieks toevoegt aan de ploegwerking.',
    },
  },
  {
    name: 'Kim Knaepen Tegelwerken',
    category: 'Tenuesponsor',
    description: 'K.K. vloer-tegel en klusjeswerken uit Heers staat voor verzorgd tegelwerk, correcte prijzen en een betrouwbare service bij renovatie- en klusprojecten.',
    accent: 'field',
    image: kimKnaepenSponsorImage,
    details: {
      address: 'Dreefstraat 15,\n3870 Heers',
      contact: '011 18 56 24\nkim.knaepen@hotmail.be',
      extraInfo:
        'K.K. vloer-tegel en klusjeswerken is een professionele vakman uit Heers die gespecialiseerd is in tegelwerken en allerlei klus- en renovatiewerken. Vanuit Mechelen-Bovelingen werkt de firma voor klanten in de regio Heers en Nieuwerkerken, met een duidelijke focus op netheid, stiptheid en degelijk afgewerkt werk.\n\nDe kern van de activiteiten ligt bij het plaatsen van vloer- en wandtegels, maar daarnaast kan je ook rekenen op K.K. voor diverse klusjes en algemene renovatiewerken. Die combinatie maakt het een praktische partner voor mensen die iemand zoeken die niet alleen mooi werk aflevert, maar ook correct communiceert en afspraken nakomt.\n\nKlanten waarderen K.K. vloer-tegel en klusjeswerken vooral om het vakmanschap, de vriendelijke aanpak en de correcte prijzen. Als tenuesponsor van ODT ondersteunt de firma niet alleen de ploeg op wedstrijddagen, maar ook de warme, lokale werking van de club.',
    },
  },
  {
    name: 'Dominic Leenaerts Fruit',
    category: 'Tenuesponsor',
    description: 'Dominic Leenaerts Fruit staat voor verse producten, een lokale aanpak en een sponsorengagement dat perfect past bij de warme sfeer rond ODT.',
    accent: 'sunrise',
    image: dominicLeebaertsSponsorImage,
    details: {
      address: 'Steenweg 13, \n3870 Heers',
      contact: '011 48 25 11',
      extraInfo:
        'Dominic Leenaerts Fruit is een lokale partner die mooi aansluit bij het karakter van de club: vertrouwd in de streek, dicht bij de mensen en verbonden met het dagelijkse leven in de buurt.\n\nAls tenuesponsor helpt Dominic Leenaerts Fruit mee om ODT sterk en verzorgd voor de dag te laten komen, zowel op als naast het veld. Zulke sponsors zijn belangrijk voor een club als ODT, omdat ze niet alleen zichtbaar zijn op de uitrusting, maar ook mee tonen dat lokale ondernemers achter de ploeg en haar werking staan.\n\nMet Dominic Leenaerts Fruit erbij krijgt ODT er een sponsor bij die perfect past in het rijtje van warme, regionale partners waarop de club kan bouwen. Het is precies die lokale betrokkenheid die de sfeer rond Onder den Toren mee maakt tot wat ze is.',
    },
  },
];

export const spotlightPlayers: SpotlightPlayer[] = [
  {
    name: 'Robbe Grosemans',
    role: 'Bankzitter',
    highlight: 'Tegen Dardanet brak hij helemaal los: eerst zijn eerste van het seizoen, daarna nog twee erbij voor een hattrick en een hoofdrol in de 12-7 zege.',
    statLabel: 'MOTM',
    statValue: '17/03/2026',
    image: robbeMotmImage,
  },
  {
    name: 'Milan Schroyen',
    role: 'Verdediger',
    highlight: 'Tegen Mamba FC scoorde hij twee keer, eerst voor de 1-1 en later opnieuw op aangeven van Yoran. Daarbovenop gaf hij ook nog de assist voor de 2-4 van Devin.',
    statLabel: 'MOTM',
    statValue: '03/02/2026',
    image: schroyenMotmImage,
  },
  {
    name: 'Yoran Knaepen',
    role: 'All rounder',
    highlight: 'Tegen Dardanet was hij beslissend met twee goals, drie assists en in de slotminuten ook nog de winning goal voor de 6-7.',
    statLabel: 'MOTM',
    statValue: '04/11/2025',
    image: yoranMotmImage,
  },
  {
    name: 'Pedro Santos',
    role: 'All rounder',
    highlight: 'Na een schitterende wedstrijd met een hattrick en een assist was het snel duidelijk wie de Team of the Week verdiende.',
    statLabel: 'MOTM',
    statValue: '21/10/2025',
    image: pedroMotmImage,
  },
  {
    name: 'Feyo "Kanga" Wolfs',
    role: 'Kanga',
    highlight:
      'Als allereerste man of the match bewees Feyo meteen zijn klasse met twee prachtige doelpunten. Daarmee trok hij de winst over de streep en zette hij een prestatie neer die in de geschiedenisboeken komt.',
    statLabel: 'MOTM',
    statValue: '29/09/2025',
    image: feyoMotmImage,
  },
];

export const squadPlayers: SquadPlayer[] = [
  {
    name: 'Rune Paque',
    number: 1,
    position: 'Keeper',
    goals: 0,
    assists: 3,
    matches: 16,
    playerOfTheMatch: 4,
    image: runePlayerImage,
    customStats: [
      { label: 'Goals', value: 0 },
      { label: 'Benen gebroken', value: 4 },
      { label: 'Aantal schoten', value: 102 },
      { label: 'Ballen tussen de benen', value: 29 },
    ],
  },
  {
    name: 'Arjen Coenegracht',
    number: 8,
    position: 'Bankzitter',
    goals: 1,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: arjenPlayerImage,
    customStats: [
      { label: 'Goals', value: 1 },
      { label: 'Kapotte benen', value: '1,5' },
      { label: 'Buiten in slaap gevallen', value: '1 keer' },
      { label: 'Minuten op de bank', value: 842 },
    ],
  },
  {
    name: 'Milan Schroyen',
    number: 9,
    position: 'Verdediger',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image:  schroyenPlayerCard,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: 'Bokken gedronken', value: 155 },
      { label: 'Potjes tijgerbalsem', value: 15 },
      { label: 'Liters gezweet', value: '157.670' },
    ],
  },
  {
    name: 'Yoran Knaepen',
    number: 10,
    position: 'All rounder',
    goals: 15,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: yoranPlayerImage,
    customStats: [
      { label: 'Goals', value: 15 },
      { label: 'KM afgelegd', value: 5127 },
      { label: 'Aantal keer onderuit gehaald', value: '1987' },
      { label: 'Gescout door topclubs', value: '13' },
    ],
  },
  {
    name: 'Rens Vanekan',
    number: 14,
    position: 'Aanvaller',
    goals: 11,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: rensPlayerImage,
    customStats: [
      { label: 'Goals', value: 11 },
      { label: "Panna's uitgedeeld", value: 23 },
      { label: 'Haren verloren dit seizoen', value: '123.547' },
      { label: 'Verdedigers gek gemaakt', value: 31 },
    ],
  },
  {
    name: 'Pedro Santos',
    number: 25,
    position: 'All rounder',
    goals: 12,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: pedroPlayerImage,
    customStats: [
      { label: 'Goals', value: 12 },
      { label: 'Gepast ipv geschoten', value: 45 },
      { label: 'Schotkracht', value: '22 km/h' },
      { label: 'Own goals', value: 4 },
    ],
  },
  {
    name: 'Math Royer',
    number: 60,
    position: 'Aanvaller',
    goals: 7,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: mathPlayerImage,
    customStats: [
      { label: 'Goals', value: 7 },
      { label: 'Paal geraakt', value: 34 },
      { label: "Trivela's", value: 14 },
      { label: 'Waal', value: 'Ja' },
    ],
  },
  {
    name: 'Devin Thirion',
    number: 69,
    position: 'Skiller',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: devinPlayerImage,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: "Pizza's gegeten", value: '>1' },
      { label: "KM's gelopen", value: 2 },
      { label: 'Wespen meegenomen', value: 1 },
    ],
  },
  {
    name: 'Bipin Naeten',
    number: 81,
    position: 'Aanvaller',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: bipinPlayerImage,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: 'Geld', value: '- 501,57' },
      { label: 'Aantal dagen geblesseerd', value: 143 },
      { label: 'Aantal keer gespauwd', value: 1501 },
    ],
  },
  {
    name: 'Robbe Grosemans',
    number: 96,
    position: 'Bankzitter',
    goals: 3,
    assists: 0,
    matches: 12,
    playerOfTheMatch: 0,
    image: robbePlayerImage,
    customStats: [
      { label: 'Goals', value: 3 },
      { label: 'Geschreeuwd', value: 12 },
      { label: 'Ginger', value: 'Ja' },
      { label: 'Rode kaarten uitgedeeld', value: '100' },
    ],
  },
  {
    name: 'Nicolas Libert',
    number: 99,
    position: 'Verdediger',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: nicolasPlayerImage,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: 'Schotkracht', value: '200 km/h' },
      { label: "Auto's kapot gereden", value: 1 },
      { label: 'Gespauwd tijdens opwarming', value: 1 },
    ],
  },
];

const heersVenue = {
  venue: 'Sportcentrum De Raes (Sporthal Heers)',
};

const borgloonVenue = {
  venue: 'Sporthal Borgloon',
};

export const agenda: AgendaItem[] = [
  { date: '2026-09-14', time: '21:00', title: 'ZVK ODT vs. ZVC Chaussée', description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2026-09-21', time: '19:00', title: 'Dynamo vs. ZVK ODT', description: 'Uitwedstrijd', ...heersVenue },
  { date: '2026-09-28', time: '21:00', title: 'ZVK ODT vs. ZVC Zaadgranaat', description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2026-10-05', time: '21:00', title: 'Mamba FC vs. ZVK ODT', description: 'Uitwedstrijd', ...heersVenue },
  { date: '2026-10-12', time: '22:00', title: 'ZVK ODT vs. ZVK Hoepertingen C', description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2026-10-19', time: '20:00', title: 'ZVK Hoepertingen B vs. ZVK ODT', description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2026-10-26', time: '20:00', title: "'t Loon vs. ZVK ODT", description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2026-11-09', time: '22:00', title: "ZVK ODT vs. ZVC 't Tulpke", description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2026-11-16', time: '20:00', title: 'LG Overrepen vs. ZVK ODT', description: 'Uitwedstrijd', ...heersVenue },
  { date: '2026-12-07', time: '20:00', title: 'Dardanet Borgloon vs. ZVK ODT', description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2026-12-14', time: '21:00', title: 'ZVK ODT vs. United Heers', description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2027-01-04', time: '22:00', title: 'BIH United vs. ZVK ODT', description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2027-01-11', time: '21:00', title: 'ZVC Chaussée vs. ZVK ODT', description: 'Uitwedstrijd', ...heersVenue },
  { date: '2027-01-18', time: '19:00', title: 'ZVK ODT vs. Dynamo', description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2027-01-25', time: '21:00', title: 'ZVC Zaadgranaat vs. ZVK ODT', description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2027-02-01', time: '21:00', title: 'ZVK ODT vs. Mamba FC', description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2027-02-08', time: '22:00', title: 'ZVK Hoepertingen C vs. ZVK ODT', description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2027-02-22', time: '20:00', title: 'ZVK ODT vs. ZVK Hoepertingen B', description: 'Thuiswedstrijd', ...borgloonVenue },
  { date: '2027-03-01', time: '20:00', title: "ZVK ODT vs. 't Loon", description: 'Thuiswedstrijd', ...heersVenue },
  { date: '2027-03-08', time: '22:00', title: "ZVC 't Tulpke vs. ZVK ODT", description: 'Uitwedstrijd', ...borgloonVenue },
  { date: '2027-03-15', time: '20:00', title: 'ZVK ODT vs. LG Overrepen', description: 'Thuiswedstrijd', ...heersVenue },
];

export const transfers: TransferUpdate[] = [
  {
    name: 'Devin',
    direction: 'Nieuwe transfer',
    headline: 'ODT haalt uit met dure stunttransfer',
    note: 'Onder Den Toren Veulen heeft diep in de buidel moeten tasten om Devin binnen te halen. Na lange onderhandelingen, stevige concurrentie van onder meer Wellen en zelfs geruchten rond Barcelona, koos de skiller uiteindelijk toch voor ODT.',
    image: devinTransferImage,
    article: [
      'Onder Den Toren Veulen heeft zich deze week stevig laten gelden op de transfermarkt met de komst van Devin. De club deed er achter de schermen alles aan om hem binnen te halen en moest daarvoor diep in de buidel tasten.',
      'De transfer was allesbehalve vanzelfsprekend, want ook Wellen zat naar verluidt stevig op het dossier en zelfs Barcelona werd in de wandelgangen genoemd. Dat ODT hem uiteindelijk toch wist te strikken, maakt de deal alleen maar straffer.',
      'Waarom Devin? Omdat hij een speler is die met een actie een match kan openbreken. Technisch sterk, onvoorspelbaar en iemand waarvoor mensen rechtstaan zodra hij aan de bal komt. Binnen de club wordt zelfs lachend gezegd dat hij op een seizoen misschien maar 67 meter loopt, maar in die paar meters wel meer verschil maakt dan een ander in een hele match.',
      'Met deze transfer wil ODT duidelijk tonen dat het ambitie heeft. De komst van Devin is een statement - nu is het aan hem om dat op het veld te bevestigen.',
    ],
  },
];
