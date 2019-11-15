(function main() {
    //matrix written as list of arrays where each array represents a column in the matrix
    const hammingCodeBook = [[1,0,0,0,1,0,0,0], [0,1,0,0,0,0,0,1], [0,0,1,0,0,0,1,1],
                             [0,0,0,1,0,1,0,1], [1,1,0,0,1,1,1,1], [0,1,1,0,1,0,0,0], [0,0,1,1,0,0,0,1], [1,1,0,1,0,0,1,1],
                             [1,0,1,0,0,1,0,1], [0,1,0,1,1,1,1,1], [1,1,1,0,1,0,0,0], [0,1,1,1,0,0,0,1], [1,1,1,1,0,0,1,1],
                             [1,0,1,1,0,1,0,1], [1,0,0,1,1,1,1,1]
                            ]


    function countWeights(matrix){
        var hash = []
        for (var i = 0; i<matrix.length; i++){
            var numOnes = 0
            matrix[i].forEach(bit => {
                if(bit == 1){numOnes ++}
            })
            //console.log("in column " + i + " there are " + numOnes)
            //console.log(hash)
            if(i == 0){
                //first smallest weight
                hash.push({column: i, numOnes: numOnes})
            } else if(numOnes < hash[0].numOnes){
                //clear and replace the hash - new smallest weight
                hash = []
                hash.push({column: i, numOnes: numOnes})
            } else if (numOnes == hash[0].numOnes){
                //add to hash
                hash.push({column: i, numOnes: numOnes})
            }
        }

        return hash
    }


    function findDmin(matrix){

        //to find smallest Hamming weight, find the vector with the least # of 1s - could be multiple
        function countWeights(){
        var hash = []
        for (var i = 0; i<matrix.length; i++){
            var numOnes = 0
            matrix[i].forEach(bit => {
                if(bit == 1){numOnes ++}
            })
            hash.push({column: i, numOnes: numOnes})
        }
        return hash
    }

        function dMin(weightHash){

        }

        return dMin(countWeights())

    }



    console.log(countWeights(hammingCodeBook));
}());
