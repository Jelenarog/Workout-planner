var granimInstance = new Granim({
    element: '#granimCanvis',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ABABAB', '#ABABAB'],
                ['#646464', '#272727'],
                ['#3f3f3f', '#3f3f3f'],
                ['#646464', '#ABABAB'],
            ]
        }
    }
});