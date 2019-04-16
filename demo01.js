function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("long-time-msg"),3000);
    })
}

async function test(){
    const v = await takeLongTime();
    console.log(v);
}

test();