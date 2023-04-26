let str = readLine("Enter any string = ");
console.log(swap(Swetha));
function swap(str){
    let s = '';
    for(int i=0; i<str.length(); i++){
        if(str[i] == str[i].toLoweCase()){
            s+=str[i].toUpperCase();
        }
        else{
            s+=str[i].toLoweCase();
        }
    }
    return s;
}
