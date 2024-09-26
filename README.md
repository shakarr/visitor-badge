# Visitor Badge

Visitor badge is a badge generator service to count visitors of your markdown file, make in node.

## Example Use

Default use:

```
![visitors](https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr)
```
![visitors](https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr)

You can put it in a img tag also:

```
 <img src="https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr" />
```
 <img src="https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr" />

**NOTE: If you see that the image is not updated when visiting the page, it may be that you have cache problems with the browser, for this you can do the following**

```
 <img src="https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr?t=${Date.now()}" />
```

Or

```
![visitors](https://visitorbadge.shakarzr.com/api/counter/hit/shakarzr/shakarzr?t=${Date.now()})
```
