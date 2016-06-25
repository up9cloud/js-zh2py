
# jquery.Zh2Py.min.js

不知原作者是誰，所以改寫下。希望能找到原作者。

- 原本是遍歷搜尋，為了以後著想還是改成字對音。

## usage

###### browser (jquery)

```js
(function (jQuery) {
 const zh2py = require('zh2py');
    // bind toPinyin to jquery.
    jQuery.fn.toPinyin = function (h) {
        const source = jQuery(this).text();
        return zh2py(source);
    };
})(jQuery);

$('text-div-id').toPinyin();
```

###### browser

```js
const zh2py = require('zh2py');
console.log(zh2py('芭樂'));
// Ba 樂
console.log(zh2py('芭樂', '*'));
// Ba * 
```

## dev

- `npm install -g gulp`
- `npm install`

### build

```sh
gulp build
```

### test

```sh
./docker.run.sh

# open browser
# localhost/test/index.html
```

