import { createSlice } from "@reduxjs/toolkit";

import imgFlat from '../assets/flat.png'
import imgBlock from '../assets/A-block.svg'
import imgDev from '../assets/dev.svg'

const izmirSlice = createSlice({
    name: 'izmir',
    initialState: {
        data: [
            {
              name: 'Xonsaroy',
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
          
            },
            {
              name: 'NeonBuild',
              img: imgDev,
              id: 2,
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