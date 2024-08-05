export function isSrollDown(currenEvent: EventTarget & HTMLDivElement,maxDown:number){
    if (currenEvent.scrollHeight - (currenEvent.scrollTop + currenEvent.offsetHeight) <= maxDown){
        return true
    }
    return false
}