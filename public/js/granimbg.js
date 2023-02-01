var granimInstance = new Granim({
    element: '#granimCanvis',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ffffff', '#ABABAB'],
                ['#646464', '#646464'],
                ['#646464', '#eff1f3'],
                
            ]
        }
    }
});