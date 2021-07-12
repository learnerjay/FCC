/*
Select a Group of Elements with D3

D3 also has the selectAll() method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

const anchors = d3.selectAll("a");

Like the select() method, selectAll() supports method chaining, and you can use it with other methods.

Select all of the li tags in the document, and change their text to the string list item by chaining the .text() method.
*/
Solution
<body>
  <ul>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ul>
  <script>
    // Add your code below this line
     const anchors = d3.selectAll("li");
    // Add your code above this line
  </script>
</body>