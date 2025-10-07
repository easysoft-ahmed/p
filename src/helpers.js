export let handleOnlyDate = (dateStr="")=>{
    console.log(dateStr);
    
    return dateStr.split("T")[0]
}
export let unique  = () => "id" + Math.random().toString(16).slice(2);
