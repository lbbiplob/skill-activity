const myDb =(e)=>{


    localStorage.setItem('Break-time', JSON.stringify(e))

   
}

 const getData=() =>{
    const storedDb =  localStorage.getItem('Break-time');
    if(storedDb){
        const data = JSON.parse(storedDb);
        return data
    }
    
 } 

export{
    myDb ,
    getData
}