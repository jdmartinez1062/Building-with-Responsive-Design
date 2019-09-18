function gameOfThrones(s) {
    
     let holder=[];
    let matrix=[];
    let counter= 0;
    
    console.log(matrix);
    s=s.split("");
    s.sort();
    
    holder[0]=s[0];
    for (let i = 1 ; i < s.length; i++)
        {   
            
            if (holder[0]==s[i])
                {
                    holder.push(s[i]);
                    
                }
            else
                {
                    matrix.push(holder.slice(0,holder.length));
                    holder=[];
                    holder[0]=s[i];
                    
                }
        }
        matrix.push(holder.slice(0,holder.length));
    
    for(let i = 0 ; i < matrix.length; i++ )
        {
            if (matrix[i].length/2>Math.floor(matrix[i].length/2))
                {
                    counter++;
                }
            
        }
    if (counter==1)
        {
            if(s.length/2>Math.floor(s.length/2))
                {
                    return 'YES';
                }
            else
                {
                    return 'NO';
                }
        }
    else if(counter>1)
        {
            return 'NO';
        }
    else{
        return 'YES'
    }

}