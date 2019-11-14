(function main() {
    //matrix written as list of arrays where each array represents a column in the matrix
    const hammingCodeBook = [[1,0,0,0,1,0,0,0], [0,1,0,0,0,0,0,1], [0,0,1,0,0,0,1,1],
                             [0,0,0,1,0,1,0,1], [1,1,0,0,1,1,1,1], [0,1,1,0,1,0,0,0], [0,0,1,1,0,0,0,1], [1,1,0,1,0,0,1,1],
                             [1,0,1,0,0,1,0,1], [0,1,0,1,1,1,1,1], [1,1,1,0,1,0,0,0], [0,1,1,1,0,0,0,1], [1,1,1,1,0,0,1,1],
                             [1,0,1,1,0,1,0,1], [1,0,0,1,1,1,1,1]
                            ]
    //to find smallest Hamming weight, find the vector with the least # of 1s - could be multiple
    var currentSmallestColumn = null
    var smallestWeight = []
    function countWeights(matrix){
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



    console.log(countWeights(hammingCodeBook));
}());
