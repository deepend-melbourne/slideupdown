Angular JS directive that slides the element up and down using css3 animation.
The height gets correctly adjusted if content gets added to or removed after 
a transition occurs.

USAGE:

<div slide-updown="boolean expression" /></div>

You must also add transition css to your project:

.slideupdown-wrapper {
    height: 0px;
    overflow-y: hidden;
}

.slideupdown-sliding {
    transition-property: height;
    transition-duration: 0.5s;
}

