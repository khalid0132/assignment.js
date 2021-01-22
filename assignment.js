//Find out the distance from kilometer to meter

function kilometerToMeter(km){
    if ( km < 0 ){
        console.log("Invalid distance");   // if we put negative distance, then output will show "Invalid distance" 
    }
    else{
        var meter = km * 1000;             // We know that 1km = 1000m. 
        return meter;
    }
}

var result = kilometerToMeter(3);
console.log(result);



// For budget calculator where we can get how much money to need to how many elements

function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
 
     /**We have used the quantity of all elements from 0. If we wanna buy only phone and laptop then have to pass into the parameter (0, 1, 1)// Output: 0+100+500=600
            we may use || instead of && but in that case we may get negative (-) budget.*/ 
        if (watch >= 0 && phone >= 0 && laptop >= 0){ 
            var budgetForWatch = watch * watchPrice; // quantity X price 
            var budgetForPhone = phone * phonePrice;
            var budgetForLaptop = laptop * laptopPrice;
            totalBudget = budgetForWatch + budgetForPhone + budgetForLaptop; // Total budget by adding all (quantity * price)
            return totalBudget; // When we put the parameters starting 0, we'll get output by console.log
        }
        else{
            console.log('Invalid budget'); // if we put wrongly the quantity of watch or phone or laptop is -1, then output will be invalid 
        }
    
}

var result = budgetCalculator(1, 1, 1);
console.log(result);



// We can find the Scandic hotel total cost in Sweden by using the following function, just need to put how many nights to stay.

function hotelCost(night){
    for(var i = 1; i <= night; i++){
        if ( night <= 10 ){
            cost = night * 100; // Hotel Cost is (quantity of night X 100/night)
            return cost;        // if we put 4 nights, output will be (4 X 100) = 400
        }
        else if ( night <= 20 ){
            var firstTenNightCost = 10 * 100; //Hotel cost 100/night until 10 nights
            var remainingNight = night - 10; // Remainging = night -10, because we do not know how many days customer wants to stay
            var secondTenNightCost =  remainingNight * 80; // sencondTenNight hotelCost is (80 X quantity of night)
            
            cost = firstTenNightCost + secondTenNightCost; // Hotel cost until 20 days
            return cost;
        }
        else{
            var firstTenNightCost = 10 * 100;
            var secondTenNightCost = 10 * 80;
            var remainingUnlimitedNight = night - 20;
            var remainingUnlimitedNightCost = remainingUnlimitedNight * 50; // After 20 days, everynight cost is (50 X quantity of night)
            
            totalHotelCost = firstTenNightCost + secondTenNightCost + remainingUnlimitedNightCost; // Total Hotel Cost until unlimited days 
        }
        return totalHotelCost;

    }

}

var result = hotelCost(12);
console.log(result);



// Following function shows how can we identify that who occupied the largest name

function megaFriend(friendName){ 
    var longestString = '';                                          //Assume that longest is an empty string
    for (var i = 0; i < friendName.length; i++){                     // Using for loop untill input length is less than index value
        var currentItem = friendName[i];                             //Put the index value into a new item and compare after that 
        if(currentItem.length > longestString.length ){
            longestString = friendName[i];                           // Put the index value inside the longestString and return it to get expected output
        }
    }
    return longestString;
}

var megaName = megaFriend(["Patrik Hamberg", "Erik Karlsson", "Ludvig Ericsson", "Adam Swedenberg", "Toomi Joona"]);
console.log(megaName);
