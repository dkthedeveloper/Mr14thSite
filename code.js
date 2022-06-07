// Selectors
const section2 = document.getElementById('section-2');
const bio1 = document.getElementById('bio-1');
const bio2 = document.getElementById('bio-2');


//
let bioArray1 = [
                "Worked as recording engineer for artists/creatives such as Future, best selling author and recording artist M.K. Asante, Tate Kobang, Young Moose and more.",
                "In 2014, launched 'Big Vibe': a DJ/event curation collective co-founded w/ producer/artist D.K. The Punisher.",
                "Made waves as a studio engineer, DJ, event curator and artist.", 
                "Event creator and director, handling every aspect of event curation, from booking acts to set design and live sound production."
                ]
let bioArray2 = [
                "Featured on the cover of I-D magazine \"artist and activist\”.", 
                "Featured on Vice showcasing Baltimore talent for the year wrap-up with Lawrence burney.",
                "DJ for local Baltimore festivals, such as 'Brilliant Baltimore' (2019) and 'Artscape' (2018 and 2019).",
                "2020 Baltimore Sun’s 'Best DJ' nominee by readers choice."
            ];

bioArray1.map((e) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${e}<br><br>`;
    bio1.append(listItem);
});

bioArray2.map((e) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${e}<br><br>`;
    bio2.append(listItem);
});