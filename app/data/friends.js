// ===============================================================================
// DATA
// Below data will hold all of submitted surverys.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var surveysArray = [
    {
        name: 'Emily',
        scores: [
            "1",
            "2",
            "1",
            "1",
            "2"
        ]
    },
    {
        name: 'Meguel',
        scores: [
            "1",
            "2",
            "1",
            "1",
            "2"
        ]
    },
    {
        name: 'Joe',
        scores: [
            "1",
            "2",
            "2",
            "1",
            "2"
        ]
    }

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = surveysArray;