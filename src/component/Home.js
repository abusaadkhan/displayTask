import React, { useState } from "react";

const Home = () =>{

    const [listA,setListA] = useState([])
    const [listB,setListB] = useState([])
    const [lists,setLists] = useState([])
    const [uniqueLists,setUniqueLists] = useState([])
    const [compute,setCompute] = useState(false)

    const updateCompute = () => {
        setCompute(!compute)
        updateLists()
        updateUniqueLists()
        console.log(compute)
    }

    const updateListA = (e) => {
        let str = e.target.value.toLowerCase().split(' ')
        setListA(str)
        console.log("LISTA:",listA,listA.length)
    }

    const updateListB = (e) => {
        let str = e.target.value.toLowerCase().split(' ')
        setListB(str)
        console.log("LISTB:",listB,listB.length)
    }

    const updateLists = () => {
        let list = [...listA,...listB]
        setLists(list)
        console.log('LISTS:',lists)
    }

    const updateUniqueLists = () => {
        let uniqueListA = listA.filter(item => listB.indexOf(item) === -1)
        let uniqueListB = listB.filter(item => listA.indexOf(item) === -1)
        let uniquelists = [...uniqueListA,...uniqueListB]
        setUniqueLists(uniquelists)
        console.log(uniqueLists)
    }



    return(
        <div className="w-full h-fit min-h-screen bg-[#f5f5f5]" >
            <div className="TEXTBOXES" >
                <div className="TEXTA bg-white w-full h-24" >
                    <label className="w-full" id="listA" for="textboxA" >List A</label>
                    <textarea className="w-full h-20 bg-[#f5f5f5]"  name="textboxA" placeholder="Please enter list A values" onChange={updateListA} />
                </div>
                <div className="TEXTB" >
                    <label className="" id="listB" for="textboxB" >List B</label>
                    <textarea className="w-full h-20 bg-[#f5f5f5]" name="textboxB" placeholder="Please enter list B values" onChange={updateListB} />
                </div>
                <button className="px-2 bg-red-400 rounded-sm " onClick={updateCompute} >compute</button>
            </div>
            
        
            {
                compute && <div className="DISPLAY" >
            
                <div className="DISPLAYLISTA" >
                    <ul>
                       {
                           listA.map((list,index)=>{
                              return <li className="inline-block ml-1" key={index} >{list} </li>
                           })
                       }
                   </ul>
                </div>
                <div className="DISPLAYLISTB" >
                    <ul>
                       {
                           listB.map((list,index)=>{
                              return <li className="inline-block ml-1" key={index} >{list} </li>
                           })
                       }
                   </ul>
                </div>
                <div className="LISTS" >
                <ul>
                   {
                       lists.map((list,index)=>{
                          return <li className="inline-block ml-1" key={index} >{list} </li>
                       })
                   }
               </ul>
                </div>
                <div className="UNIQUELISTS" >
                <ul>
                   {
                       uniqueLists.map((list,index)=>{
                          return <li className="inline-block ml-1" key={index} >{list} </li>
                       })
                   }
               </ul>
                </div>
               </div>
            }
        </div>
    )
}

export default Home