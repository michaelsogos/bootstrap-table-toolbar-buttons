Custom Toolbar Buttons
=======================

This is an extension of [Bootstrap table](http://bootstrap-table.wenzhixin.net.cn/) to add custom buttons to toolbar, close to default buttons like "refresh", "column selector", etc.

Features
-----
- Add a custom button with specified icon that on click event call a custom function

Demo
-----
See it in action: [demo here](https://jsfiddle.net/michaelsogos/w112m1o3/)

Installation
-----
#### Bower

```
bower install bootstrap-table-toolbar-buttons
```

Usage
-----
Include this extension after [Bootstrap-table](https://github.com/wenzhixin/bootstrap-table).
In case you use an AMD loader (like require.js) specify manually dependecies to jQuery, bootstrap and bootstrap-table (like shims in require.js).

```html
<script src="bootstrap-table-toolbar-buttons.js"></script>
```

Simple example:
```html
<body>
    <div class="container">
      <div class="row">
        <table id='grid'>
            <thead>
              <tr>
                <th data-field='itemid'>Item ID</th>
                <th data-field='name'>Name</th>
                <th data-field='price'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>ABC</td><td>$1.00</td></tr>
              <tr><td>2</td><td>DEF</td><td>$2.00</td></tr>
              <tr><td>3</td><td>GHI</td><td>$3.00</td></tr>
              <tr><td>4</td><td>XYZ</td><td>$4.00</td></tr>
            </tbody>
        </table>
      </div>  
    </div>
  
    <!-- context menu -->
    <ul id="context-menu" class="dropdown-menu">
        <li data-item="edit"><a>Edit</a></li>
        <li data-item="delete"><a>Delete</a></li>
        <li data-item="action1"><a>Action Here</a></li>
        <li data-item="action2"><a>And Action Here</a></li>
    </ul>  

    <div id="filters-dialog" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title ">Table Filters</h4>
                </div>
                <div class="modal-body">
                    <span>Add here filter fields!</span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger pull-left">Reset Filters</button>
                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>    

    <script>
    $(function() {
        $('#grid').bootstrapTable({
            showRefresh: true,
            customToolbarButtons: [
                {
                    name: "grid-filters",
                    title: "Filters",
                    icon: "glyphicon-filter",
                    callback: onShowFiltersDialog
                }
            ]
        });
    });

    var onShowFiltersDialog = function(){
        $('#filters-dialog').modal('show');
    }
    </script>
</body>
```

Options
-----

|Name                    |Type                 |Default   |Description|
|------------------------|---------------------|----------|-----------|
|customToolbarButtons    |Array                |[]        |An array of button object (see below).|

Button object
----

|Name                    |Type                 |Default   |Description|
|------------------------|---------------------|----------|-----------|
|name                    |String               |undefined |The attribute NAME of the button. It must be unique else just one button will be rendered.|
|title                   |String               |undefined |The attribute TITLE and ARIA-LABEL of the button.|
|icon                    |String               |undefined |The css class name of the button (usually a glyphicon), it depend on the option *iconsPrefix*.|
|callback                |Function             |undefined |The function will be called when user raise CLICK event to the button.|
