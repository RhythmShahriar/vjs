/**
 *  @author Rhythm Shahriar <rhy@rhythmshahriar.com>
 *  @link http://rhythmshahriar.com
 *  @version 1.0
 *
 *  This is a tiny helper library for JavaScript to make it easier to use.
 *  In general, people use jQuery to reduce the length of the code
 *  but to get great cross browser support and reduce the unnecessary
 *  load of jQuery this tiny library help to code faster.
 *
 *  Following are the helper methods we will construct here
 *  using Vanilla JavaScript equivalent to jQuery (common)
 *
 *  $(el)                            => vjs.node(el)
 *  $(el).hasClass(cl)               => vjs.hasClass(el, cl)
 *  $(el).addClass(cl)               => vjs.addClass(el, cl)
 *  $(el).removeClass(cl)            => vjs.removeClass(el, cl)
 *  $(el).toggleClass(cl)            => vjs.toggleClass(el, cl)
 *  $(el).parentNode(cl)             => vjs.parentNode(cl)
 *  $(el).children(cl)               => vjs.children(el)
 *  $(el).hide()                     => vjs.hide(el)
 *  $(el).show()                     => vjs.show(el)
 *  $(el).attr(prop, val(optional))  => vjs.attr(el, prop, val(optional))
 *  $(el).find(cl)                   => vjs.find(el, cl)
 *  $(el).append(html)               => vjs.append(el, container, html)
 *  $(el).prepend(html)              => vjs.prepend(el, container, html)
 */

/**
 * strict: true
 */
(function (window) {

    'use strict';

    /**
     * Component of the library
     */
    var node, hasClass, addClass, removeClass, toggleClass, parentNode, children, hide, show, attr, find, append, prepend;

    /**
     * This will return the node e.g. $('#node') => vjs.node('#node') 
     * @param el
     * @returns {Element}
     */
    node = function (el) {
        return document.querySelector(el);
    };

    /**
     * This will check class existence
     * @param el
     * @param cl
     * @returns {string|*|boolean}
     */
    hasClass = function (el, cl) {
        return el.className && new RegExp("(\\s|^)" + cl + "(\\s|$)").test(el.className);
    };

    /**
     * This will add class in a node
     * @param el
     * @param cl
     */
    addClass = function (el, cl) {
        if (!vjs.hasClass(el, cl)) {
            el.className += ' ' + cl;
        }
    };

    /**
     * This will remove class from a node
     * @param el
     * @param cl
     */
    removeClass = function (el, cl) {
        var reg = new RegExp("(\\s|^)" + cl + "(\\s|$)");
        el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g, "");
    };

    /**
     * This will check class exist or not if exist it
     * will remove the class if not then add the class
     * @param el
     * @param cl
     */
    toggleClass = function (el, cl) {
        if (vjs.hasClass(el, cl)) {
            vjs.removeClass(el, cl);
        } else {
            vjs.addClass(el, cl);
        }
    };

    /**
     * This will find a parent node from it's child node
     * @param cl
     * @returns {Node}
     */
    parentNode = function (cl) {
        return document.querySelector(cl).parentNode;
    };

    /**
     * This will find the child node from it's parent node
     * @param el
     * @returns {HTMLElement[]}
     */
    children = function (el) {
        return document.querySelector(el).children
    };

    /**
     * This will hide the class by adding display: none
     * @param el
     * @returns {string}
     */
    hide = function (el) {
        return document.querySelector(el).style.display = 'none';
    };

    /**
     * This will remove the display: none css add show the class
     * @param el
     * @returns {string}
     */
    show = function (el) {
        return document.querySelector(el).style.display = '';
    };

    /**
     * This will help to get and set attr from/to a node
     * @param el
     * @param prop
     * @param val
     * @returns {string}
     */
    attr = function (el, prop, val) {
        if (val) {
            return document.querySelector(el).setAttribute(prop, val);
        } else {
            return document.querySelector(el).getAttribute(prop);
        }
    };

    /**
     * This will find all the child node inside a node
     * @param el
     * @param cl
     * @returns {NodeList}
     */
    find = function (el, cl) {
        return el.querySelectorAll(cl);
    };

    /**
     * This will help to append new content inside
     * end of the current node with new container
     * container can be anything e.g. div, p etc
     * @param el
     * @param container
     * @param html
     */
    append = function (el, container, html) {
        // create new container
        var elContainer = document.createElement(container);
        // Give the new container some content
        elContainer.innerHTML = html;
        // Jug it into the parent element
        el.appendChild(elContainer);
    };

    /**
     * This will help to prepend new content before
     * inside of the current node with new container
     * container can be anything e.g. div, p etc
     *
     * @param el
     * @param container
     * @param html
     */
    prepend = function (el, container, html) {
        // create new container
        var elContainer = document.createElement(container);
        // Give the new container some content
        elContainer.innerHTML = html;
        // Prepend it
        el.insertBefore(elContainer, el.firstChild);
    };

    /**
     * Definition of vjs helper library
     * @type {{node: (), hasClass: (), addClass: (), removeClass: (), toggleClass: (), parentNode: (), children: (), hide: (), show: (any), attr: (any), find: (any)}}
     */
    window.vjs = {
        node: node,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        parentNode: parentNode,
        children: children,
        hide: hide,
        show: show,
        attr: attr,
        find: find,
        append: append,
        prepend: prepend
    };

})(window);
