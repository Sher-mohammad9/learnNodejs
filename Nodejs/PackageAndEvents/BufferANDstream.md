# What is Buffer?

```
Buffer ek datatype hoti hai. jab data sara aa jata hai to buffer data ko binnery form me convert kar deta hai. sme data binnery form me hota hai. buffer ki help se user different type se data ko read, write kar sakta hai.
```

# What is Stream?

```
Stream ek concept hota hai. jiski help se data ko chote-chote hiso me read and write ker ke liye use late hai;

Stream ko 4 type se use kar sakte hai.

1. Readable Stream -> Stream data ko chote-chote hiso bante kar read karta hai;
   Example -> Request data, ReadFile
   Readable Stream events -> data & end
   readale Stream methos : read & pipe

2. Writeble Stream -> Stream data ko chote-chote hiso bante kar write karta hai;
   Example -> response data, writeFile
   Readable Stream events -> dring & finish
   readale Stream methos : write & end

3.Duplex Stream -> Duplex Stream data ko chote-chote hiso bante kar ek sath      read-write karta hai;
   Example -> Web Sokets

4. Transform Stream ->    
```
```