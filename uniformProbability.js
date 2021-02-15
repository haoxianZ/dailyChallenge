// Given a stream of elements too large to 
// store in memory, pick a random element 
// from the stream with uniform probability.

//simple but slow O(N)
const s = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const r= new Array(10).fill(0);
function reservoirSampleSlow(s,r){
    //fill the reservoir
    const k =r.length;
    for(let i =0; i<k;i++){
        r[i]=s[i]
    }
    //replace item in reservoir with decrease probability
    const n=s.length;
    for(let i=k;i<n;i++){
        //returning a random integer
        j=Math.floor(Math.random()*(i-1));
        if(j<k){
            r[j]=s[i]
        }
    }
    return r
}
console.log(s)
// console.log(reservoirSampleSlow(s,r))
//optimal solution O(k(1+log(n/k)))
function reservoirSampleFast(s,r){
    //fill the reservoir
    const k =r.length;
    for(let i =0; i<k;i++){
        r[i]=s[i]
    }
    const n=s.length;
    let W=Math.exp(Math.log(Math.random)/k);
    let i=0;
    while (i<n){
        i=i+Math.floor(Math.log(Math.random())/Math.log(1-W))+1;
        if(i<n){
            r[Math.floor(Math.random()*(i-1))]=s[i];
            w=w*Math.exp(Math.log(Math.random)/k)
        }
    }
    return r
}
console.log(reservoirSampleFast(s,r))
