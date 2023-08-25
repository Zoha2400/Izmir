import { createSlice } from "@reduxjs/toolkit";

import Ainside from '../assets/Ains.svg'
import imgBlock from '../assets/A-block.svg'
import imgDev from '../assets/dev.svg'
import imgDevOutline from '../assets/obshidom.svg'



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