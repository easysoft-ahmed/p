
export let handleOnlyDate = (dateStr="")=>{    
    return dateStr.split("T")[0]
}
export let unique  = () => "id" + Math.random().toString(16).slice(2);

export let regxMatchFilterTable = (value)=>new RegExp(value, "gi")