class DataFilter{
    constructor(Object){
      this.arrayOfObject= Object.data;
      this.valueToSearch= Object.value;
      this.searchParameter= Object.searchparam != undefined ?Object.searchParameter:"all";      
    }
   

   Search(){
       var returnArray=[];
       var presentValue;
       const keynames=Object.keys(this.arrayOfObject[0]);

       //==========search item if no search parameter given
       if(this.searchParameter== "all"){
        //========search in each item 
        this.arrayOfObject.forEach(x=>{    
            //==========search all key for the item and check in each        
            keynames.forEach(y=>{
                presentValue=x[y].toString();
                //============add item to array if the value is found
                if(presentValue.includes(this.valueToSearch)){
                    //=========add item if there is no repeat
                    if(!returnArray.includes(x)){
                        returnArray.push(x);
                    }
                }                             
            })
        })

       }

       //==========search item search parameter is given
       else{
               
        const y=this.searchParameter;
        //========search in each item 
        this.arrayOfObject.forEach(x=>{  
            presentValue=x[y].toString();
            //====search in each item with the key
            if( presentValue.includes(this.valueToSearch)){
                //=========add item if there is no repeat
                if(!returnArray.includes(x)){
                    returnArray.push(x);
                }
            }                             
            
        })
       }

       return returnArray;      

    }
}
