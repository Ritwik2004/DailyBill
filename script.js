let submit=document.getElementById("submit");
submit.disabled=true;
let jan=document.getElementById("jan-arr");
let feb=document.getElementById("feb-arr");
let mar=document.getElementById("mar-arr");
let apr=document.getElementById("apr-arr");
let may=document.getElementById("may-arr");
let jun=document.getElementById("jun-arr");
let jul=document.getElementById("jul-arr");
let aug=document.getElementById("aug-arr");
let sep=document.getElementById("sep-arr");
let oct=document.getElementById("oct-arr");
let nov=document.getElementById("nov-arr");
let dec=document.getElementById("dec-arr");
let D=new Date();
let munth=(D.getMonth())+1;
if(munth==1)
{
    jan.innerHTML="←";
}
else if(munth==2)
{
    feb.innerHTML="←";
}
else if(munth==3)
{
    mar.innerHTML="←";
}
else if(munth==4)
{
    apr.innerHTML="←";
}
else if(munth==5)
{
    may.innerHTML="←";
}
else if(munth==6)
{
    jun.innerHTML="←";
}
else if(munth==7)
{
    jul.innerHTML="←";
}
else if(munth==8)
{
    aug.innerHTML="←";
}
else if(munth==9)
{
    sep.innerHTML="←";
}
else if(munth==10)
{
    oct.innerHTML="←";
}
else if(munth==11)
{
    nov.innerHTML="←";
}
else if(munth==12)
{
    dec.innerHTML="←";
}
// function todayDate(){
//     let t=new Date();
//     let today_date=document.getElementById("today-date");
//     today_date.value=t.getFullYear()+"-"+t.getMonth()+"-"+t.getFullYear();
// }
setInterval(() => {
    let l_price=document.getElementById("L-price").value;
    let s_price=document.getElementById("S-price").value;
    let d_price=document.getElementById("D-price").value;
    let t_date=document.getElementById("t-date");
    let t_time=document.getElementById("t-time");
    let today_date=document.getElementById("today-date");
    let D=new Date();
    let date=D.getDate();
    let munth=(D.getMonth())+1;
    let year=D.getFullYear();
    let hour=((D.getHours()>12)?((D.getHours())-12):D.getHours());
    let mint=D.getMinutes();
    let sec=D.getSeconds();
    let d=((date<10)?"0":"")+date;
    let m=((munth<10)?"0":"")+munth;
    hour=((hour<10)?"0":"")+hour;
    mint=((mint<10)?"0":"")+mint;
    sec=((sec<10)?"0":"")+sec;
    t_date.innerHTML=d+"."+m+"."+year;
    t_time.innerHTML=sec+"."+mint+"."+hour;
    today_date.value=d+"."+m+"."+year;
    if(l_price=="" || s_price=="" || d_price=="")
    {
        submit.disabled=true;
    }
    else{
        submit.disabled=false;
    }
    // munthlysum();
    // console.log(l_price)
}, 1000);

function details()
{
    dailysum();
    weeklysum();
    munthlysum();
}

//show daly cost and weekly cost from localstorage...

let t_cost=document.getElementById("t-cost");
let w_cost=document.getElementById("w-cost");
let t_sum=0;
if(localStorage.getItem("ts")==null)
{
    t_cost.value="00";
}
else{
    t_cost.value=localStorage.getItem("ts");
}

let w_sum=0;
let ws=0;
if(localStorage.getItem("ws")==null)
{
    w_cost.value="00";
    ws="0";
}
else{
    w_cost.value=localStorage.getItem("ws");
    ws=localStorage.getItem("ws");
}
// calculate daily cost...

function dailysum()
{
    let l_price=document.getElementById("L-price").valueAsNumber;
    let s_price=document.getElementById("S-price").valueAsNumber;
    let d_price=document.getElementById("D-price").valueAsNumber;
    let o_price=document.getElementById("O-price").valueAsNumber;
    t_sum=l_price+s_price+d_price+o_price;
    console.log(l_price+" "+s_price+" "+d_price+" "+o_price);
    localStorage.setItem("ts",t_sum);
    t_cost.value=t_sum;
}

//calculate weekly cost...

function weeklysum()
{
    w_sum=t_sum+parseInt(ws);
    localStorage.setItem("ws",w_sum);
    w_cost.value=w_sum;
    // console.log("today cost : "+t_sum+" Type : "+typeof(t_sum))
    // console.log("weekly cost : "+localStorage.getItem("ws")+" Type : "+typeof(localStorage.getItem("ws")))
}

//calculate munthly

let jan_cost=document.getElementById("jan-cost").valueAsNumber;
let feb_cost=document.getElementById("feb-cost").valueAsNumber;
let mar_cost=document.getElementById("mar-cost").valueAsNumber;
let apr_cost=document.getElementById("apr-cost").valueAsNumber;
let may_cost=document.getElementById("may-cost").valueAsNumber;
let jun_cost=document.getElementById("jun-cost");
let jul_cost=document.getElementById("jul-cost").valueAsNumber;
let aug_cost=document.getElementById("aug-cost").valueAsNumber;
let sep_cost=document.getElementById("sep-cost").valueAsNumber;
let oct_cost=document.getElementById("oct-cost").valueAsNumber;
let nov_cost=document.getElementById("nov-cost").valueAsNumber;
let dec_cost=document.getElementById("dec-cost").valueAsNumber;

function munthlysum()
{
    if(munth==1)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("jan_s")==null)
        {
            jan_cost.value="00";
            ms="0";
        }
        else{
            jan_cost.value=localStorage.getItem("jan_s");
            ms=localStorage.getItem("jan_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("jan_s",m_sum);
        jan_cost.value=m_sum;
    }
    else if(munth==2)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("feb_s")==null)
        {
            feb_cost.value="00";
            ms="0";
        }
        else{
            feb_cost.value=localStorage.getItem("feb_s");
            ms=localStorage.getItem("feb_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("feb_s",m_sum);
        feb_cost.value=m_sum;
    }
    else if(munth==3)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("mar_s")==null)
        {
            mar_cost.value="00";
            ms="0";
        }
        else{
            mar_cost.value=localStorage.getItem("mar_s");
            ms=localStorage.getItem("mar_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("jan_s",m_sum);
        mar_cost.value=m_sum;
    }
    else if(munth==4)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("apr_s")==null)
        {
            apr_cost.value="00";
            ms="0";
        }
        else{
            apr_cost.value=localStorage.getItem("apr_s");
            ms=localStorage.getItem("apr_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("apr_s",m_sum);
        apr_cost.value=m_sum;
    }
    else if(munth==5)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("may_s")==null)
        {
            // may_cost.value="00";
            ms="0";
        }
        else{
            // may_cost.value=localStorage.getItem("may_s");
            ms=localStorage.getItem("may_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("may_s",m_sum);
        may_cost.innerHTML=m_sum;
        // console.log(localStorage.getItem("may_s"))
    }
    else if(munth==6)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("jun_s")==null)
        {
            jun_cost.value="00";
            ms="0";
        }
        else{
            jun_cost.value=localStorage.getItem("jun_s");
            ms=localStorage.getItem("jun_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("jun_s",m_sum);
        let m=localStorage.getItem("jun_s");
        jun_cost.value=parseInt(m);
    }
    else if(munth==7)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("jul_s")==null)
        {
            jul_cost.value="00";
            ms="0";
        }
        else{
            jul_cost.value=localStorage.getItem("jul_s");
            ms=localStorage.getItem("jul_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("jul_s",m_sum);
        jul_cost.value=m_sum;
    }
    else if(munth==8)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("aug_s")==null)
        {
            aug_cost.value="00";
            ms="0";
        }
        else{
            aug_cost.value=localStorage.getItem("aug_s");
            ms=localStorage.getItem("aug_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("aug_s",m_sum);
        aug_cost.value=m_sum;
    }
    else if(munth==9)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("sep_s")==null)
        {
            sep_cost.value="00";
            ms="0";
        }
        else{
            jan_cost.value=localStorage.getItem("sep_s");
            ms=localStorage.getItem("sep_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("sep_s",m_sum);
        sep_cost.value=m_sum;
    }
    else if(munth==10)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("oct_s")==null)
        {
            oct_cost.value="00";
            ms="0";
        }
        else{
            oct_cost.value=localStorage.getItem("oct_s");
            ms=localStorage.getItem("oct_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("oct_s",m_sum);
        oct_cost.value=m_sum;
    }
    else if(munth==11)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("nov_s")==null)
        {
            nov_cost.value="00";
            ms="0";
        }
        else{
            nov_cost.value=localStorage.getItem("nov_s");
            ms=localStorage.getItem("nov_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("nov_s",m_sum);
        nov_cost.value=m_sum;
    }
    else if(munth==12)
    {
        let m_sum=0;
        let ms=0;
        if(localStorage.getItem("dec_s")==null)
        {
            dec_cost.value="00";
            ms="0";
        }
        else{
            dec_cost.value=localStorage.getItem("dec_s");
            ms=localStorage.getItem("dec_s");
        }
        m_sum=t_sum+parseInt(ms);
        localStorage.setItem("dec_s",m_sum);
        dec_cost.value=m_sum;
    }
}
munthlysum();
