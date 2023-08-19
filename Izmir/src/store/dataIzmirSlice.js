import { createSlice } from "@reduxjs/toolkit";

import imgFlat from '../assets/imageFlat.svg'
import imgBlock from '../assets/A-block.svg'
import imgDev from '../assets/dev.svg'

const developers = [];
const blocks = [];
const rooms = [];

async function fetchData() {
  try {
    const response1 = await fetch('http://89.38.131.46:1808/api/developers/');
    const data1 = await response1.json();
    developers.push(data1);

    const response2 = await fetch('http://89.38.131.46:1808/api/blocks/');
    const data2 = await response2.json();
    blocks.push(data2);

    const response3 = await fetch('http://89.38.131.46:1808/api/all_tables/');
    const data3 = await response3.json();
    rooms.push(data3);

    console.log("All data fetched and pushed into arrays.");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Вызовите функцию для начала загрузки данных
fetchData();

for(let i = 0; i < developers.length; i++){
  for(let z = 0; z < blocks.length; z++){
    for(let j = 0; j < rooms.length; j++){

      if(rooms[j].building === blocks[z].pk){
        blocks[z].rooms = [...rooms[j]];
      }

      if(blocks[z].developer === developers[i].pk){
        developers[i].blocks =[...blocks[z]];
      }
    }
  }
}

const izmirSlice = createSlice({
    name: 'izmir',
    initialState: {
        data: [
            {
              name: 'NeonBuild',
              img: imgDev,
              id: 1,
              blocks: [
                {name: 'А', img: imgBlock, id: 1, 
                rooms:  [
                  {num: 1, state: 'free', img: imgFlat},
                  {num: 2, state: 'sold', img: imgFlat},
                  {num: 3, state: 'discuss', img: imgFlat},
                  {num: 4, state: 'booked', img: imgFlat}
                ]
                }, 
                {name: 'Б', img: imgBlock, id: 2,
                rooms:  [
                  {num: 1, state: 'free', img: imgFlat},
                  {num: 2, state: 'sold', img: imgFlat},
                  {num: 3, state: 'discuss', img: imgFlat},
                  {num: 4, state: 'booked', img: imgFlat}
                ]
                }, 
                {name: 'В', img: imgBlock, id: 3,
                rooms:  [
                  {num: 1, state: 'free', img: imgFlat},
                  {num: 2, state: 'sold', img: imgFlat},
                  {num: 3, state: 'discuss', img: imgFlat},
                  {num: 4, state: 'booked', img: imgFlat}
                ]
                }, 
                {name: 'Г', img: imgBlock, id: 4,
                rooms:  [
                  {num: 1, state: 'free', img: imgFlat},
                  {num: 2, state: 'sold', img: imgFlat},
                  {num: 3, state: 'discuss', img: imgFlat},
                  {num: 4, state: 'booked', img: imgFlat}
                ]
                }, 
                {name: 'Д', img: imgBlock, id: 5,
                rooms:  [
                  {num: 1, state: 'free', img: imgFlat},
                  {num: 2, state: 'sold', img: imgFlat},
                  {num: 3, state: 'discuss', img: imgFlat},
                  {num: 4, state: 'booked', img: imgFlat}
                ]
                }, 
                {name: 'Е', img: imgBlock, id: 6,
                rooms:  [
                  {num: 1, state: 'free', img: imgFlat},
                  {num: 2, state: 'sold', img: imgFlat},
                  {num: 3, state: 'discuss', img: imgFlat},
                  {num: 4, state: 'booked', img: imgFlat}
                ]
                }],
            }
          ]
          
    },
    reducers: {

    }
})

export const {} = izmirSlice.actions;

export default izmirSlice.reducer;