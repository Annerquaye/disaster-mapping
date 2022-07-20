
let topTitleDiv = "<h4>July 2022</h4>";

let titleDiv =
  "<h1>Weather and climate disasters cost $2.2bn in damages in last four decades</h1>";

let bylineDiv = '<p>By Richard A. Abbey</p>';

let descriptionDiv = 
  '<p>The U.S. has sustained 332 weather and climate disasters since 1980 where overall damages/costs reached or exceeded $1 billion (including CPI adjustment to 2022). The total cost of these 332 events exceeds $2.275 trillion.</p>' +
  '<p>Since 1980, the U.S. has sustained over 330 weather and climate disasters which have caused damages exceeding $2.2 trillion, data from the <a href="https://www.ncei.noaa.gov/access/billions/summary-stats#temporal-comparison-stats"> National Centers for Environmental Information </a> has shown. Disasters tracked by the center typically cost at least a billion dollars and they include drought, winter storm, flooding, wildfire, freeze, tropical cyclone and severe storm.</p>' +
  '<p>The center explained that its assessment system to estimate damages was developed using the most comprehensive public and private sector sources and represent the estimated total costs of these events -- that is, the costs in terms of dollars that would not have been incurred had the event not taken place.</p>' +
  '<p>Typically, these costs include: physical damage to residential, commercial, and municipal buildings; material assets (content) within buildings; time element losses such as business interruption or loss of living quarters; damage to vehicles and boats; public assets including roads, bridges, levees; electrical infrastructure and offshore energy platforms; agricultural assets including crops, livestock, and commercial timber; and wildfire suppression costs, among others.</p>' +
  '<p> The states that have suffered the most from these damages were hit by powerful storms often classified as Category 3 and above on Saffir–Simpson hurricane wind scale (SSHWS), which classifies hurricanes.</p>' +
  '<<video class="smallvideo" width="600" height="470" autoplay muted>'
  +  '<source src="hurricane.mp4" type="video/mp4">'
  + '</video>' +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p> </p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';


  let divChapter0 =
  '<img src="state-disaster.svg">' +
  '<p>Over the past four decades, tropical cyclones have made the most destruction nationwide. These destructive weather events have led to losses exceeding $1.1 trillion. These storms are largely responsible for huge amounts of damages suffered in eight of the top ten states have been significantly hit by these disasters.</p>';

 
  let divChapter1 =
  "<h3>TEXAS. The most devastated. COST: $361bn</h3>" +
  '<img src="images/hurricaneHarvey.jpeg">' +
  '<p class="imageCredit"><a href="https://www.houstonpress.com/news/weather-week-rain-chances-return-to-houston-10795066/">Houston Press</a></p>' +
  '<p> In August 2017, Hurricane Harvey came through the Houston area. With wind speed measuring up to 156mph, Harvey was designated a Category 4 hurricane. Harveys devastation was most pronounced due to the large region of extreme rainfall producing historic flooding across Houston and surrounding areas, said the National Centers for Environmental Information. </p>'
  + '<p> The damage caused by Harvey was estimated at $149 billion, nearly half of the total $361 billion the state had incurred in all weather and climate disasters since 1980.</p>';

let divChapter2 =
  "<h3>Louisiana. Counting Hurricane Katrina's cost</h3>" +
  '<img src="images/hurricaneKatrina.jpeg">' +
  '<p class="imageCredit"><a href="https://www.reuters.com/news/picture/whats-in-a-name-more-deaths-study-idUSKBN0ED1ZT20140602">Reuters</a></p>' +
  '<p>Hurricane Katrina, Category 3, is said to have caused the most damage in terms of costs among all the climate and weather disasters measured by the National Centers for Environmental Information.</p>' +
  '<p>Louisiana has suffered $287 billion in damages from weather-related disasters in the last four decades. Katrina alone is responsible for nearly 65 percent of this cost.</p>';


let divChapter3 =
  "<h3>Florida. Remembering Hurricane Andrew</h3>" +
  '<img src="images/hurricaneAndrew.jpeg">' +
  '<p class="imageCredit"><a href="https://www.miamiherald.com/news/weather/hurricane/article32006499.html">Miami Heralds</a></p>' +
  '<p>Thirty years ago, Hurricane Andrew hit Florida. Initially measured as Category 4, Andrew was later upgraded to Category 5, the highest intensity on the Saffir–Simpson hurricane wind scale (SSHWS) scale; the third Category 5 hurricane in history affected the U.S. mainland. Since 1980, Florida has lost $257 billion to disasters, with Andrew accounting for $55 billion.</p>';


  let divChapter4 =
  "<h3>California. The Devasting Camp Fire</h3>" +
  '<img src="images/campFire.jpeg">' +
  '<p class="imageCredit"><a href="https://www.npr.org/2020/06/16/879008760/pg-e-pleads-guilty-on-2018-california-camp-fire-our-equipment-started-that-fire">NPR</a></p>' +
  '<p>In 2018, California experienced its costliest, deadliest, and largest wildfires, with records from 1933, the National Centers for Environmental Information said. The Camp Fire is the most expensive and most fatal wildfire - destroying more than 18,000 buildings and killing over 100 people. Out of the $135 billion the state has lost to weather-related disasters since 1980, the Camp Fire accounted for $46 billion, more than 30 percent.</p>';


let divChapter5 =
  "<h3>North Carolina</h3>" +
  '<img src="images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  '<p>Hurricane Florence is one of the notable storms to have hit North Carolina. Florence made its landfall in 2018 as a Category 1. In the last four decades, the state lost more than $80billion to disasters – Florence was responsible for nearly a quarter.</p>';


var config = {
  style: "mapbox://styles/annerquaye/cl5n9nxbr001e14pb3m3sqckc",
  accessToken: "pk.eyJ1IjoiYW5uZXJxdWF5ZSIsImEiOiJjbDN1OHN1NG4wZzZvM2ZuMHkyYzRybWY0In0.rfM8ZifOkxDoNJ3y39Q5HQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
        id: "full-map",
        alignment: "centered",
        hidden: false,
        chapterDiv: divChapter0,
        location: {
          center: [-96.476, 40.408],
          zoom: 4,
          zoomSmall: 9,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [],
        onChapterExit: [],
      },
    {
      id: "hurricane-harvey",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-98.202, 32.930],
        zoom: 5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "hurricane-katrina",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-91.727, 31.066,],
        zoom: 7,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "hurricane-andrew",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-82.417, 27.503],
        zoom: 6,
        zoomSmall: 14,
        pitch: 0,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "camp-fire",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-116.937, 35.673],
        zoom: 5,
        zoomSmall: 14,
        pitch: 0,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "southBronx",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-76.485, 35.981],
        zoom: 6,
        zoomSmall: 14,
        pitch: 0,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};