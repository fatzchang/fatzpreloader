# fatzpreloader
## Introduction
a light package for creating a loading view

##Usage
###init:
```
 var fatzpreloader = new Fatzpreloader();
```

you can also send an optional setting object like:

```
{
    path: "url",
    width: "50px",
    height: '50px',
    time: 0
}
```

###show:
```
fatzpreloader.show();
```

if you want to show another loading image in some case, you can pass an image url as an optional parameter like:

```
fatzpreloader.show("https://xxx.gif");
```

###hide:
```
fatzpreloader.hide();
```