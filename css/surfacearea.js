function surfaceArea(A) {
    let rows = A.length;
    let cols = A[0].length;
    
    let topa=0;
    let lfa=0;
    let rga=0;
    let bota=0;
    
    let i = 0;
    let j = 0;
    let area=0;
    
    let top=0;
    let lf=0;
    let rg=0;
    let bot=0;
    let act=0;
    
    let row0=array(rows,0);
    
    A.unshift(row0;)
    for(let u=1;u<rows;u++)
        {
            A[u].unshift(0);
            A[u].push(0);
        }
    A.push(row0);
    
    for(i = 0; i<rows; i++)
    {   
      for(j = 0; j<cols; j++)
        {   
            act=A[i][j];
            top=A[i-1][j];
            lf=A[i][j-1];
            rg=A[i][j+1];
            bot=A[i+1][j];

            topa=act-top>0 ? act-top:0;   
            lfa= act-lf >0 ? act-lf:0;
            rga= act-rg >0 ? act-rg:0;
            bota= act-bot >0 ? act-bot:0;
            area+=2+topa+lfa+rga+bota;
        }  
    }
    
    return area;

}