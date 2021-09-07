let friends = ["Richard", "Resha", "Sofi", "Mel", "Nicole"]

for (i = 0; i < friends.length; i ++) {
    console.log(friends[i] + ":");
    for (count = 99; count >= 1; count--) {
        if (count == 2) {
            console.log("2 lines of code in the file, 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 more line of code in the file.")
        } else if (count == 1){
            console.log("1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.")
        } else {
            console.log(count + " lines of code in the file, " + count + " lines of code; " + friends[i]+ " strikes one out, clears it all out, " + (count - 1) + " lines of code in the file.")
            } 
    }
}
