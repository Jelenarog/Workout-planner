var granimInstance = new Granim({
    element: '#granimCanvis',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ffffff', '#eff1f3'],
                ['#eff1f3', '#272727'],
                ['#272727', '#272727'],
                ['#272727', '#eff1f3'],
                
            ]
        }
    }
});