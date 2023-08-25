import { createSlice } from "@reduxjs/toolkit";

import Ainside from '../assets/Ains.svg'
import imgBlock from '../assets/A-block.svg'
import imgDev from '../assets/dev.svg'
import imgDevOutline from '../assets/obshidom.svg'

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
              imgOut: imgDevOutline,
              id: 1,
              blocks: [
                {name: 'А', id: 1,
                floors:[{
                  num: 1,
                  img: Ainside,
                  imgOut: imgBlock,
                  rooms:  [
                    {num: 1, state: 'free', img: imgBlock},
                    {num: 2, state: 'sold', img: imgBlock},
                    {num: 3, state: 'discuss', img: imgBlock},
                    {num: 4, state: 'booked', img: imgBlock}
                  ]
                },
                {
                  num: 2,
                  img: Ainside,
                  imgOut: imgBlock,
                  rooms:  [
                    {num: 1, state: 'free', img: imgBlock},
                    {num: 2, state: 'sold', img: imgBlock},
                    {num: 3, state: 'discuss', img: imgBlock},
                    {num: 4, state: 'booked', img: imgBlock}
                  ]
                },
                {
                  num: 3,
                  img: Ainside,
                  imgOut: imgBlock,
                  rooms:  [
                    {num: 1, state: 'free', img: imgBlock},
                    {num: 2, state: 'sold', img: imgBlock},
                    {num: 3, state: 'discuss', img: imgBlock},
                    {num: 4, state: 'booked', img: imgBlock}
                  ]
                },
                {
                  num: 4,
                  img: Ainside,
                  imgOut: imgBlock,
                  rooms:  [
                    {num: 1, state: 'free', img: imgBlock},
                    {num: 2, state: 'sold', img: imgBlock},
                    {num: 3, state: 'discuss', img: imgBlock},
                    {num: 4, state: 'booked', img: imgBlock}
                  ]
                }  
               ]
                }, 
                {name: 'B', id: 2, 
                  floors:[{
                    num: 1,
                    img: Ainside,
                    imgOut: imgBlock,
                    rooms:  [
                      {num: 1, state: 'free', img: imgBlock},
                      {num: 2, state: 'sold', img: imgBlock},
                      {num: 3, state: 'discuss', img: imgBlock},
                      {num: 4, state: 'booked', img: imgBlock}
                    ]
                  },
                  {
                    num: 2,
                    img: Ainside,
                    imgOut: imgBlock,
                    rooms:  [
                      {num: 1, state: 'free', img: imgBlock},
                      {num: 2, state: 'sold', img: imgBlock},
                      {num: 3, state: 'discuss', img: imgBlock},
                      {num: 4, state: 'booked', img: imgBlock}
                    ]
                  },
                  {
                    num: 3,
                    img: Ainside,
                    imgOut: imgBlock,
                    rooms:  [
                      {num: 1, state: 'free', img: imgBlock},
                      {num: 2, state: 'sold', img: imgBlock},
                      {num: 3, state: 'discuss', img: imgBlock},
                      {num: 4, state: 'booked', img: imgBlock}
                    ]
                  },
                  {
                    num: 4,
                    img: Ainside,
                    imgOut: imgBlock,
                    rooms:  [
                      {num: 1, state: 'free', img: imgBlock},
                      {num: 2, state: 'sold', img: imgBlock},
                      {num: 3, state: 'discuss', img: imgBlock},
                      {num: 4, state: 'booked', img: imgBlock}
                    ]
                  }  
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