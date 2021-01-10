let first = document.getElementById('first'),
    second = document.getElementById('second'),
    third = document.getElementById('third');

let array = [first, second, third];

for (let i=0; i<array.length; i++) {
    let item = array[i],
        itemPrev = array[i-1],
        itemNext = array[i+1];

    item.firstElementChild.style.padding = (item.scrollHeight * 2) +"px 0";
    
    item.scrollTop = (item.scrollHeight / 2.5) + (item.offsetHeight * (i))
    let top = item.scrollTop;


    item.addEventListener('mouseenter', function(){
        item.addEventListener('scroll', function() {

            // console.log('worked for ' + item.id)
            let newScroll = item.scrollTop;
    
            if(newScroll < top) {
    
                if(itemNext != undefined) {
                    itemNext.scrollTop = itemNext.scrollTop - (top - newScroll);
                } else if (itemNext != undefined) {
                    item.style.overflow = 'hidden';
                };
    
                if(itemPrev != undefined) {
                    itemPrev.scrollTop = itemPrev.scrollTop - (top - newScroll);
                }else if (itemPrev != undefined) {
                    item.style.overflowY = 'hidden';
                };
    
                
                
            } else if (newScroll > top) {
                if(itemNext != undefined) {
                    itemNext.scrollTop = itemNext.scrollTop - (top - newScroll);
                };
    
                if(itemPrev != undefined) {
                    itemPrev.scrollTop = itemPrev.scrollTop - (top - newScroll);
                };
            }

            top = newScroll;
        })
    })
}