### datafilter.js

---
datafilter is javascript library to filter data from an array of objects (you might consider it like json but not actual json ;)).


#### Code Snippet

```
<script>
    const filteredData = new Filter ({
        data:data,
        value:"4"
    }).Search();
</script>

```

### Api

###### 1. data:
Takes an array as an argument it should contain an array of lists.

> type:array

###### 2. value:
The value which should be searched.

> type:string

###### 3. searchparam:

(Optional) takes the key of an object, by which an item should be searched. 

> type:string