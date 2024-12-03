
function grade(score){
  
    if(score >=90 )
    {
      return 'you got an A';
    }
    else if(score >= 80)
    {
      return 'you got a B';
    }
    else if(score >= 70)
    {
      return 'you got a C';
    }
    else if(score >= 60)
    {
      return 'You got a D';
    }
    else
    {
      return 'you got a F';
    }
    
}

console.log(grade(80));  //print  you got B

