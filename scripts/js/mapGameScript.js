class mapGameScript{
    generateLinesSquares(){
        let lineH = [];
        let lineV = [];
        let squares = {};
        for(let i = 1; i < 10; i++){
            for(let j = 0; j < 10; j++){
                
                let jotaPlus = j+1 < 10 ? j+1 : 0;
                let hUnitLine = (jotaPlus).toString()+i.toString()+'t-'+j.toString()+i.toString()+'b';
                let vUnitLine = i.toString()+(jotaPlus).toString()+'l-'+i.toString()+j.toString()+'r';
                if(j > 0){
                    let name = i.toString()+j.toString();
                    squares[name] = [];
                }
                lineH.push(hUnitLine);
                lineV.push(vUnitLine);
            }
        }
        Object.keys(squares).forEach(sqr =>{
            squares[sqr] = lineH.filter(lin =>{ return lin.includes(sqr)});
            squares[sqr] = [...squares[sqr],...lineV.filter(lin =>{ return lin.includes(sqr)})];
        });
        console.log('lineH: ',lineH);
        console.log('lineV: ',lineV);
        console.log('squares: ',JSON.stringify({squares:squares,lineH:lineH,lineV:lineV}));
        this.lineH = lineH;
        this.lineV = lineV;
        this.squares = squares;
    }

}