This library was forked from [frappe/gantt](https://github.com/frappe/gantt/)

<div align="center">
    <h2>Frappe Gantt</h2>
    <p align="center">
        <p>A simple, interactive, modern gantt chart library for the web, based on <a href='https://github.com/frappe/gantt/'>frappe/gantt</a></p>
        <a href="https://codelitt.github.io/gantt2">
            <b>View the demo »</b>
        </a>
    </p>
</div>

<p align="center">
    <a href="https://frappe.github.io/gantt">
        <img src="https://cloud.githubusercontent.com/assets/9355208/21537921/4a38b194-cdbd-11e6-8110-e0da19678a6d.png">
    </a>
</p>

### Install
```
npm install codelitt-gantt2
```

### Usage
Include it in your HTML:
```
<script src="codelitt-gantt2.min.js"></script>
<link rel="stylesheet" href="codelitt-gantt2.css">
```

And start hacking:
```js
var tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
  ...
]
var gantt = new Gantt("#gantt", tasks);
```

You can also pass various options to the Gantt constructor:
```js
var gantt = new Gantt("#gantt", tasks, {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',   
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null
});
```

If you want to contribute:

1. Clone this repo.
2. `cd` into project directory
3. `yarn`
4. `yarn run dev`

License: MIT

------------------
Project maintained by [Codelitt](https://github.com/codelitt)
