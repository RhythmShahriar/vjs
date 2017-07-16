# VJS (VanillaJS)

This is a tiny helper library for JavaScript to make it easier to use. In general, people use jQuery to reduce the length of the code but to get great cross browser support and reduce the unnecessary load of jQuery this tiny library help to code faster.

###### version: 1.0
```
@author Rhythm Shahriar <rhy@rhythmshahriar.com>
@link http://rhythmshahriar.com
```

#####  Following are the helper methods we will construct here using Vanilla JavaScript equivalent to jQuery (common)
```
 $(el)                            => vjs.node(el)
 $(el).hasClass(cl)               => vjs.hasClass(el, cl)
 $(el).addClass(cl)               => vjs.addClass(el, cl)
 $(el).removeClass(cl)            => vjs.removeClass(el, cl)
 $(el).toggleClass(cl)            => vjs.toggleClass(el, cl)
 $(el).parentNode(cl)             => vjs.parentNode(cl)
 $(el).children(cl)               => vjs.children(el)
 $(el).hide()                     => vjs.hide(el)
 $(el).show()                     => vjs.show(el)
 $(el).attr(prop, val(optional))  => vjs.attr(el, prop, val(optional))
 $(el).find(cl)                   => vjs.find(el, cl)
 $(el).append(html)               => vjs.append(el, container, html)
 $(el).prepend(html)              => vjs.prepend(el, container, html)
```
