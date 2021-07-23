function Subsequence() {
    this.main = function(n){
        let result = "1";
        console.log(result);
        for(let i = 0; i < n - 1; i++){
            result = next_num(result);
            console.log(result);
        }
    };
    next_num = function(num){
        let result = "";
        let count = 1;
        // пробегаемся по предыдущему числу
        for (let i = 0; i < num.length; i++){
            // если дошли до конца добавляем count и символ
            if (i == num.length - 1){
                result = result + count + num.charAt(i);
                
            }
            // иначе проверяем следующее числа
            else {  
                    // если равно считаем количество дальше
                    if(num.charAt(i) == num.charAt(i + 1)){
                        count ++;
                    }
                    // иначе записываем результат и продолжаем считать следующие цифры
                    else {
                        result = result + count + num.charAt(i);
                        count = 1;
                    }
                }
        }
        return result; 
    };
}

let obj = new Subsequence();
obj.main(10);
