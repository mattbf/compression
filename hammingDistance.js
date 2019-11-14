(function main() {
    //matrix written as list of arrays where each array represents a column in the matrix
    const hammingCodeBook = [[1,0,0,0,1,0,0,0], [0,1,0,0,0,0,0,1], [0,0,1,0,0,0,1,1],
                             [0,0,0,1,0,1,0,1], [1,1,0,0,1,1,1,1], [0,1,1,0,1,0,0,0], [0,0,1,1,0,0,0,1], [1,1,0,1,0,0,1,1],
                             [1,0,1,0,0,1,0,1], [0,1,0,1,1,1,1,1], [1,1,1,0,1,0,0,0], [0,1,1,1,0,0,0,1], [1,1,1,1,0,0,1,1],
                             [1,0,1,1,0,1,0,1], [1,0,0,1,1,1,1,1]
                            ]
    hammingCodeBook.forEach(column => {
        console.log("column is " + column.length + " long" + column)
    })

    console.log('Hello World!');
}());
