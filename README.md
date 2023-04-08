## Deployed on vercel (Check out) -> https://the-movie-point.vercel.app/
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### FEATURES

**- The app uses the OMDb API (http://www.omdbapi.com/) to search for movies.** ✅ 

**- The app have a {__SEARCH BAR__} where users can enter a movie title or can search using any word of a movie title.** ✅

**- The app displays the search results as a list of movie titles with their posters.** ✅

**- Clicking on a **[DETAILS BUTTON]** take you to its details card (title, poster, release year) and also can watch the trailer.** ✅

**- The app is responsive and work well on desktop, tablets and mobile devices.** ✅

**- Pagination has been implemented to display more search results **[LOAD MORE]** button at bottom (fetches 10 additional movies on each click). Additionally the button will get automatically disabled if no more movies are left to fetch from OMDB.** ✅

**- Implemented caching to reduce API requests, using **[LRU Caching]** and **[useSWR hook]** (making it fast and reducing the load time each time on repeatative searchs). It [**saves 300 movies data**] and automatically updates the new query data in cache while deleting the least recent query data.** ✅

**- Used animations and transitions to make the app polished.** ✅

**- Added a **[DARK/LIGHT theme]**, button is at top right corner, increasing the smooth user experience.** ✅

**- Users can filter search results by genre, the [**GENRE list**] is at the top of search bar, can navigate to any genre and if visited any genre again, caching efficiently reduces refetching everytime.** ✅


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

## **WHAT APP LOOKS ON DIFFERENT SCREENS**

## Desktop

### LIGHT THEME

<img width="600" alt="Screenshot 2023-04-06 143405" src="https://user-images.githubusercontent.com/110756551/230710073-176585fb-d679-4cdc-9d8a-80311599d9e1.png">

### DARK THEME

<img width="600" alt="Screenshot 2023-04-06 143430" src="https://user-images.githubusercontent.com/110756551/230710090-8b0ad9f2-329e-4b80-bb36-5fc8145aa214.png">


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Tablet

### LIGHT THEME

<img width="450" alt="Screenshot 2023-04-06 143453" src="https://user-images.githubusercontent.com/110756551/230710150-8ad576cf-24c4-4767-9f17-92ec541bfce7.png">

### DARK THEME

<img width="450" alt="Screenshot 2023-04-06 143508" src="https://user-images.githubusercontent.com/110756551/230710153-66b59bcc-cc82-414b-ae54-f82bf7e13f05.png">


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Mobile Phone

### LIGHT THEME

<img width="250" alt="Screenshot 2023-04-06 143535" src="https://user-images.githubusercontent.com/110756551/230710169-6cecc25f-e377-4eae-8133-5596780c1e05.png">

### DARK THEME

<img width="250" alt="Screenshot 2023-04-06 143525" src="https://user-images.githubusercontent.com/110756551/230710175-7e2e6a15-b5c2-4ed9-89ab-d76a9eb21172.png">

