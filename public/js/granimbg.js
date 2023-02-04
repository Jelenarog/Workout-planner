var granimInstance = new Granim({
    element: '#granimCanvis',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#DEE1E3', '#ABABAB'],
                ['#646464', '#646464'],
                ['#646464', '#DEE1E3'],
            ]
        }
    }
});