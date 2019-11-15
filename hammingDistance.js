(function main() {
    //matrix written as list of arrays where each array represents a column in the matrix
    const hammingCodeBook = [[1,0,0,0,1,0,0,0], [0,1,0,0,0,0,0,1], [0,0,1,0,0,0,1,1],
                             [0,0,0,1,0,1,0,1], [1,1,0,0,1,1,1,1], [0,1,1,0,1,0,0,0], [0,0,1,1,0,0,0,1], [1,1,0,1,0,0,1,1],
                             [1,0,1,0,0,1,0,1], [0,1,0,1,1,1,1,1], [1,1,1,0,1,0,0,0], [0,1,1,1,0,0,0,1], [1,1,1,1,0,0,1,1],
                             [1,0,1,1,0,1,0,1], [1,0,0,1,1,1,1,1]
                            ]

    var numOfColumns = 0
    hammingCodeBook.forEach(column => numOfColumns ++)
    console.log(numOfColumns)

    function findDmin(matrix){
        var initDmin = null
        function countWeights(){
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
        var smallestWVectors = countWeights()

        function hammingDistance(a, b) {
          let distance = 0;
            console.log("comparing " + a + " with " + b)
          for (let i = 0; i < a.length; i += 1) {
            if (a[i] !== b[i]) {
              distance += 1;
            }
          }

          return distance;
        }
        function dMin(){
            for(var i=0; i<smallestWVectors.length; i++){
                var compColumn = smallestWVectors[i].column
                console.log("Comparing column " + compColumn)
                for(var j=0; j<numOfColumns; j++){
                    if(compColumn == j){j++}
                    let hamDist = hammingDistance(
                        hammingCodeBook[compColumn], hammingCodeBook[j]
                    )
                    console.log("Comp Column " + compColumn + " has min ham dist " + hamDist)
                    if(initDmin == null){
                        console.log("first dmin is " + hamDist)
                        initDmin = hamDist
                    } else if (hamDist < initDmin){
                        console.log("Found smaller dMin " + hamDist)
                        initDmin = hamDist
                    }
                }

            }
            return initDmin
        }

        return dMin()

    }



    //console.log(countWeights(hammingCodeBook));
    console.log(findDmin(hammingCodeBook))
}());
