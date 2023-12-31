import React, { useState } from "react";

const Home = () =>{

    const [listA,setListA] = useState([])
    const [listB,setListB] = useState([])
    const [lists,setLists] = useState([])
    const [uniqueLists,setUniqueLists] = useState([])
    const [commonLists,setCommonLists] = useState([])
    const [modifiedListA,setModifiedListA] = useState([])
    const [modifiedListB,setModifiedListB] = useState([])
    const [compute,setCompute] = useState(false)

    const updateCompute = () => {
        setCompute(true)
        updateLists()
        
        updateCommonItem()
        updateUniqueLists()
        updatedListA()
        updatedListB()
    }

    const updateListA = (e) => {
        let str = e.target.value.toLowerCase().split(/[\n " "]+/)
        setListA(str)
        
    }

    const updateListB = (e) => {
        let str = e.target.value.toLowerCase().split(/[\n " "]+/)
        setListB(str)
        //console.log("LISTB:",listB,listB.length)
    }

    const updateLists = () => {
        let list = [...listA,...listB]
        setLists(list)
        //console.log('LISTS:',lists)
    }




    const updateCommonItem = () => {
        let commonItemList = listA.filter(item => listB.indexOf(item) !== -1 )
        setCommonLists(commonItemList)
    }

    const updateUniqueLists = () => {
        let uniqueListA = listA.filter(item => listB.indexOf(item) === -1)
        let uniqueListB = listB.filter(item => listA.indexOf(item) === -1)
        let commonItemList = listA.filter(item => listB.indexOf(item) !== -1 )
        let uniquelists = [...uniqueListA,...uniqueListB,...commonItemList]
        setUniqueLists(uniquelists)
       // console.log(uniqueLists)
    }

    const updatedListA = () => {
        let updatedListA = listA.filter(item => listB.indexOf(item) === -1)
        setModifiedListA(updatedListA)
    }

    const updatedListB = () => {
        let updatedListB = listB.filter(item => listA.indexOf(item) === -1)
        setModifiedListB(updatedListB)       
    }
    return(
        <div className="w-full h-fit min-h-screen bg-[#f5f5f5] pt-10" >
            <div className="TEXTBOXESBUTTON flex flex-col justify-center mb-10 " >
                <div className="TEXTBOXES flex justify-around pb-10" >
                    <div className="TEXTA bg-red-300 w-[40%] h-fit p-2 rounded-md shadow-2xl" >
                        <label className="w-full" id="listA" for="textboxA" >List A</label>
                        <textarea className="w-full h-28 bg-red-200 border-none"  name="textboxA" placeholder="Please enter list A values" onChange={updateListA} />
                    </div>
                    <div className="TEXTB bg-blue-300 w-[40%] h-fit p-2 rounded-md shadow-2xl" >
                        <label className="" id="listB" for="textboxB" >List B</label>
                        <textarea className="w-full h-28 bg-blue-200" name="textboxB" placeholder="Please enter list B values" onChange={updateListB} />
                    </div>
                </div>
                <div className="m-auto" ><button className="px-2 w-fit bg-red-400 rounded-sm " onClick={updateCompute} >compute</button></div>
            </div>
            
        
            <div className="w-full mb-10" >
                {
                    compute && <div className="DISPLAY flex gap-5 justify-around flex-wrap w-full " >
                
                    <div className="DISPLAYLISTA w-[40%]  min-w-fit bg-red-300 flex flex-col justify-center p-2 rounded-md max-[480px]:w-[90%] " >
                        <h1 className="font-semibold mb-2" >ListA:</h1>
                        <ul>
                            {
                                modifiedListA.map((list,index)=>{
                                    return <li className="ml-1" key={index} >{list} </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="DISPLAYLISTB min-w-fit w-[40%] bg-red-300 flex flex-col justify-center p-2  rounded-md max-[480px]:w-[90%]" >
                        <h1 className="font-semibold mb-2" >ListB:</h1>    
                        <ul>
                            {
                                modifiedListB.map((list,index)=>{
                                    return <li className="ml-1" key={index} >{list} </li>
                                })
                            }
                        </ul>
                    </div>
                    
                    <div className="UNIQUELISTS min-w-fit w-[40%] bg-red-300 flex flex-col justify-center p-2 rounded-md max-[480px]:w-[90%]" >
                        <h1 className="font-semibold mb-2" >Unique Items :</h1>
                        <ul>
                        {
                            uniqueLists.map((list,index)=>{
                                return <li className="ml-1" key={index} >{list} </li>
                            })
                        }
                        </ul>
                    </div>

                    <div className="COMMONLISTS min-w-fit w-[40%] bg-red-300 flex flex-col justify-center p-2 rounded-md max-[480px]:w-[90%]" >
                        <h1 className="font-semibold mb-2" >Common Items :</h1>
                        <ul>
                        {
                            commonLists.map((list,index)=>{
                                return <li className="ml-1" key={index} >{list} </li>
                            })
                        }
                        </ul>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Home