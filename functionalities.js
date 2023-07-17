/* function yearcal(brith_year , brith_date, brith_month) {
    let date= new Date() ;
    let todayDate = date.getDate() ;
    let present_date = date.getDate();
    let present_month = date.getMonth()+1;
    let count_date = 0;
   /*  let nothing = 0 ; */
    /* let Year = date.getFullYear() - brith_year;
    if(brith_month <= present_month && brith_date <= present_date)  {
        if (brith_date==present_date && brith_month == present_month ) {
                
                present_date = 0 ;
            return[Year,present_date ]
        } */

        /* else if(brith_month < present_month) {
            Year++;
            return[Year, present_date]

        } 
        else if(brith_month == present_month && brith_date < present_date) {
            let differ = present_date - brith_date;
            
            return[Year,differ] ;
        }
      
        else {

            Year;
            return[Year]
        }
        
    }
    else {
        Year--;
        return [Year , present_date] ;
    }

}


function monthcount(brith_month , brith_date ) {
    let newDate = new Date() ;
    let present_month = newDate.getMonth()+1 ;
    let present_date = newDate.getDate() ;
    let count_month = null ;
    let new_count_month = 0 ;
   if (brith_month <= present_month) {
    if(brith_month==present_month ) {
        if(brith_date==present_date) {
            return new_count_month ;
        }
        else if(present_date < brith_date) {
            new_count_month = 12 ;
            return new_count_month ;
        }
        else {
            return new_count_month ;
        } 
        
    }
  
    else {
        let sub_count = present_month -brith_month;
        return sub_count ;
    }
      
   }
   else {
        for (i = brith_month ; i< 12 ; i++) {
            count_month++ ;
            
        }
        let new_count_month =  count_month + present_month ;
        return new_count_month ;
    }
    
   }

 */

   function agecalculator(birth_date,birth_Month,birth_year) {

        const birthdate = birth_date ;
        const birthmonth = birth_Month ;
        const birthyear = birth_year ;
        let newDate = new Date()
        const presentdate = newDate.getDate() ;
        const presentmonth = newDate.getMonth()+1;
        const presentyear = newDate.getFullYear();
        let display_Years = document.getElementById('years') ;
        let display_month = document.getElementById('months') ;
        let display_days = document.getElementById('days') ;
        let maxmonth = 12 ;
        let tempvar = 0 ;
        let tempMonths = 0;
        let  tempYears = 0;
        let tempDays=0;
        console.log(presentdate , presentmonth,presentyear);
        console.log( birthdate , birthmonth,birthyear);
        if(birthyear <= presentyear) {
            if(birthmonth <= presentmonth) {
                    if( birthmonth===presentmonth) {
                        if(birthdate===presentdate){
                            /* console.log('its your brithday'); */
                            tempDays=0;
                            tempMonths=0;
                            tempYears = presentyear - birthyear ;
                            display_Years.innerText = tempYears ;
                            display_days.innerText = tempDays ;
                            display_month.innerText = tempMonths; 
                        }
                        if(birthdate > presentdate) {
                            /* console.log('your brith is yet to come'); */
                            
                            for(i = birthmonth ; i< maxmonth ; i++) {
                                tempvar++ ; 
                            }
                            tempYears = presentyear - birthyear ;
                            tempMonths= tempvar + presentmonth;
                            tempDays = presentdate ;
                            display_Years.innerText = tempYears - 1 ;
                            display_days.innerText = tempDays ;
                            display_month.innerText = tempMonths; 
                        }
                        if(birthdate < presentdate) {
                            /* console.log( 'your brithday is passed',presentyear-inputyear); */
                            tempYears = presentyear - birthyear ;
                            tempMonths= 0;
                            tempDays = presentdate ;
                            display_Years.innerText = tempYears ;
                            display_days.innerText = presentdate - birthdate;
                            display_month.innerText = tempMonths;
                            
                        }
                    }  

                    if(birthmonth < presentmonth) {
                            tempYears = presentyear - birthyear ;
                            tempMonths = presentmonth - birthmonth ;
                            display_Years.innerText = tempYears ;
                            display_month.innerText = tempMonths;
                            display_days.innerText = presentdate ;
                    }
                }
            if(birthmonth > presentmonth){
                for(i = birthmonth ; i< maxmonth ; i++) {
                    tempvar++ ; 
                }
                let monthCount = tempvar + presentmonth ;
                let yearCount = presentyear - birthyear - 1 ;
                /* console.log('its been ',monthCount + ' months since your last brithday ');
                console.log('your ' + yearCount + ' old')
                } */
                display_Years.innerText = yearCount ;
                display_month.innerText = monthCount ;
                display_days.innertext =  presentdate ;
            }
            
        }

    }

   



function render() {
    let date = new Date();
    let present_month = date.getMonth()+1 ;
    const birth_year = Number( document.getElementById('Year').value );
    const birth_Month = Number(document.getElementById('Month').value );
    const birth_date= Number(document.getElementById('Day').value) ;
    if(yearidentifier()==true && monthidentifier()==true && dateidentifier()==true && isemty()==false){
        /* et tempYear =yearcal(brith_year , brith_date,brith_Month) ;
        let tempMonth =monthcount(brith_Month,brith_date) ;
        display_Years.innerHTML = tempYear[0] ;
        display_month.innerHTML = tempMonth ;
        display_days.innerHTML = tempYear[1] ; */
        agecalculator(birth_date,birth_Month,birth_year);
    }
}




const yearidentifier = () => {
    let year = new Date().getFullYear();
    const inputyear = document.querySelector('#Year');

    if(inputyear.value <= year) {
        inputyear.style.borderColor='lightgray'
        return true ;
    }
    else {
        inputyear.style.borderColor = 'red';
        inputyear.value='';
    }
}

const monthidentifier = () =>{
    let maxmonths = 12 ;
    const inputmonth = document.querySelector('#Month') ;
    if(inputmonth.value <= maxmonths) {
        inputmonth.style.borderColor='lightgray'
        return true
    }
    else {
        inputmonth.style.borderColor='red';
        inputmonth.value = '';
    }
}
const dateidentifier = () =>{
    let maxdate = 31 ;
    const inputdate = document.querySelector('#Day') ;
    if(inputdate.value <= maxdate) {
        inputdate.style.borderColor='lightgray';
        return true;
    }
    else {
        inputdate.style.borderColor='red';
        inputdate.value = '';
    }
}

function isemty(){
    const brith_year = ( document.getElementById('Year'));
    const brith_Month = (document.getElementById('Month'));
    const brith_date= (document.getElementById('Day')) ;
    if(brith_Month.value=='' && brith_date.value=='' && brith_year.value==''){
        brith_date.style.borderColor = 'red';
        brith_Month.style.borderColor = 'red';
        brith_year.style.borderColor = 'red';
        return true
    }
    if(brith_date.value==''){
        /* alert('brith date is not fulled'); */
        brith_date.style.borderColor = 'red';
        return true ;
    }
    if(brith_Month.value==''){
        /* alert('brith month is not fulled'); */
        brith_Month.style.borderColor = 'red';
        return true ;
    }
    if(brith_year.value==''){
        /* alert('brith year is not fulled'); */
        brith_year.style.borderColor = 'red';
        return true ;
    }
    else {
        brith_date.style.borderColor = 'lightgray';
        brith_Month.style.borderColor = 'lightgray';
        brith_year.style.borderColor = 'lightgray';
        return false ;
    }
   /*  if(brith_date.value==''){
        alert('brith date is not fulled');
        return false ;
    } */
}

addEventListener('keydown',function(event){
        if(event.keyCode==13) {
            render();
        }
}) 

/* agecalculator(); */



