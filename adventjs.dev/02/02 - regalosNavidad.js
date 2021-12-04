export default function listGifts(letter) {
    let clearedLetter = letter.split(" ").filter(x => x !== '').filter(x => !x.startsWith("_"));
    
    let giftList = {};
    clearedLetter.forEach(x => {
        giftList[x] = giftList[x] ? giftList[x] + 1 : 1;

    });
    return giftList;
}