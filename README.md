# ng-dragtable

Wrapper around [dragtable](https://github.com/pismo/dragtable)

## Install

### bower
`bower install --save pismo/dragtable`

### npm
`bower install --save pismo/dragtable`

## How to use
```js
angular.module('myApp', ['dragtable']);
```

```html
...

<body ng-app="myApp">
    <table dragtable>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Demo
                </td>
                <td>
                   0.13
                </td>
            </tr>
        </tbody>
    </table>
</body>

```
