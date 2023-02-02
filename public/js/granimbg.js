var granimInstance = new Granim({
    element: '#granimCanvis',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ABABAB', '#ABABAB'],
                ['#646464', '#646464'],
                ['#646464', '#646464'],
                ['#ABABAB', '#ABABAB'],
                
            ]
        }
    }
});